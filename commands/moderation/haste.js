const discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const moment = require("moment");
const sourcebin = require("sourcebin_js");
module.exports = {
  name: "haste",
  usage: `haste <code/text>`,
  args: true,
  aliases: ["haste"],
  run: async (client, message, args) => {
    message.delete();
    const Content = args.join(" ");
    sourcebin
      .create([
        {
          title: "JavaScript code",
          description: 'This code was created in "' + message.createdAt + '"',
          name: "Made By " + message.author.username,
          content: Content,
          languageId: "JavaScript"
        }
      ])
      .then(src => {
        let embed = new discord.MessageEmbed()
          .setTitle(`Hastebin`)
          .setColor("2f3136")
          .setDescription(`Code:\n${Content}\n\n**[Click Here](${src.url})**`);
        message.channel.send({embeds: [embed]});
      })
      .catch(e => {
        message.channel.send(`Error, try again later`);
      });
  }
};