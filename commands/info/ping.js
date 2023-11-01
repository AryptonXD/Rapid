const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  run: async (client, message, args) => {
    let embed = new MessageEmbed()
            .addField(`**Message Latency**`, `\`\`\`nim\n${Date.now() - message.createdTimestamp}ms\`\`\`\u200b`)
            .addField(`\u200b**API Latency**`, `\`\`\`nim\n${client.ws.ping}ms\`\`\``)
            .setColor("2f3136")
        return message.channel.send({embeds: [embed]})
    }
}