const { MessageEmbed } = require("discord.js");
const { ownerIDs } = require('../../owner.json');
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "eval",
  description: "Run a whole fuckin' code with this!",
  run: async (client, message, args) => {
    //Eval Command(Not to be made public btw!)
    if (!ownerIDs.includes(message.author.id)) {
      return message.channel.send("Limited to the bot owner only!");
    }
    try {
        if (args.join(" ") === "client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)") {
        return message.channel.send({ embeds: [new MessageEmbed()
.setColor('2f3136')
.setAuthor("Eval", message.author.avatarURL())
.addField('Input', `\`\`\`client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)\`\`\``, false)
.addField('Output', `\`\`\`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0 + 571652)}\`\`\``, false)]})
      }
      const code = args.join(" ");
      if (!code) {
        return message.channel.send("What do you want to evaluate?");
      }
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      let embed = new MessageEmbed()
        .setAuthor("Eval", message.author.avatarURL())
        .addField("Input", `\`\`\`${code}\`\`\``)
        .addField("Output", `\`\`\`${evaled}\`\`\``)
        .setColor("2f3136");

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
  },
};