const client = require('../index.js');

client.on('voiceStateUpdate', async (os, ns) => {
  const invcguild = await client.db8.get(`invcroleguild_${os.guild.id}.Guild`)
  const invcrole = await client.db7.get(`invcrole_${os.guild.id}.Role`);
  const invcsettings = await client.db7.get(`${os.guild.id}_invcsettings`)
  if (ns.guild.id !== `${invcguild}`) return;
  if (!ns) return;

  if (!invcsettings) return;

  if (invcsettings !== true) return;
  const vcrole = os.guild.roles.cache.get(`${invcrole}`);

  if (!os.channel || ns.member) {
      try {
      await ns.member.roles.add(vcrole, {
          reason: 'Invc Roles System: Member Joined VC'
      	}).cache(e => { })
    } catch(err) {
      return console.log(err);
    }
  }
  else {
      try {
    await ns.member.roles.remove(vcrole, {
        reason: 'Invc Roles System: Member Leaved VC'
      	}).cache(e => { })
    } catch(err) {
      return console.log(err);
    }
  }
});