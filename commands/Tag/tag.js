const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'set',
  run: async (client, message, args) => {
    const option = args[0];
    const text = args.slice(1).join(' ');
    const user = message.author;

    const success = new MessageEmbed()
    .setColor('2f3136')
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(` | ${text} will now consider as a tag for this server .`)
    .setFooter(client.user.username, client.user.displayAvatarURL())

    const success2 = new MessageEmbed()
    .setColor('2f3136')
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(` | ${text} will now consider as a stag for this server .`)
    .setFooter(client.user.username, client.user.displayAvatarURL())
    
    const guide = new MessageEmbed()
    .setColor('2f3136')
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`<a:go_ahead:1085116891330269234> \`set guide\``, `Show the guide for the module .`)
    .addField(`<a:go_ahead:1085116891330269234> \`set tag\``, `Add a tag for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`set stag\``, `Add a stag for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`set config\``, `Show the settings of tag and stag .`)
    .addField(`<a:go_ahead:1085116891330269234> \`set reset\``, `Reset the database of tag and stag .`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

  if (!option) {
    return message.channel.send({ embeds: [guide] });
  } else if (option === 'tag') {
    if (!text) {
      return message.channel.send({ content: 'Provide a Tag for the server .' });
    } else {
      await client.db12.set(`tag_${message.guild.id}.Tag`, text);
      return message.channel.send({ embeds: [success] });
      }
    } else if (option === 'stag') {
    if (!text) {
      return message.channel.send({ content: 'Provide a Stag for the server .' });
    } else {
      await client.db12.set(`stag_${message.guild.id}.Stag`, text);
      return message.channel.send({ embeds: [success2] });
      }
    } else if (option === 'config') {

    const tag = await client.db12.get(`tag_${message.guild.id}.Tag`) || 'Nothing to show';
    const stag = await client.db12.get(`stag_${message.guild.id}.Stag`) || 'Nothing to show';
      const embed = new MessageEmbed()
    .setColor('2f3136')
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`<a:go_ahead:1085116891330269234> Tag`, `${tag}`)
    .addField(`<a:go_ahead:1085116891330269234> Stag`, `${stag}`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    return message.channel.send({ embeds: [embed] });
    } else if (option === 'reset') {
      await client.db12.delete(`tag_${message.guild.id}.Tag`),
      await client.db12.delete(`stag_${message.guild.id}.Stag`);
      return message.channel.send({ content: 'Successfully Rested the Tag and Stag Database .' });
      }
    }
  }