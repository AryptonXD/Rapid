const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "channelcount",
    aliases: ['cc'],
    run: async (client, message, args) => {
      const channels = message.guild.channels.cache

      loda = channels.filter(channel => channel.type === 'GUILD_TEXT').size; 
      lodaa = channels.filter(channel => channel.type === 'GUILD_VOICE').size;
      
    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel(`${loda + lodaa} Channels`)
      .setStyle(`SECONDARY`)
      .setCustomId(`p1`)
      .setEmoji(`1022870649162694736`)
    )

  const stts = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(`${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`)
      .setDescription(`<:ET_channel:1022870649162694736> **${loda + lodaa}** channels`)
      .setFooter(`Requested by: ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)

  message.channel.send({ embeds: [stts], components: [button]})
    }
}