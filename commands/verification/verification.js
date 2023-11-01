const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const st = require('../../settings.js').bot;
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: 'verification',
  aliases: ['verify'],
  run: async (client, message, args) => {
    const verifyenable = client.db10.get(`verification_${message.guild.id}`);
    const verifychannel = client.db10.get(`verificationchannel_${message.guild.id}.Channel`)
    const verifyrole = client.db10.get(`verificationrole_${message.guild.id}.Role`)
    const channel = message.guild.channels.cache.get(args[2]) || message.mentions.channels.first()
    const role = message.guild.roles.cache.get(args[2]) || message.mentions.roles.first()
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`); //arypton
    const option = args[0];
    const option1 = args[1];    
    const settingsss = [];

    if (verifyenable) {
      settingsss.push(`**Verification Settings** <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`)
    }

    if (!verifyenable) {
      settingsss.push(`**Verification Settings** <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`)
    }
    
    const guide = new MessageEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL())
    .setDescription(`<a:arrows:1050760970122821642> \`${prefix}verification config\`
Shows verification settings for the server .

<a:arrows:1050760970122821642> \`${prefix}verification enable\`
Enables verification settings for the server .

<a:arrows:1050760970122821642> \`${prefix}verification disable\`
Disables verification settings for the server .

<a:arrows:1050760970122821642> \`${prefix}verification set role <role>\`
Setups verification role settings for the server .

<a:arrows:1050760970122821642> \`${prefix}verification set channel <channel>\`
Setups verification role link settings for the server .

<a:arrows:1050760970122821642> \`${prefix}verification send panel\`
Setups verification role settings for the server .

<a:arrows:1050760970122821642> \`${prefix}verification reset\`
Resets verification role for the server .`)
    .setColor("#2f3136")
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const eeeee = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Verification Settings`, value: `Ohh uh! looks like your server has already enabled Verification.
      Current Status : <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`})
      .setFooter(`To disable it use ${prefix}verification disable`);

    const eeee = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Verification Settings`, value: `Successfully enabled Verification settings.
      Current Status : <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`})
      .setFooter(`To disable it use ${prefix}verification disable`);

    const ddddd = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Verification Settings`, value: `Ohh uh! looks like your server has already disabled Verification.
      Current Status : <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`})
      .setFooter(`To enable it use ${prefix}verification enable`);

    const dddd = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Verification Settings`, value: `Successfully disabled Verification settings.
      Current Status : <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`})
      .setFooter(`To enable it use ${prefix}verification enable`);

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

      if (!option) {
          return message.channel.send({ embeds: [guide] });
      } else if (option === 'enable') {
      if (verifyenable) {
        return message.channel.send({ embeds: [eeeee]});
      } else {
        await client.db10.set(`verification_${message.guild.id}`, true),
        await client.db10.set(`verificationguild_${interaction.guild.id}.Guild`, message.guild.id);
        return message.channel.send({ embeds: [eeee]});
      }
    } else if (option === 'disable') {
      if (!verifyenable) {
        return message.channel.send({ embeds: [ddddd]});
      } else {
        await client.db10.delete(`verification_${message.guild.id}`, true),
        await client.db10.delete(`verificationguild_${interaction.guild.id}.Guild`, message.guild.id);
        return message.channel.send({ embeds: [dddd]});
      }
    } else if (option === 'set' && option1 === 'role') {
      if (!role) {
        return message.channel.send('First mention a role to continue .')
      } else {
        await client.db10.set(`verificationrole_${message.guild.id}.Role`, role.id);
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription(`Successfully added ${role} as verification role .`)
        .setColor('#2f3136')
        return message.channel.send({ embeds: [embed]});
      }
    } else if (option === 'set' && option1 === 'channel') {
      if (!channel) {
        return message.channel.send('First mention a channel to continue .')
      } else {
        await client.db10.set(`verificationchannel_${message.guild.id}.Channel`, channel.id);
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription(`Successfully added ${channel} as verification channel .`)
        .setColor('#2f3136')
        return message.channel.send({ embeds: [embed]});
      }
    } else if (option ==='send' && option1 ==='panel') {
        const channell = message.guild.channels.cache.get(verifychannel)
      const pag = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`SECONDARY`).setEmoji('1020380251529937007').setCustomId(`verify`).setLabel(`Verify`)
        );
      const verifyembed = new MessageEmbed()
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`Please Verify yourself to get access of the Server\n Thanks for Joining the Server!`)
      .setColor(`#2f3136`)

      if (!verifyenable) {
        return message.channel.send("Enable Verification Settings First")
      }
      if (!verifychannel) {
        return message.channel.send("Setups Verification Channel First")
      }
      if (!verifyrole) {
        return message.channel.send("Setups Verification Role First")
      } else {
          return message.channel.send({ embeds: [verifyembed], components: [pag] });
      }
    } else if (option === 'config') {

    let vverifychannel = client.db10.get(`verificationchannel_${message.guild.id}.Channel`) || "na"
    const vchan = message.guild.channels.cache.get(`${vverifychannel}`)
    let vverifyrole = client.db10.get(`verificationrole_${message.guild.id}.Role`) || "na"
    const vrol = message.guild.roles.cache.get(`${vverifyrole}`)
    
if (vverifyrole === 'na') {
    vverifyrole = `\`Nothing To Show\``
} else {
    vverifyrole = `<@&${vverifyrole}>`
}

if (vverifychannel === 'na') {
    vverifychannel = `\`Nothing To Show\``
} else {
    vverifychannel = `<#${vverifychannel}>`
}
      
    const embed = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setTitle('Verification Settings')
        .setDescription(`Verification Status:
${settingsss.join()}
        
Verification Role:
<@&${vverifyrole}>

Verification Channel:
<#${vverifychannel}>`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
      
       return message.channel.send({embeds: [embed]})
    } else if (option === 'reset') {
      await client.db10.delete(`verification_${message.guild.id}`),
      await client.db10.delete(`verificationchannel_${message.guild.id}.Channel`),
      await client.db10.delete(`verificationrole_${message.guild.id}.Role`);
      return message.channel.send('Successfullt reseted the database for Verification Settings .');
    }
        })
        })
  }
}