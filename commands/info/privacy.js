// Button Pagination and Discord.js
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const client = require("../../index");

const Settings = require("../../settings");

// Command
module.exports = {
  name: "privacy",
  aliases: ['policy'],
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setTitle("Rapid Privacy Policy")
      .setDescription("View the privacy policy [here](https://github.com/TanjiroSan/Rapid-Privacy-Policy.git)");
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Privacy Policy")
        .setStyle("LINK")
        .setURL(`https://github.com/TanjiroSan/Rapid-Privacy-Policy.git`)
    )
    
    // Sending
    message.channel.send({
      embeds: [embed], 
      components: [button] });
  },
};