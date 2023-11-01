const client = require('../index');
const { MessageEmbed } = require("discord.js");

client.on('guildDelete', async (guild) => {
  const owner = await guild.fetchOwner()
  const channel = client.channels.cache.get("1077106399491915826");
  
  const lostguild = new MessageEmbed()
  .setColor("#2f3136")
  .setTitle("Guild Leave")
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setThumbnail(guild.iconURL({ dynamic: true }))
  .setDescription(`**Server Name** ${guild.name}\n**Server ID** ${guild.id}\n**Owner Tag** - ${owner.user.tag}\n**Owner ID** - ${owner.id}\n**Members** ${guild.memberCount}`)
    
    channel.send({ embeds: [lostguild]})
});

/* On guild leave */
client.on('guildDelete', async (guild) => {
    await client.db.delete(`${guild.id}_antinuke`, true),
    await client.db.delete(`${guild.id}_antiban`, true),
    await client.db.delete(`${guild.id}_antikick`, true),
    await client.db.delete(`${guild.id}_antibot`, true),
    await client.db.delete(`${guild.id}_antiunban`, true),
    await client.db.delete(`${guild.id}_antiguildupdate`, true),
    await client.db.delete(`${guild.id}_antimemberupdate`, true),
    await client.db.delete(`${guild.id}_antichannelcreate`, true),
    await client.db.delete(`${guild.id}_antichanneldelete`, true),
    await client.db.delete(`${guild.id}_antichannelupdate`, true),
    await client.db.delete(`${guild.id}_antirolecreate`, true),
    await client.db.delete(`${guild.id}_antiroledelete`, true),
    await client.db.delete(`${guild.id}_antiroleupdate`, true),
    await client.db.delete(`${guild.id}_antiwebhookcreate`, true),
    await client.db.delete(`${guild.id}_antiwebhookdelete`, true),
    await client.db.delete(`${guild.id}_antiwebhookupdate`, true),
    await client.db.delete(`${guild.id}_antiemojicreate`, true),
    await client.db.delete(`${guild.id}_antiemojidelete`, true),
    await client.db.delete(`${guild.id}_antiemojiupdate`, true),
    await client.db.delete(`${guild.id}_antistickercreate`, true),
    await client.db.delete(`${guild.id}_antistickerdelete`, true),
    await client.db.delete(`${guild.id}_antistickerupdate`, true),
    await client.db.delete(`${guild.id}_antiprune`, true),
    await client.db.delete(`${guild.id}_autorecovery`, true),
    await client.db.delete(`${guild.id}_antilink`, true),
    await client.db.delete(`${guild.id}_wl`),
	await client.db8.delete(`invcroleguild_${guild.id}.Guild`),
    await client.db7.delete(`invcrole_${guild.id}.Role`),
	await client.db7.delete(`${guild.id}_invcsettings`),
	await client.db6.delete(`vanityrole_${guild.id}.Role`),
	await client.db6.delete(`vanityurl_${guild.id}.Vanity`),
	await client.db6.delete(`vanitych_${guild.id}.Channel`);
});

client.on('guildMemberRemove', async (member) => {
  await client.db.pull(`${member.guild.id}_wl.whitelisted`, member.id);
})