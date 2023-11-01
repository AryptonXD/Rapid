const client = require('../index');
const st = require('../settings');
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { bot } = require('../settings');

client.on('messageCreate', async (message) => {
  let prefix;
  const dbPrefix = await client.db8.get(`${message.guild.id}_prefix`);
  arypton = await client.users.fetch(`560115112078475266`); //arypton

  if (dbPrefix) prefix = dbPrefix
  else prefix = bot.info.prefix;

  let allgodprefix = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`Hey, I'm Rapid

Please use the following command instead: ${prefix}help

If you continue to have problems, consider asking for help [discord.gg/Rapid](https://discord.gg/hammerhq)`)
      .setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);

  
  const MEMBER = message.author;
  const ID = MEMBER.id;
  if (message.content === `<@${client.user.id}>`) {
    return message.channel.send({ embeds: [allgodprefix] })
  }
});