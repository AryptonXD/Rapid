const { MessageEmbed } = require('discord.js');
const st = require('../../settings').bot;
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "vanity",
  aliases: ['vr'],
  category: 'vanityroles',
  run: async (client, message, args) => {
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`); //arypton

    const list = args[0];
    const VanityURL = args[2];
    const user = message.author;

      const vanityno = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Vanity Settings`, value: `Provide me a vanity url to set for this server.`});

      const valatest = new MessageEmbed()
      .setColor("#2f3136")
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Vanity Settings`, value: `Vanity URL from now is .gg/${VanityURL}.`});

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
    
  if (!list) {
    const embed = new MessageEmbed()
    .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#2f3136")
    .addField(`<a:go_ahead:1085116891330269234> \`vanity config\``, `Shows vanity role settings for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`vanity guide\``, `Shows up the guide for vanity role settings .`)
    .addField(`<a:go_ahead:1085116891330269234> \`vanity set role <role>\``, `Setups vanity role settings for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`vanity set vanity <vanity>\``, `Setups vanity role link settings for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`vanity set channel <channel>\``, `Setups vanity role settings for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`vanity reset\``, `Resets vanity role for the server .`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
    return message.channel.send({embeds: [embed]})
}

if (list === `set` && args[1] === `vanity`) {
  if (!VanityURL) {
        return message.channel.send({ embeds: [vanityno] });
    } else {
      await client.db6.set(`vanityurl_${message.guild.id}.Vanity`, VanityURL);
        return message.channel.send({ embeds: [valatest]})
    }
}
    
if (list === 'set' && args[1] === `role`){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[2])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('Mention Role First')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('ADMINISTRATOR Role cannot be Selected')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db6.get(`vanityrole_${message.guild.id}`) || "no"
await client.db6.set(`vanityrole_${message.guild.id}.Role`, role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`Successfully added ${role} as vanity Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}
    
if (list === `set` && args[1] === `channel`) {
  const channell = message.mentions.channels.first() ||  message.guild.channels.cache.get(args[2])
    if(!channell){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('Mention Channel First')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
const findData = await client.db6.get(`vanitych_${message.guild.id}.Channel`) || "no"
await client.db6.set(`vanitych_${message.guild.id}.Channel`, channell.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`Successfully added ${channell} as vanity Channel.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

    if(list === 'config'){
    
    let vanityrole = await client.db6.get(`vanityrole_${message.guild.id}.Role`) || "na"
    let vanityy = await client.db6.get(`vanityurl_${message.guild.id}.Vanity`)  || "na"
    let vanitychannel = client.db6.get(`vanitych_${message.guild.id}.Channel`) || "na"
      
if (vanityrole === 'na') {
    vanityrole = `\`Nothing To Show\``
} else {
    vanityrole = `<@&${vanityrole}>`
}
if (vanityy === 'na') {
    vanityy = `\`Nothing To Show\``
} else {
    vanityy =  `.gg/${vanityy}`
} 
if (vanitychannel === 'na'){
    vanitychannel = `\`Nothing To Show\``
} else {
    vanitychannel =  `<#${vanitychannel}>`
}
        
    const embed = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setThumbnail(client.user.displayAvatarURL())
        .setTitle('Vanity Role Config')
    	.addField(`<a:go_ahead:1085116891330269234> Vanity Role:`, `${vanityrole}`)
    	.addField(`<a:go_ahead:1085116891330269234> Vanity URL:`, `${vanityy}`)
    	.addField(`<a:go_ahead:1085116891330269234> Vanity Channel:`, `${vanitychannel}`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
    
       return message.channel.send({embeds: [embed]})
}

if (list === 'reset') {
    await client.db6.delete(`vanityrole_${message.guild.id}.Role`)
    await client.db6.delete(`vanityurl_${message.guild.id}.Vanity`)
    await client.db6.delete(`vanitych_${message.guild.id}.Channel`)
    const embed = new MessageEmbed()
.setColor("#2f3136")
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription("All the Setup of Vanity role has been Reseted")
message.channel.send({embeds: [embed]})
  
    }
        })
        })
  }
};