const client = require('../index');
const { ownerIDS } = require('../owner.json');

client.on("webhookCreate", async (webhook) => {
  const auditLog = await webhook.guild.fetchAuditLogs({ limit: 1, type: "WEBHOOK_CREATE" }).catch((_) => { });
  const logs = auditLog.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${webhook.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${webhook.guild.id}_antiwebhookcreate`);
  const autorecovery = await client.db.get(`${webhook.guild.id}_autorecovery`);

  if (executor.id === webhook.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
      await webhook.guild.members.ban(executor.id, {
        reason: "Webhook Create | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }

  });
});

client.on("webhookDelete", async (webhook) => {
  const auditLog = await webhook.guild.fetchAuditLogs({ limit: 1, type: "WEBHOOK_DELETE" }).catch((_) => { });
  const logs = auditLog.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${webhook.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${webhook.guild.id}_antiwebhookdelete`);

  if (executor.id === webhook.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
      await webhook.guild.members.ban(executor.id, {
        reason: "Webhook Delete | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  });
});

client.on("webhookUpdate", async (webhook) => {
  const auditLog = await webhook.guild.fetchAuditLogs({ limit: 1, type: "WEBHOOK_UPDATE" }).catch((_) => { });
  const logs = auditLog.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${webhook.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${webhook.guild.id}_antiwebhookupdate`);

  if (executor.id === webhook.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
      await webhook.guild.members.ban(executor.id, {
        reason: "Webhook update | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  })
});