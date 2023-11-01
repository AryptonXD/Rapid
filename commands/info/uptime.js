const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
  aliases: ['up'],
  run: async (client, message, args) => {
    let totalSeconds = message.client.uptime / 1000;
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            
            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    const ping = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`\`\`\`\nUptime  ::  ${uptime}\`\`\``);
    // Sending
    message.channel.send({ embeds: [ping]});
  },
};