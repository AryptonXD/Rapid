const client = require('../index');
const { ownerIDS } = require('../owner.json');

client.on("emojiCreate", async (emoji) => {
  const auditLogs = await emoji.guild.fetchAuditLogs({ limit: 1, type: "EMOJI_CREATE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${emoji.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${emoji.guild.id}_antiemojicreate`);
  const autorecovery = await client.db.get(`${emoji.guild.id}_autorecovery`);

  if (executor.id === emoji.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
    await emoji.guild.members.ban(executor.id, {
        reason: "Emoji Create | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
    
  if (autorecovery !== true) return;
    await emoji.delete();
  });
});

client.on("emojiDelete", async (emoji) => {
  const auditLogs = await emoji.guild.fetchAuditLogs({ limit: 1, type: "EMOJI_DELETE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${emoji.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${emoji.guild.id}_antiemojidelete`);

  if (executor.id === emoji.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
      await emoji.guild.members.ban(executor.id, {
        reason: "Emoji Delete | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  });
});

client.on("emojiUpdate", async (o, n) => {
  const auditLogs = await n.guild.fetchAuditLogs({ limit: 1, type: "EMOJI_UPDATE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${o.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${n.guild.id}_antiemojiupdate`);
  const autorecovery = await client.db.get(`${n.guild.id}_autorecovery`);

  if (executor.id === n.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
    await n.guild.members.ban(executor.id, {
        reason: "Emoji Update | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
  }

  if (autorecovery !== true) return;
    await n.setName(o.name);
  });
});