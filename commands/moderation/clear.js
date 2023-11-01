const { Client, Message, MessageEmbed } = require('discord.js');
const Settings = require('../../settings.js');

module.exports = {
    name: 'clear',
    aliases: ['c'],
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

    const list = args[0];
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = Settings.bot.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`); //arypton

      const guide = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription(`<a:arrows:1050760970122821642> \`clear bots\`
Delete the bots messages in the channel .

<a:arrows:1050760970122821642> \`clear humans\`
Delete the humans messages in the channel .

<a:arrows:1050760970122821642> \`clear embeds\`
Delete the embeds messages in the channel .

<a:arrows:1050760970122821642> \`clear files\`
Delete the files messages in the channel .

<a:arrows:1050760970122821642> \`clear mentions\`
Delete the mentions messages in the channel .

<a:arrows:1050760970122821642> \`clear pins\`
Delete the pins messages in the channel .`)

    if (!list) {
      return message.channel.send({ embeds: [guide] })
    } else if (list === 'bots') {
      msg = await message.channel.messages.fetch({ limit: 30 })
      data = []
      msg.map(m => m).forEach(ms => {
        if (ms.author.bot && !ms.pinned) data.push(ms)
        })
          await message.delete()
          await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
            const botsdel = new MessageEmbed()
              .setColor('2f3136')
              .setAuthor(client.user.tag, client.user.displayAvatarURL())
              .setDescription(`<:ET_Tick:1020380251529937007> Cleared`)
          return message.channel.send({ embeds: [botsdel]}).then(msg => msg.delete({ timeout: 5000 }));
      })
    } else if (list === 'humans') {
      msg = await message.channel.messages.fetch({ limit: 30 })
      data = []
      msg.map(m => m).forEach(ms => {
        if (!ms.author.bot && !ms.pinned) data.push(ms)
        })
          await message.delete()
          await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
            const humanembed = new MessageEmbed()
              .setColor('2f3136')
              .setAuthor(client.user.tag, client.user.displayAvatarURL())
              .setDescription(`<:ET_Tick:1020380251529937007> Cleared`)
            return message.channel.send({ embeds: [humanembed] }).then(msg => msg.delete({ timeout: 5000 }));
      })
    } else if (list === 'embeds') {
      msg = await message.channel.messages.fetch({ limit: 30 })
      data = []
      msg.map(m => m).forEach(ms => {
        if (ms.embeds.length && !ms.pinned) data.push(ms)
        })
          await message.delete()
          await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
        const embed1 = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.tag, client.user.displayAvatarURL())
          .setDescription(`<:ET_Tick:1020380251529937007> Cleared`)
          return message.channel.send({ embeds: [embed1] }).then(msg => msg.delete({ timeout: 5000 }));
      })
    } else if (list === 'files') {
      msg = await message.channel.messages.fetch({ limit: 30 })
      data = []
      msg.map(m => m).forEach(ms => {
        if (ms.attachments.first() && !ms.pinned) data.push(ms)
        })
          await message.delete()
          await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
        const embed2 = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.tag, client.user.displayAvatarURL())
          .setDescription(`<:ET_Tick:1020380251529937007> Cleared`)
          return message.channel.send({ embeds: [embed2] }).then(msg => msg.delete({ timeout: 5000 }));
        })
    } else if (list === 'mentions') {
      msg = await message.channel.messages.fetch({ limit: 30 })
      data = []
      msg.map(m => m).forEach(ms => {
        if ((ms.mentions.users.first() || ms.mentions.members.first() || ms.mentions.channels.first() || ms.mentions.roles.first()) && !ms.pinned) data.push(ms)
      })
        await message.delete()
        await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
        const embed3 = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.tag, client.user.displayAvatarURL())
          .setDescription(`<:ET_Tick:1020380251529937007> Cleared **${m.size}**/**${amount}** messages!`)
        return message.channel.send({ embeds: [embed3]}).then(msg => msg.delete({ timeout: 5000 }));
      })
    } else if (list === 'pins') {
      msg = await message.channel.messages.fetch({ limit: 30 })
      data = []
      msg.map(m => m).forEach(ms => {
        if (ms.pinned) data.push(ms)
        })
          await message.delete()
          await message.channel.bulkDelete(data.length ? data : 1, true).then(async (m) => {
        const embed4 = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.tag, client.user.displayAvatarURL())
          .setDescription(`<:ET_Tick:1020380251529937007> Cleared **${m.size}**/**${amount}** messages!`)
        return message.channel.send({ embeds: [embed4]}).then(msg => msg.delete({ timeout: 5000 }));
      })
    }
        })
        })
        })
  }
}