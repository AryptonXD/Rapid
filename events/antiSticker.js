const { ownerIDS } = require('../owner.json');
const client = require('../index.js');

client.on("stickerCreate", async (sticker) => {
  const auditLogs = await sticker.guild.fetchAuditLogs({ limit: 1, type: 'STICKER_CREATE' }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if(!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${sticker.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${sticker.guild.id}_antiroleupdate`);
  const autorecovery = await client.db.get(`${sticker.guild.id}_autorecovery`);
    
    if (executor.id === sticker.guild.ownerId) return;
    if (ownerIDS.includes(executor.id)) return;
    if (executor.id === client.user.id) return;
    if (antinuke !== true) return;
    if (trusted === true) return;

  try {
      await sticker.guild.members.ban(executor.id, {
        reason: "Sticker Create | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
  }
  
  if (autorecovery !== true)
    await sticker.delete().catch((_) => { });
  });
});

client.on("stickerDelete", async (sticker) => {
  const auditLogs = await sticker.guild.fetchAuditLogs({ limit: 1, type: 'STICKER_DELETE' }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if(!logs) return;
  const { executor, target } = logs;

  const antinuke = await client.db.get(`${sticker.guild.id}_antistickerdelete`);
  await client.db.get(`${sticker.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
    
    if (executor.id === sticker.guild.ownerId) return;
    if (ownerIDS.includes(executor.id)) return;
    if (executor.id === client.user.id) return;
    if (antinuke !== true) return;
    if (trusted === true) return;

  try {
      await emoji.guild.members.ban(executor.id, {
        reason: "Sticker Delete | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  });
});

client.on("stickerUpdate", async (o, n) => {
  const auditLogs = await n.guild.fetchAuditLogs({ limit: 1, type: 'STICKER_UPDATE' }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if(!logs) return;
  const { executor, target } = logs;

  const antinuke = await client.db.get(`${n.guild.id}_antistickerdelete`);
  await client.db.get(`${n.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const autorecovery = await client.db.get(`${n.guild.id}_autorecovery`);
    
    if (executor.id === sticker.guild.ownerId) return;
    if (ownerIDS.includes(executor.id)) return;
    if (executor.id === client.user.id) return;
    if (antinuke !== true) return;
    if (trusted === true) return;

  try {
      await n.guild.members.ban(executor.id, {
        reason: "Sticker Update | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }

  if (autorecovery !== true) return;
      await n.edit({ name: o.name }).catch((_) => { });
  });
});