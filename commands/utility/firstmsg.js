const { Message, Client, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const client = require("../../index.js");

module.exports = {
  name: "firstmsg",
  aliases: ["firstmessage"],
  category: 'info',
  run: async (client, message, args) => {

   const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Message Link")
        .setStyle("LINK")
        .setURL(`${msg.url}`)
    )

    
     const embed = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription("Content: " + msg.content)
      .addField("Author", `${msg.author}`)
      .addField('Message ID', `${msg.id}`)
      .addField('Created At', `${message.createdAt.toLocaleDateString()}`)
    message.channel.send({ embeds: [embed], components: [button] })
  }
}