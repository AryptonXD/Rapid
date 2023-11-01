const { MessageEmbed } = require('discord.js');
const st = require('../../settings').bot;
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: 'invc',
  run: async (client, message, args) => {
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
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

    const list = args[0];
    const user = message.author;
  const invcsettings = await client.db7.get(`${message.guild.id}_invcsettings`)
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[2]);
    const settingsss = [];

    if (invcsettings) {
      settingsss.push(`**In VC Role** <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`)
    }

    if (!invcsettings) {
      settingsss.push(`**In VC Role** <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`)
    }

    const adfbnmo = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`${prefix}invc enable
${prefix}invc disable`);

    const noperm = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`- You must have Administrator permission.
- Your top role should be above my top role.`)

    const eeeee = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Invc Settings`, value: `Ohh uh! looks like your server has already enabled Invc.
      Current Status : <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`})
      .setFooter(`To disable it use ${prefix}invc disable`);

    const eeee = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Invc Settings`, value: `Successfully enabled Invc settings.
      Current Status : <:ET_disabler:1020379834498682921><:ET_enabled:1020380165412499559>`})
      .setFooter(`To disable it use ${prefix}invc disable`);

    const ddddd = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Invc Settings`, value: `Ohh uh! looks like your server has already disabled Invc.
      Current Status : <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`})
      .setFooter(`To enable it use ${prefix}invc enable`);

    const dddd = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .addFields({ name: `Invc Settings`, value: `Successfully disabled Invc settings.
      Current Status : <:ET_disabled:1020380187612950559><:ET_enabler:1020379564410687569>`})
      .setFooter(`To enable it use ${prefix}invc enable`);
    
    const raja = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`Only Server Owner can perform this command.`)
      .setFooter("Add me to your server to use me ;)")

    if (!list) {
    const embed = new MessageEmbed()
    .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.avatarURL({dynamic: true})})
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`<a:arrows:1050760970122821642> \`invc config\`
Shows invc role settings for the server .

<a:arrows:1050760970122821642> \`invc set role <role>\`
Setups invc role settings for the server .

<a:arrows:1050760970122821642> \`invc enable\`
Enable invc role settings for the server .

<a:arrows:1050760970122821642> \`invc disable\`
Disable invc role settings for the server .

<a:arrows:1050760970122821642> \`invc reset\`
Resets invc role settings for the server .`)
    .setColor("#2f3136")
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
    return message.channel.send({embeds: [embed]})
      
    } else if (list === "enable") {
        if (invcsettings) {
          return message.channel.send({ embeds: [eeeee]})
      } else {
      await client.db7.set(`${message.guild.id}_invcsettings`, true)
      return message.channel.send({ embeds: [eeee]})
      }
    } else if (list === 'disable') {
        if (!invcsettings) {
          return message.channel.send({ embeds: [ddddd]})
      } else {
      await client.db7.delete(`${message.guild.id}_invcsettings`, true)
      return message.channel.send({ embeds: [dddd]})
      }
    } else if (list === `set` && args[1] === `role`) {
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
        return  message.channel.send({ embeds: [embed] })
    }
      await client.db7.set(`invcrole_${message.guild.id}.Role`, role.id),
      await client.db7.set(`invcroleguild_${message.guild.id}.Guild`, message.guild.id)
    const embed  = new MessageEmbed()
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`Successfully added ${role} as invc Role.`)
      .setColor('#2f3136')
    return message.channel.send({ embeds: [embed] })
      
    } else if (list === `config`) {
    
    let invcrole = await client.db7.get(`invcrole_${message.guild.id}.Role`) || "na"
      
if(invcrole === 'na'){
    invcrole = `\`Nothing To Show\``
} else {
    invcrole = `<@&${invcrole}>`

}
    const embed = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setTitle('Invc Role Config')
        .setDescription(`Invc Role Status:
${settingsss.join()}
        
Invc Role:
${invcrole}`)
    
       return message.channel.send({embeds: [embed]})
    }
        })
        })
  }
}