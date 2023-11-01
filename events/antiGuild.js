const client = require('../index');
const { ownerIDS } = require('../owner.json');

client.on("guildUpdate", async (o, n) => {
  const auditLogs = await n.fetchAuditLogs({ limit: 1, type: "GUILD_UPDATE" }).catch((_) => { });
  const logs = auditLogs.entries.first();
  if (!logs) return;
  const { executor, target } = logs;

  await client.db.get(`${o.guild.id}_wl`).then(async (data) => {
  const trusted = data.whitelisted.includes(executor.id);
  const antinuke = await client.db.get(`${n.guild.id}_antiguildupdate`);
  const autorecovery = await client.db.get(`${n.guild.id}_autorecovery`);

  if (executor.id === o.ownerId) return;
  if (executor.id === client.user.id) return;
  if (ownerIDS.includes(executor.id)) return;
  if (antinuke !== true) return;
  if (trusted === true) return;

  
    try {
      await n.members.ban(executor.id, {
        reason: "Guild Update | Not Whitelisted"
      }).catch((_) => { });
    } catch (err) {
      return;
    }

  if (autorecovery !== true) return;
      const oldIcon = o.iconURL();
      const oldName = o.name;
  
      const newIcon = n.iconURL();
      const newName = n.name;
  
      if (oldName !== newName) {
        await n.setName(oldName);
      }
  
      if (oldIcon !== newIcon) {
        await n.setIcon(oldIcon);
      }
  
      /* Anti Vanity URL Snipe Suggested By sai */
      if (o.features.includes('VANITY_URL') && n.features.includes('VANITY_URL')) {
        const oldVanityCode = o.vanityURLCode;
        const newVanityCode = n.vanityURLCode;
  
        if (oldVanityCode !== newVanityCode) {
          await phin({
            method: 'PATCH',
            url: `https://discord.com/api/v9/guilds/${n.id}/vanity-url`,
            json: true,
            headers: {
              "accept": "*/*",
              "Content-Type": 'application/json',
              "Authorization": `Bot ${bot.info.token}`
            },
            data: JSON.stringify({
              code: `${oldVanityCode}`
            }),
          }, (err, res, bod) => {
            
          }).catch((_) => { })
        }
      }
      if (!n.equals(o)) {
        await n.edit({
          features: o.features
        }).catch((_) => { });
      }

    if (o.name !== n.name) {
            n.setName(o.name)
        }
    if(o.iconURL() !== n.iconURL()){
            n.setIcon(o.iconURL())
        }

  if (!n.equals(o)) {
    n.edit({
      features: o.features
    });
  }

  if (!o.features.includes('COMMUNITY') && n.features.includes('COMMUNITY')) {
    n.edit({
      features: o.features
    });

    for (x = 0; x <= 3; x++) {
      n.channels.cache.forEach((c) => {
        if (c.name === 'rules') {
          c.delete();
        } else if (c.name === 'moderator-only') {
          c.delete();
       	 			}
      			})
    		}
  		}
  	});
});