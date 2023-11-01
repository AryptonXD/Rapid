// Button Pagination and Discord.js
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const client = require("../../index");

const Settings = require("../../settings");

// Command
module.exports = {
  name: "invite",
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription("Click the button below.");
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    )
    
    // Sending
    message.reply({
      embeds: [embed], 
      components: [button] });
  },
};