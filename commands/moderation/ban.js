const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
    name: "ban",
    aliases: ["hackban", "fuckban", "fuckyou", "fuckoff"],
    run: async (client, message, args) => {

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        const exowner = dataa.extraownerlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }

      const guide = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`\`\`\`- [] = optional argument\n- <> = required argument\n- Do NOT Type These When Using Commands !\`\`\`\n\n> Somebody is breaking rules again and again | ban him from the server as punishment`)
      .addField(`Aliases`, `\`hackban\` | \`fuckban\` | \`fuckyou\` | \`fuckoff\``)
      .addField(`Usage`, `\`?ban <member> [reason=None]\``);
      
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0]) {
      return message.channel.send({ embeds: [guide] });
    }

    if (!args[0]) return message.channel.send({ embeds: [guide]})

    if (!member) return message.reply(`💤 | Cannot find that member...`);

    if (member.id === message.author.id)
      return message.channel.send(`❌ | You cannot ban yourself!`);
    
    if (!member.bannable) return message.channel.send(`❌ | I cannot ban that member`);

     await member.ban()
     return message.channel.send({ content: `:anger: | User ${member} has been banned`, }).then((msg) => { setTimeout(() => msg.delete(), 5000); })
        })
	}
}