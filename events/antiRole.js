const client = require('../index');
const { ownerIDS } = require('../owner.json');

client.on("roleCreate", async (role) => {
  const auditLogs = await role.guild.fetchAuditLogs({ limit: 1, type: 'ROLE_CREATE' }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${role.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${role.guild.id}_antirolecreate`);
  const autorecovery = await client.db.get(`${role.guild.id}_autorecovery`);
  

  if (executor.id === role.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;
  if (role.managed) return;

  try {
      await role.guild.members.ban(executor.id, {
        reason: "Role Create | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return
    }
 
  if (autorecovery !== true) return;
    await role.delete();
  });
});

client.on("roleDelete", async (role) => {
  const auditLogs = await role.guild.fetchAuditLogs({ limit: 1, type: "ROLE_DELETE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${role.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${role.guild.id}_antiroledelete`);
  const autorecovery = await client.db.get(`${role.guild.id}_autorecovery`);
  

  if (executor.id === role.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;
  if (role.managed) return;

  try {
      await role.guild.members.ban(executor.id, { 
        reason: 'Role Delete | Not Whitelisted' }).catch((_) => { });
      } catch (err) {
        return;
      }

  if (autorecovery !== true) return;
    await role.guild.roles.create({
      name: role.name,
      color: role.color,
      hoist: role.hoist,
      permissions: role.permissions,
      position: role.position,
      mentionable: role.mentionable,
      reason: 'Anti Role Delete'
      }).catch((_) => { });
  });
});

client.on("roleUpdate", async (o, n) => {
  const auditLogs = await n.guild.fetchAuditLogs({ limit: 1, type: "ROLE_UPDATE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${n.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${n.guild.id}_antiroleupdate`);
  const autorecovery = await client.db.get(`${n.guild.id}_autorecovery`);
  

  if (executor.id === n.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  if (antinuke) {
    n.guild.members.ban(executor.id, {
    reason: "Anti Role Update"
  });
  }

  if (autorecovery !== true) return;
    await n.edit({
      name: o.name,
      color: o.color,
      hoist: o.hoist,
      permissions: o.permissions,
      position: o.position,
      mentionable: o.mentionable,
      reason: 'Anti Role Delete'
      }).catch((_) => { });
  });
});