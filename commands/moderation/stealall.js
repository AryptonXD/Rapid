const Discord = require('discord.js')
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
    name: 'stealall',
description: `Add Multi Emoji ! credit to [LΣGΣПD and ant ](https://github.com/legend-js-dev/emote-manager/tree/main) `,
    usage: "add-these <emoji> <emoji> .....",
    run: async (client, message, args) => {
        if (!ownerIDS.includes(message.author.id)) {
return message.channel.send(`:x: | **You Don't Have Permission To Use This Command**`)
}
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis) return message.channel.send(`:x: | **Provide The emojis to add**`);
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
            message.guild.emojis.create(
                `${Link}`,
                `${`${emoji.name}`}`
            ).then(em => message.channel.send(em.toString() + " added!")).catch(error => {
              message.channel.send(":x: | an Error occured")
                console.log(error)
})
          
        }
        })
}
}
