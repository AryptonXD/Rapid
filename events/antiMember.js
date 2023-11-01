const client = require('../index');
const { ownerIDS } = require('../owner.json');

client.on("guildBanAdd", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_BAN_ADD" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${member.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${member.guild.id}_antiban`);
  const autorecovery = await client.db.get(`${member.guild.id}_autorecovery`);
  
  if (executor.id === member.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
    await member.guild.members.ban(executor.id, {
        reason: "Member Ban | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  
  if (autorecovery !== true) return; 
    await member.guild.members.unban(target.id).catch((_) => { });
  });
});

client.on("guildBanRemove", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_BAN_REMOVE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;

  await client.db.get(`${member.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${member.guild.id}_antiunban`);
  const autorecovery = await client.db.get(`${member.guild.id}_autorecovery`);
  
  if (executor.id === member.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

    try {
      await member.guild.members.ban(executor.id, {
        reason: "Member Unban | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  
  if (autorecovery !== true) return;
  await member.guild.members.ban(target.id, {
    reason: "Anti Member Unban"
  }).catch((_) => { });
  });
});

client.on("guildMemberAdd", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 1, type: "BOT_ADD" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;
  
    await client.db.get(`${member.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
    const antinuke = await client.db.get(`${member.guild.id}_antibot`);
    const autorecovery = await client.db.get(`${member.guild.id}_autorecovery`);

    if (executor.id === member.guild.ownerId) return;
    if (executor.id === client.user.id) return;
    if (ownerIDS.includes(executor.id)) return;
    if (!target.bot) return;
    if (antinuke !== true) return;
    if (trusted === true) return;
    if (target.id !== member.id) return;

  try {
      await member.guild.members.ban(executor.id, {
        reason: "Bot Add | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  
  if (autorecovery !== true) return;
    await member.guild.members.ban(target.id, {
      reason: "Illegal Bot | Not Whitelisted"
    }).catch((_) => { });
    });
});

client.on("guildMemberRemove", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_KICK" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;


  await client.db.get(`${member.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${member.guild.id}_antikick`);

  if (!logs) return;
  if (executor.id === member.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (member.id !== target.id) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try{
      await member.guild.members.ban(executor.id, {
        reason: "Member Kick | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
  });10
});

client.on("guildMemberRemove", async (member) => {
  const auditLogs = await member.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_PRUNE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  const antinuke = await client.db.get(`${member.guild.id}_antiprune`);

  if (executor.id === member.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;

  try {
      await member.guild.members.ban(executor.id, {
        reason: "Member Prune | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }
});

client.on("guildMemberUpdate", async (o, n) => {
  const auditLogs = await n.guild.fetchAuditLogs({ limit: 1, type: "MEMBER_ROLE_UPDATE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  const { executor, target } = logs;

  await client.db.get(`${n.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${n.guild.id}_antimemberupdate`);
  const autorecovery = await client.db.get(`${n.guild.id}_autorecovery`);

  if (executor.id === n.guild.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (n.user.id !== target.id) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  try {
      await n.guild.members.ban(executor.id, {
        reason: `Member Role Update | Not Whitelisted`
      }).catch((_) => { });
    } catch (err) {
      return;
    }

  if (autorecovery !== true) return;
  const oldRoles = o.roles;
  const newRoles = n.roles;
  
  if (oldRoles !== newRoles) {
    await n.roles.set(o.roles.cache).catch((_) => { });
   }
  });
});