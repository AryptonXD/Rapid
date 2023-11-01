const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "boostcount",
    aliases: ['bc'],
    run: async (client, message, args) => {
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel(`${message.guild.premiumSubscriptionCount} Boosts`)
      .setStyle(`SECONDARY`)
      .setCustomId(`p1`)
      .setEmoji(`1046452456164446248`)
    )

  const stts = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
      .setDescription(`<a:854624171073339413:1046452456164446248> **${message.guild.premiumSubscriptionCount}** boosts`)
      .setFooter(`Requested by: ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)

  message.channel.send({ embeds: [stts], components: [button]})
    }
}