const client = require('../index');
const { MessageEmbed } = require("discord.js");

client.on('guildCreate', async (guild) => {
  const owner = await guild.fetchOwner()
  const channel = client.channels.cache.get("1077106398053281792");
  
  const newguild = new MessageEmbed()
  .setColor("#2f3136")
  .setTitle("Guild Joined")
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setThumbnail(guild.iconURL({ dynamic: true }))
  .setDescription(`**Server Name** ${guild.name}\n**Server ID** ${guild.id}\n**Owner Tag** - ${owner.user.tag}\n**Owner ID** - ${owner.id}\n**Members** ${guild.memberCount}`)
    
    channel.send({ embeds: [newguild]})
});

client.on('guildCreate', async (guild) => {
	await client.db.set(`${guild.id}_wl`, { whitelisted: [] });
});

    /* On guild leave */
client.on('guildDelete', async (guild) => {
   await client.db.delete(`${guild.id}_wl`);
});