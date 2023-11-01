// Button Pagination and Discord.js
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");

// Command
module.exports = {
  name: "code",
  aliases: ['source'],
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription("Click the button below.");
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Source Code")
        .setStyle("LINK")
        .setURL(`https://youtu.be/dQw4w9WgXcQ`)
    )
    
    // Sending
    message.channel.send({
      embeds: [embed], 
      components: [button] });
  },
};