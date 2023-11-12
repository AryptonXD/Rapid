const { ownerIDS } = require('../owner.json');
const client = require('../index.js');

client.on("channelCreate", async (channel) => {
  const auditLogs = await channel.guild.fetchAuditLogs({ limit: 1, type: 'CHANNEL_CREATE' }).catch((_) => { });
  if (!auditLogs || !auditLogs.entries) return;
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${channel.guild.id}_wl`).then(async (data) => {
    const trusted = data.whitelisted.includes(executor.id);
    const antinuke = await client.db.get(`${channel.guild.id}_antichannelcreate`);
    const autorecovery = await client.db.get(`${channel.guild.id}_autorecovery`);

    if (executor.id === channel.guild.ownerId) return;
    if (executor.id === client.user.id) return;
    if (ownerIDS.includes(executor.id)) return;
    if (antinuke !== true) return;
    if (trusted === true) return;

    try {
      await channel.guild.members.ban(executor.id, {
        reason: "Channel Create | Not Whitelisted"
      }).catch((_) => { });
    } catch(err) {
      return;
    }

    if (autorecovery !== true) return;
    await channel.delete().catch((_) => { });

  });
});

client.on("channelDelete", async (channel) => {
  const auditLogs = await channel.guild.fetchAuditLogs({ limit: 1, type: 'CHANNEL_DELETE' }).catch((_) => { });
  if (!auditLogs || !auditLogs.entries) return;
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${channel.guild.id}_wl`).then(async (data) => {
    const trusted = data.whitelisted.includes(executor.id);
    const antinuke = await client.db.get(`${channel.guild.id}_antichanneldelete`);
    const autorecovery = await client.db.get(`${channel.guild.id}_autorecovery`);

    if (executor.id === channel.guild.ownerId) return;
    if (executor.id === client.user.id) return;
    if (ownerIDS.includes(executor.id)) return;
    if (antinuke !== true) return;
    if (trusted === true) return;

    try {
      await channel.guild.members.ban(executor.id, {
        reason: "Channel Delete | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }

    if (autorecovery !== true) return;
    await channel.clone().then(ch => ch.setPosition(channel.position));

  });
});

client.on("channelUpdate", async (o, n) => {
  const auditLogs = await n.guild.fetchAuditLogs({ limit: 1, type: 'CHANNEL_UPDATE' }).catch((_) => { });
  if (!auditLogs || !auditLogs.entries) return;
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${n.guild.id}_wl`).then(async (data) => {
    const trusted = data.whitelisted.includes(executor.id);
    const antinuke = await client.db.get(`${n.guild.id}_antichannelupdate`);
    const autorecovery = await client.db.get(`${n.guild.id}_autorecovery`);

    if (executor.id === o.guild.ownerId) return;
    if (executor.id === client.user.id) return;
    if (ownerIDS.includes(executor.id)) return;
    if (antinuke !== true) return;
    if (trusted === true) return;

    try {
      await n.guild.members.ban(executor.id, {
        reason: "Channel Update | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }

    if (autorecovery !== true) return;
    if (o.name !== n.name) {
      n.edit({ name : o.name }).catch(() => { });
    }
    if (o.parent !== n.parent) {
      n.edit({ parent : o.parent }).catch(() => { });
    }
    if (o.position !== n.position) {
      n.edit({ position : o.position }).catch(() => { });
    }
    if (o.slowmode !== n.slowmode) {
      n.edit({ slowmode : o.slowmode }).catch(() => { });
    }
    if (o.type !== n.type) {
      n.edit({ type : o.type }).catch(() => { });
    }
    if (n.type === `GUILD_TEXT`) {
      if (o.topic !== n.topic) {
        n.edit({ topic : o.topic }).catch(() => { });
      }
    }
    if (n.type === `GUILD_VOICE`) {
      if(o.bitrate !== n.bitrate) {
        n.edit({ bitrate : o.bitrate }).catch((_) => { });
      }
    }
  });
});
