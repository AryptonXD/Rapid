const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
    name: "kick",
    run: async (client, message, args) => {

      const guide = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`\`\`\`- [] = optional argument\n- <> = required argument\n- Do NOT Type These When Using Commands !\`\`\`\n\n> Somebody is breaking rules simply kick him from the server as punishment`)
      .addField(`Aliases`, `\`No Aliases\``)
      .addField(`Usage`, `\`?kick <member> [reason=None]\``);

      
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        const exowner = dataa.extraownerlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }

    if (!args[0]) return message.channel.send({ embeds: [guide]});

    if (!member) return message.reply(`💤 | Cannot find that member...`);

    if (member.id === message.author.id)
      return message.channel.send(`❌ | You cannot kick yourself!`);

    if (!member.bannable) return message.channel.send(`❌ | I cannot kick that member`);

    await member.kick()
    message.channel.send({ content: `:anger: | User ${member} has been Kick`, }).then((msg) => { setTimeout(() => msg.delete(), 5000); })
      })
    }
}