const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "rolecount",
    aliases: ['rc'],
    run: async (client, message, args) => {
      const roles = message.guild.roles.cache.size;
      
    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel(`${roles} Roles`)
      .setStyle(`SECONDARY`)
      .setCustomId(`p1`)
      .setEmoji(`1046451280526192720`)
    )

  const stts = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
      .setDescription(`<a:emoji_79:1046451280526192720> **${roles}** roles`)
      .setFooter(`Requested by: ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)

  message.channel.send({ embeds: [stts], components: [button]})
    }
}