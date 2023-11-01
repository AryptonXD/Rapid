const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "emojicount",
    aliases: ['ec'],
    run: async (client, message, args) => {
      const emojis = message.guild.emojis.cache.size
      
    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel(`${emojis} Emojis`)
      .setStyle(`SECONDARY`)
      .setCustomId(`p1`)
      .setEmoji(`1047564576687915009`)
    )

  const stts = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
      .setDescription(`<a:kalp17:1047564576687915009> **${emojis}** emojis`)
      .setFooter(`Requested by: ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)

  message.channel.send({ embeds: [stts], components: [button]})
    }
}