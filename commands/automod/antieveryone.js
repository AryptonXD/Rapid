const st = require('../../settings.js').bot;
const { MessageEmbed } = require('discord.js');
const { ownerIDS } = require('../../config.json');

module.exports = {
  name: 'antieveryone',
  category: 'automod',
  run: async (client, message, args) => {
    const option = args[0];
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
  const antieveryone = await client.db1.get(`${message.guild.id}_antieveryone`)

    const adfbnmo = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`${prefix}antieveryone enable
${prefix}antieveryone disable`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const eeeee = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Antieveryone Settings`, value: `Ohh uh! looks like your server has already enabled Antieveryone.
      Current Status : <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`})
      .setFooter(`To disable it use ${prefix}antieveryone disable`);

    const eeee = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Antieveryone Settings`, value: `Successfully enabled Antieveryone settings.
      Current Status : <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`})
      .setFooter(`To disable it use ${prefix}antieveryone disable`);

    const ddddd = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Antieveryone Settings`, value: `Ohh uh! looks like your server has already disabled Antieveryone.
      Current Status : <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`})
      .setFooter(`To enable it use ${prefix}antieveryone enable`);

    const dddd = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Antieveryone Settings`, value: `Successfully disabled Antieveryone settings.
      Current Status : <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`})
      .setFooter(`To enable it use ${prefix}antieveryone enable`);

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

    if (!option) {
      return message.channel.send({ embeds: [adfbnmo]})
    } else if (option === "enable") {
        if (antieveryone) {
          return message.channel.send({ embeds: [eeeee]})
      } else {
      await client.db1.set(`${message.guild.id}_antieveryone`, true)
      return message.channel.send({ embeds: [eeee]})
      }
    } else if (option === 'disable') {
        if (!antieveryone) {
          return message.channel.send({ embeds: [ddddd]})
      } else {
      await client.db1.delete(`${message.guild.id}_antieveryone`, true)
      return message.channel.send({ embeds: [dddd]})
      		}
    	}
      })
    })
  }
}