const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: 'prefix',
  aliases: ['customprefix'],
  run: async (client, message, args) => {
      arypton = await client.users.fetch(`560115112078475266`); //arypton

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner or Extra Admin to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        await client.db11.get(`${message.guild.id}_ea`).then(async (dataaa) => {
        const exowner = dataa.extraownerlist;
        const exadmin = dataaa.extraadminlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }

      const newPrefix = args[0];

      const prefix = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Server Settings`, value: `Provide me a prefix to set for this server.`});

      const nonlatest = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Server Settings`, value: `Please choose a smaller prefix. (Length can be max 2 characters).`});

      const latest = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Server Settings`, value: `<:GreenCheck:1020928059228049429> The new prefix is now set to **${newPrefix}** Ping me if you ever forget it.`})
      .setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);

      if (!newPrefix) {
        return message.channel.send({ embeds: [prefix] });
      }
      if (newPrefix.length >= 3) {
          return message.channel.send({ embeds: [nonlatest] })
      } else {
          await client.db8.set(`${message.guild.id}_prefix`, newPrefix);
          return message.channel.send({ embeds: [latest]})
        	}
        })
        })
        }
  }