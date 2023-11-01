const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "steal",
  description: `Add Emoji ! credit to [LΣGΣПD and ant ](https://github.com/legend-js-dev/emote-manager/tree/main) `,
  usage: "add <emoji>",
  run: async (client, message, args) => {

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner || Extra Admin or Extra Mod to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        await client.db11.get(`${message.guild.id}_ea`).then(async (dataaa) => {
        await client.db11.get(`${message.guild.id}_em`).then(async (dataaaa) => {
        const exowner = dataa.extraownerlist;
        const exadmin = dataaa.extraadminlist;
        const exmod = dataaaa.extramodlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !exmod.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
    let isUrl = require("is-url");
    let type = "";
    let name = "";
    let emote = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi);
    if (emote) {
      emote = emote[0];
      type = "emoji";
      name = args
        .join(" ")
        .replace(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi, "")
        .trim()
        .split(" ")[0];
    } else {
      emote = `${args.find(arg => isUrl(arg))}`;
      name = args.find(arg => arg != emote);
      type = "url";
    }
    let emoji = { name: "" };
    let Link;
    if (type == "emoji") {
      emoji = Discord.Util.parseEmoji(emote);
      Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
        emoji.animated ? "gif" : "png"
      }`;
    } else {
      if (!name) return message.channel.send("Please provide a name!");
      Link = message.attachments.first()
        ? message.attachments.first().url
        : emote;
    }
    message.guild.emojis
      .create(`${Link}`, `${`${name || emoji.name}`}`)
      .then(em => message.channel.send(em.toString() + " added!"))
      .catch(error => {
        message.channel.send(":x: | an Error occured");
        console.log(error);
      });
        })
        })
        })
  }
};
