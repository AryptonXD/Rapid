// Button Pagination and Discord.js
const { Message, Client, MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const client = require("../../index.js");

const Settings = require("../../settings.js");

// Command
module.exports = {
  name: "vote",
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription("Click the button below.");
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel("Vote Me")
      .setStyle(`LINK`)
      .setURL(`https://top.gg/bot/${client.user.id}/vote`)
    )
    
    // Sending
    message.channel.send({
      embeds: [embed], 
      components: [button] });
  },
};