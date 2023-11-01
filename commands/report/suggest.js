const Discord = require("discord.js");
const web = new Discord.WebhookClient({ url: 'https://discord.com/api/webhooks/1081571732378370158/nAUak1V5AOSXSCaV6TLnORtnY0davMVYNdjtYdcvjfMtGxeJ4hi3APwSgT5VXHbaII8O' })

module.exports = {
  name: "suggest",
  description: "Suggest Features for Infinity",
  run: async (client, message, args) => {
    const avatar = message.author.avatarURL;
    const suggestion = args.join(" ");
    if (!suggestion) {
      return message.channel.send("Please Suggest Something");
    }
    message.channel.send(
      "Thanks for Suggesting Features for Infinity. Our Mod team will inform you if your Suggestion is accepted or not!"
    );
    const embed = new Discord.MessageEmbed()
      .setAuthor(`New Suggestion!`, avatar)
      .setDescription(`${suggestion} \n\nBy: ${message.author.tag}
User ID: [${message.author.id}](https://discord.com/users/${message.author.id})`)
      .setColor("2f3136");

    web.send({ embeds: [embed] });
  }
};
