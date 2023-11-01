const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "channelinfo",
  aliases: ['ci', 'channeli', 'cinfo'],
  run: async (bot, message, args) => {
        const channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.channel.send("**Channel Not Found!**");

        const channelembed = new MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(`${message.guild.iconURL()}`)
            .addField("**NSFW**", `${channel.nsfw}`, true)
            .addField("**Channel ID**", `${channel.id}`, true)
            .addField("**Channel Type**", `${channel.type}`)
            .addField("**Channel Description**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", `${channel.createdAt}`)
            .setColor("2f3136")
        message.channel.send({ embeds: [channelembed]});
    }
}