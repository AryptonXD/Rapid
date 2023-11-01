const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

module.exports = {
  name: "lockall",
  category: 'mod',
  run: async (client, message, args) => {

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner or Extra Admin to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        await client.db11.get(`${message.guild.id}_ea`).then(async (dataaa) => {
        const exowner = dataa.extraownerlist;
        const exadmin = dataaa.extraadminlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
    let locked = 0;
    const channel = message.mentions.channels.first()  || message.guild.channels.cache.get(args[0])  ||  message.channel;
    message.guild.channels.cache.filter(c => c.name).forEach(channel => {
      if(channel.manageable){
        channel.permissionOverwrites.edit(message.guild.id, {
          SEND_MESSAGES: false,
          reason: `${message.author.tag} (${message.author.id})`
        })
        locked++;
      }
    })
    message.channel.send({embeds: [new MessageEmbed().setColor('2f3136').setDescription(`Successfully **locked** ${locked} channels from this server.`)]})
        })
        })
  }
}