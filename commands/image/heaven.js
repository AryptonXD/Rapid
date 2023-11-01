const Color = "2f3136";
const Discord = require("discord.js");

module.exports = {
  name: "heaven",
  aliases: ["hvn"],
  description: "Return A heaven Image!",
  usage: "Heaven | <Mention Or ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(`https://vacefron.nl/api/heaven?user=${Member.user.displayAvatarURL({ format: "png" })}`)
    .setTimestamp();

    return message.channel.send({embeds: [Embed]});
  }
};