const Discord = require("discord.js");
const web = new Discord.WebhookClient({ url: 'https://discord.com/api/webhooks/1081570314292580352/GlJdrANyC2enKctU-PEMOYxCl70gnPTKTKOrog9CNg9CNIBESq5ez9DMLiDyDD4egb8h' });

module.exports = {
  name: "report",
  description: "Report a bug",
  cooldown: 30000,
  run: async (client, message, args) => {
    const report = args.join(" ");
    if (!report) {
      return message.channel.send(
        "Enter the Description of the bug you encountered!"
      );
    }
    return message.channel.send(
      `${message.author}, Your Report has been Successfully Submitted. Our Mod Team will reply to you as soon as possible`
    );
    const embed = new Discord.MessageEmbed()
      .setTitle("New Bug Report")
      .setAuthor(message.member.username, message.member.displayAvatarURL({ dynamic: true }))
      .setDescription(`${report} \n\nBy: ${message.author.tag}
User ID: [${message.author.id}](https://discord.com/users/${message.author.id})`)
      .setColor("2f3136");

    web.send({embeds: [embed]});
  }
}