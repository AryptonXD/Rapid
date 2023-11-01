const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const st = require('../../settings.js').bot;
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: 'vc',
  aliases: ["voice"],
  run: async (client, message, args) => {
    
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    const option = args[0];
    const channels = message.guild.channels.cache.get(args[0]) || message.member.voice.channel || message.channel;
    const channel = message.guild.channels.cache.get(args[0]) || message.member.voice.channel;
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    arypton = await client.users.fetch(`560115112078475266`); //arypton

const mentionchannel = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`Mention Channel First`);

const mentionsomeone = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`Mention Somefirst First`);
    
const muteall = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `\`${channels.name}\` <a:ET_tick:1004003482312900608> All members on your channel have been muted`);
    
const unmuteall = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `\`${channels.name}\` <a:ET_tick:1004003482312900608> All members on your channel have been unmuted`);
    
const deafall = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `\`${channels.name}\` <a:ET_tick:1004003482312900608> All members on your channel have been defened`);
    
const undeafall = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `\`${channels.name}\` <a:ET_tick:1004003482312900608> All members on your channel have been undeafened`);
    
const mutee = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `<a:ET_tick:1004003482312900608> | Member Muted`);
    
const unmutee = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `<a:ET_tick:1004003482312900608> | Member Unmuted`);
    
const deaff = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `<a:ET_tick:1004003482312900608> | Member Undeafened`);
    
const undeaff = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription( `<a:ET_tick:1004003482312900608> | Member Undeafened`);

const guide = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_teer:1002104482152329307> \`voice muteall\`\nmute all member in a voice channel\n\n<a:ET_teer:1002104482152329307> \`voice unmuteall\`\nunmute all member in a voice channel\n\n<a:ET_teer:1002104482152329307> \`voice deafenall\`\ndeafen all member in a voice channel\n\n<a:ET_teer:1002104482152329307> \`voice undeafenall\`\nundeafen all member in a voice channel\n\n<a:ET_teer:1002104482152329307> \`voice mute <user>\`\nmute a member in voice channel\n\n<a:ET_teer:1002104482152329307> \`voice unmute <user>\`\nunmute a member in voice channel\n\n<a:ET_teer:1002104482152329307> \`voice deafen <user>\`\ndeafen a member in a voice channel\n\n<a:ET_teer:1002104482152329307> \`voice undeafen <user>\`\nundeafen a member in a voice channel`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
    
    const raja = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You Do not have Permissions to this.`)
      .setFooter("Add me to your server to use me ;)");
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Vote Me")
        .setStyle("LINK")
        .setURL(`https://top.gg/bot/1002306671261003948?s=0ae05abf3185d`),
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=1002306671261003948&permissions=8&scope=bot%20applications.commands`)
    )

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
           
      if (!option) {
          return message.channel.send({ embeds: [guide], components: [button] });
      } else if (option === 'muteall') {
        if (!channel) {
          return message.channel.send({ embeds: [mentionchannel]})
        } else {
          channel.members
          .forEach((x, index) => {
          x.voice.setMute(true);
      });
    return message.channel.send({ embeds: [muteall]});
        }
      } else if (option === 'unmuteall') {
        if (!channel) {
          return message.channel.send({ embeds: [mentionchannel]})
        } else {
          channel.members
          .forEach((x, index) => {
          x.voice.setMute(false);
      });
    return message.channel.send({ embeds: [unmuteall]});
        }
      } else if (option === 'deafenall') {
        if (!channel) {
          return message.channel.send({ embeds: [mentionchannel]})
        } else {
          channel.members
          .forEach((x, index) => {
          x.voice.setDeaf(true);
      });
    return message.channel.send({ embeds: [deafall]});
        }
      } else if (option === 'undeafenall') {
        if (!channel) {
          return message.channel.send({ embeds: [mentionchannel]})
        } else {
          channel.members
          .forEach((x, index) => {
          x.voice.setDeaf(false);
      });
    return message.channel.send({ embeds: [undeafall]});
        }
      } else if (option === 'mute') {
        if (!member) {
          return message.channel.send({ embeds: [mentionsomeone]})
        } else {
          member.voice.setMute(true);
          message.channel.send({ embeds: [mutee]});
        }
      } else if (option === 'unmute') {
        if (!member) {
          return message.channel.send({ embeds: [mentionsomeone]})
        } else {
          member.voice.setMute(false);
          message.channel.send({ embeds: [unmutee]});
        }
      } else if (option === 'deafen') {
        if (!member) {
          return message.channel.send({ embeds: [mentionsomeone]})
        } else {
          member.voice.setDeaf(true);
          message.channel.send({ embeds: [deaff]});
        }
      } else if (option === 'undeafen') {
        if (!member) {
          return message.channel.send({ embeds: [mentionsomeone]})
        } else {
          member.voice.setDeaf(false);
          message.channel.send({ embeds: [undeaff]});
        }
      }
        })
        })
        })
  }
}