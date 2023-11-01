const Discord = require('discord.js');
const Settings = require('../../settings.js');
const { ownerIDS } = require('../../config.json');

module.exports = {
  name: 'ticket',
  category: 'Support',
  run: async (client, message, args) => {
    const option = args[0];
    const option2 = args[1];
    const member = message.author;
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = Settings.bot.info.prefix;
    const Admin = message.mentions.roles.first() || message.guild.roles.cache.get(args[2]);
    const cat = message.guild.channels.cache.get(args[2]);
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]) || message.channel;
    const sfats = await client.db5.get(`Staff_${message.guild.id}.Admin`) 
    const sfas = await client.db5.get(`Channels_${message.guild.id}.Cat`)

    const error = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setDescription(`Please mention an Ticket Staff role (or Id) with this command!`)
        .setColor('2f3136')
    client.db5
      const error2 = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor('2f3136')
        .setDescription(`Please mention a categoryid with this command! `)
    
  const sfatsembed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription(`This server needs to set up their staff roles first! \`${prefix}setstaff\``)
    .setColor('2f3136')

  const channelsetup = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription(`This server needs to set up their ticket channels first! \`${prefix}setchannels\``)
    .setColor('2f3136')

    const colldown1 = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`Your order is executed after 5 seconds, and it will be deleted`)
      .setColor('2f3136')

    let specialbtn = new Discord.MessageButton()
    .setStyle(`SECONDARY`)
    .setLabel('Create Ticket')
    .setEmoji('1054375682194542592')
    .setCustomId("ss")

    let trow = new Discord.MessageActionRow().addComponents(specialbtn)

    const owenr = message.guild.ownerId;

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

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id)  && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
    
    if (!args[0]) {
    const embed = new MessageEmbed()
    .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.avatarURL({dynamic: true})})
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`<a:arrows:1050760970122821642> \`ticket delete\`
Detele the ticket channel of the server .

<a:arrows:1050760970122821642> \`ticket set staff\`
Setups ticket staff role settings for the server .

<a:arrows:1050760970122821642> \`ticket set category\`
Setups ticket category settings for the server .

<a:arrows:1050760970122821642> \`ticket send panel\`
Setups vanity role settings for the server .`)
    .setColor("#2f3136")
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
      return message.channel.send({ embeds: [embed]});
    } else if (option === `set` && option2 === `staff`) {
      if (!Admin) {
        return message.channel.send({ embeds: [error] })
      } else {
      await client.db5.set(`Staff_${message.guild.id}.Admin`, Admin.id)
      message.react("1020380251529937007")
      }
    } else if (option === `set` && option2 === `category`) {
      if (!cat) {
        return message.channel.send({ embeds: [error2] })
      }
      if (cat.type !== "GUILD_CATEGORY") {
        return message.channel.send({ content: "The input should be a category"});
      } else {
        await client.db5.set(`Channels_${message.guild.id}.Cat`, cat.id)
        message.react("1020380251529937007")
      }
    } else if (option === `send` && option2 === `panel`) {
      if (!sfats || sfats === null) {
      return message.channel.send({ embeds: [sfatsembed] })
      }
      if (!sfas || sfas === null) {
      return message.channel.send({ embeds: [channelsetup] })
      }
      message.delete()
    let embedss = new Discord.MessageEmbed()
      .setTitle('Support Ticket')
      .setDescription(`To create a ticket click the <:D_Ticket:1054375682194542592> button.`)
      .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setColor('2f3136')
      .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
    let msg = await message.channel.send({ 
      embeds: [embedss], 
      components: [trow] 
      })
      msg.pin()
    } else if (option === `delete`) {
    if (!sfats) {
      return message.channel.send({ embed: [sfatsembed] })
    }
    if (await client.db5.get(`ticket_${channel.id}_${message.guild.id}`)) {
      message.channel.send({ embeds: [colldown1] })
      await client.db5.delete(`ticket_${message.channel.id}_${message.guild.id}`, true);
      setTimeout(async () => {
          channel.delete()
        }, 5000)
      }
    }
        })
        })
  }
}