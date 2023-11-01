const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "membercount",
    aliases: ['mc'],
    run: async (client, message, args) => {
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel(`${message.guild.memberCount} Users`)
      .setStyle(`SECONDARY`)
      .setCustomId(`p1`)
      .setEmoji(`1007281219051978772`)
    )

  const stts = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
      .setDescription(`<:ET_users:1007281219051978772> **${message.guild.memberCount}** members`)
      .setFooter(`Requested by: ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)

  message.channel.send({ embeds: [stts], components: [button]})
    }
}