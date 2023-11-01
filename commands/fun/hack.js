const { Client, Message, MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
  name: "hack",
  aliases: ["fakehack"],
  description: "fake hack someone",
  useage: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    var ips = [
      "10.313.523.502.00.1",
      "25.537.753.462.29.2",
      "21.175.866.974.07.08",
      "32.653.587.825.35.5",
      "12.172.764.781.22.8",
      "91.723.242.452.09.3",
      "92.743.116.896.85.6",
      "84.091.000.853.54.7",
      "51.071.124.129.12.0",
    ];
    var ipadress = ips[Math.floor(Math.random() * ips.length)];

    const aaaa = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription("**Who do you want to hack?\nTag Please**")
          .setFooter("Made by Arypton_xD with 💞");

    if (!args[0])
      return message.channel.send({embeds: [aaaa]});
    
    const Hacking = args.slice(0).join(" ") && args.shift().toLowerCase();

    const bbbb = new MessageEmbed()
        .setColor("2f3136")
        .setAuthor(message.author.tag)
        .setDescription(`**Hacking ${Hacking}**`)
        .setFooter("Made by Arypton_xD with 💞");

    const cccc = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▖] Finding discord gmail ${Hacking}... `)
          .setFooter("Made by Arypton_xD with 💞");

    const dddd = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▘] Gmail: ${Hacking}@gmail.com`)
          .setFooter("Made by Arypton_xD with 💞");

    const eeee = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▝] Getting user password`)
          .setFooter("Made by Arypton_xD with 💞");

    const ffff = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▗] Password:`)
          .setFooter("Made by Arypton_xD with 💞");

    const gggg = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▖]Getting account access...`)
          .setFooter("Made by Arypton_xD with 💞");

    const hhhh = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▘] Collecting data...  `)
          .setFooter("Made by Arypton_xD with 💞");

    const iiii = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(
            `[▝] Hacking all accounts linked to ${Hacking}@gmail.com....`
          )
          .setFooter("Made by Arypton_xD with 💞");

    const jjjj = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▗] Fiding ip adress...`)
          .setFooter("Made by Arypton_xD with 💞");

    const kkkk = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▖] Ip: ${ipadress}`)
          .setFooter("Made by Arypton_xD with 💞");

    const llll = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▘] Information collected...`)
          .setFooter("Made by Arypton_xD with 💞");

    const mmmm = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▝] Downloading virus  `)
          .setFooter("Made by Arypton_xD with 💞");

    const nnnn = new MessageEmbed()
          .setColor("2f3136")
          .setAuthor(message.author.tag)
          .setDescription(`[▗]Destroying friends list`)
          .setFooter("Made by Arypton_xD with 💞");

    const oooo = new MessageEmbed()
        .setColor("2f3136")
        .setAuthor(message.author.tag)
        .setDescription(`[▖] Getting results...`)
        .setFooter("Made by Arypton_xD with 💞");

    const pppp = new MessageEmbed()
        .setColor("2f3136")
        .setAuthor(message.author.tag)
        .setDescription(
          `User ${Hacking} is Hacked By ${message.author.tag} Hehe`
        )
        .setFooter("Made by Arypton_xD with 💞");

    let msg = await message.channel.send({embeds: [bbbb]});
    let time = 3000;
    setTimeout(function () {
      msg.edit({embeds: [cccc]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [dddd]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [eeee]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [ffff]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [gggg]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [hhhh]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [iiii]});
    }, time);
    time +=.3000;
    setTimeout(function () {
      msg.edit({embeds: [jjjj]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [kkkk]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [llll]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [mmmm]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [nnnn]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [oooo]});
    }, time);
    time += 3000;
    setTimeout(function () {
      msg.edit({embeds: [pppp]});
    }, time);
    time += 3 * 1000;
  },
};
