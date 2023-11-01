const Discord = require("discord.js");

module.exports = {
  name: "howgay",
  description: "Just for fun command",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first() || message.author;
    const ID = user.id;

    let rng = Math.floor(Math.random() * 101);

    const howgayembed = new Discord.MessageEmbed()
      .setTitle(`Gay Machine Calculator`)
      .setDescription(`<@${ID}> is ` + rng + "% Gay🌈")
      .setColor("2f3136");

    message.channel.send({ embeds: [howgayembed] });
  },
};
