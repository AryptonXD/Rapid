const { MessageEmbed, MessageSelectMenu, MessageActionRow, MessageButton } = require('discord.js');
const st = require('../../settings').bot;
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "setup",
  aliases: ['set', 'setuprole'],
    category: 'customroles',
  run: async (client, message, args) => {
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`); //arypton
      	const list = args[0];
    	const user = message.author;
      
      const embed1 = new MessageEmbed()
    .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#2f3136")
    .addField(`<a:go_ahead:1085116891330269234> \`setup config\``, `Shows custom role settings for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup reset\``, `Reset custom role settings for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup reqrole\``, `Setups reqrole role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup owner\``, `Setups owner role for the server .`)
    .setFooter(`${client.user.username} • Page 1/4`, client.user.displayAvatarURL())
    
    const embed2 = new MessageEmbed()
    .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#2f3136")
    .addField(`<a:go_ahead:1085116891330269234> \`setup coowner\``, `Setups co owner role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup headadmin\``, `Setups head admin role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup admin\``, `Setups admin role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup girladmin\``, `Setups girl admin role for the server .`)
    .setFooter(`${client.user.username} • Page 2/4`, client.user.displayAvatarURL())
    
    const embed3 = new MessageEmbed()
    .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#2f3136")
    .addField(`<a:go_ahead:1085116891330269234> \`setup headmod\``, `Setups head mod role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup mod\``, `Setups mod role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup girlmod\``, `Setups girl mod role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup official\``, `Setups official role for the server .`)
    .setFooter(`${client.user.username} • Page 3/4`, client.user.displayAvatarURL())
    
    const embed4 = new MessageEmbed()
    .setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#2f3136")
    .addField(`<a:go_ahead:1085116891330269234> \`setup guest\``, `Setups guest role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup girl\``, `Setups girl role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup friend\``, `Setups friend role for the server .`)
    .addField(`<a:go_ahead:1085116891330269234> \`setup vip\``, `Setups vip role for the server .`)
    .setFooter(`${client.user.username} • Page 4/4`, client.user.displayAvatarURL())

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

if (!list) {
      const menuOptions = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('helpOptionId')
        .setPlaceholder('Choose the Pages here...')
        .addOptions([
          {
            label: 'Page 1',
            value: 'c1',
            description: 'Go to Page 1'
          },
          {
            label: 'Page 2',
            value: 'c2',
            description: 'Go to Page 2'
          },
          {
            label: 'Page 3',
            value: 'c3',
            description: 'Go to Page 3'
          },
          {
            label: 'Page 4',
            value: 'c4',
            description: 'Go to Page 4'
          },
        ])
    )
      	const pag = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1003992348205777036`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`)
        );
    const pag2 = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`).setDisabled(true),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1003992348205777036`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`).setDisabled(true),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`).setDisabled(true)
        );
    let msg = await message.channel.send({embeds : [embed1] , components : [pag, menuOptions]});
        let page = 0;
        let embeds = [];
    
    embeds.push(embed1);
    embeds.push(embed2);
    embeds.push(embed3);
    embeds.push(embed4);
    
    const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<a:ET_cross:1003992348205777036> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 200000,
            idle : 300000/2
        }); 

        collector.on('collect', async(interaction) => {
            if(interaction.isSelectMenu()) {
                for(const value of interaction.values) {
                    if (value === `c1`) {
                      return interaction.update({embeds : [embed1]});
                    }
                    if (value === `c2`) {
                      return interaction.update({embeds : [embed2]});
                    }
                    if (value === `c3`) {
                      return interaction.update({embeds : [embed3]});
                    }
                    if (value === `c4`) {
                      return interaction.update({embeds : [embed4]});
                    }
                }
            }
            if(interaction.isButton()) {
                if(interaction.customId === `lol4`) {
                    page = page + 1 < embeds.length ? ++page : 0;
                    return interaction.update({embeds : [embeds[page]]});
                } 
              if (interaction.customId === `lol5`) {
                    return interaction.update({embeds : [embed4]});
                }
              if(interaction.customId === `lol3`) {
                    return msg.delete()
                }
              if(interaction.customId === `lol2`) {
                    page = page > 0 ? --page : embeds.length - 1;
                    return interaction.update({embeds : [embeds[page]]});
                }
              if(interaction.customId === `lol1`) {
                    return interaction.update({embeds : [embed1]})
                }
            }
        });
        collector.on('end', async() => {
            msg.edit({ components : [pag2] })
        });
}

if(list === 'reqrole'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`reqrole_${message.guild.id}`) || "no"
await client.db3.set(`reqrole_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Required Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'owner'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`owner_${message.guild.id}`) || "no"
await client.db3.set(`owner_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Owner Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'coowner'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`coowner_${message.guild.id}`) || "no"
await client.db3.set(`coowner_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Co Owner Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'headadmin'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`hadmin_${message.guild.id}`) || "no"
await client.db3.set(`hadmin_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} Head Admin Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'admin'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`admin_${message.guild.id}`) || "no"
await client.db3.set(`admin_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Admin Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'girladmin'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`gadmin_${message.guild.id}`) || "no"
await client.db3.set(`gadmin_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Girl Admin Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'headmod'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`hmod_${message.guild.id}`) || "no"
await client.db3.set(`hmod_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Head Mod Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'mod'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`mod_${message.guild.id}`) || "no"
await client.db3.set(`mod_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Mod Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'girlmod'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`gmod_${message.guild.id}`) || "no"
await client.db3.set(`gmod_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Girl Mod Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'staff'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    const findData = await client.db3.get(`staff_${message.guild.id}`) || "no"
await client.db3.set(`staff_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Staff Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}
    
if(list === 'official'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }

await client.db3.set(`official_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Official Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'guest'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
  
await client.db3.set(`guest_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Guest Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}
    
if(list === 'girl'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }

    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }

await client.db3.set(`girl_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Girl Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'friend'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }

await client.db3.set(`friend_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as Friend Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

if(list === 'vip'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | Role is missing in your Arguement')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription('<:ET_cross:1022870496250953769> | The role you have mentioned cannot be Selected because the role have Administrator permissions .')
        .setColor('#2f3136')
        return  message.channel.send({embeds: [embed]})
    }
await client.db3.set(`vip_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription(`<:ET_Tick:1020380251529937007> | Successfully added ${role} as VIP Role.`)
.setColor('#2f3136')
message.channel.send({embeds: [embed]})
}

//

if(list === 'config'){
    
    let req = await client.db3.get(`reqrole_${message.guild.id}`) || "na"
    let owner = await client.db3.get(`owner_${message.guild.id}`)  || "na"
    let coowner = await client.db3.get(`coowner_${message.guild.id}`)  || "na"
    let headadmin = await client.db3.get(`hadmin_${message.guild.id}`)  || "na"
    let admin = await client.db3.get(`admin_${message.guild.id}`)  || "na"
    let girladmin = await client.db3.get(`gadmin_${message.guild.id}`)  || "na"
    let headmod = await client.db3.get(`hmod_${message.guild.id}`)  || "na"
    let mod = await client.db3.get(`mod_${message.guild.id}`)  || "na"
    let girlmod = await client.db3.get(`gmod_${message.guild.id}`)  || "na"
    let staff = await client.db3.get(`staff_${message.guild.id}`)  || "na"
    let official = await client.db3.get(`official_${message.guild.id}`)  || "na"
    let guest = await client.db3.get(`guest_${message.guild.id}`) || "na"
    let girl = await client.db3.get(`girl_${message.guild.id}`) || "na"
    let friend = await client.db3.get(`friend_${message.guild.id}`) || "na"
    let vip = await client.db3.get(`vip_${message.guild.id}`) || "na"

   
if (req === 'na'){
    req = `\`Nothing To Show\``
} else {
    req = `<@&${req}>`

}
if(owner === 'na'){
    owner = `\`Nothing To Show\``
} else {
    owner = `<@&${owner}>`

}
if(coowner === 'na'){
    coowner = `\`Nothing To Show\``
} else {
    coowner = `<@&${coowner}>`

}
if(headadmin === 'na'){
    headadmin = `\`Nothing To Show\``
} else {
    headadmin = `<@&${headadmin}>`

}
if(admin === 'na'){
    admin = `\`Nothing To Show\``
} else {
    admin = `<@&${admin}>`

}
if(girladmin === 'na'){
    girladmin = `\`Nothing To Show\``
} else {
    girladmin = `<@&${girladmin}>`

}
if(headmod === 'na'){
    headmod = `\`Nothing To Show\``
} else {
    headmod = `<@&${headmod}>`

}
if(mod === 'na'){
    mod = `\`Nothing To Show\``
} else {
    mod = `<@&${mod}>`

}
if(girlmod === 'na'){
    girlmod = `\`Nothing To Show\``
} else {
    girlmod = `<@&${girlmod}>`

}
if(official === 'na'){
    official = `\`Nothing To Show\``
} else {
    official = `<@&${official}>`

}
if(friend === 'na'){
    friend = `\`Nothing To Show\``
} else {
    friend = `<@&${friend}>`

}
if(guest === 'na'){
    guest = `\`Nothing To Show\``
} else {
    guest = `<@&${guest}>`

}
if(vip === 'na'){
    vip = `\`Nothing To Show\``
} else {
    vip = `<@&${vip}>`

}
if(girl === 'na'){
    girl = `\`Nothing To Show\``
} else {
    girl = `<@&${girl}>`

}
    const embed1 = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setTitle('Custom Role Settings for this Server .')
    	.setThumbnail(client.user.displayAvatarURL())
    	.addField(`<a:go_ahead:1085116891330269234> Required Role`, `${req}`)
    	.addField(`<a:go_ahead:1085116891330269234> Owner Role`, `${owner}`)
    	.addField(`<a:go_ahead:1085116891330269234> Co-Owner Role`, `${coowner}`)
    	.addField(`<a:go_ahead:1085116891330269234> Head Admin Role`, `${headadmin}`)
    	.addField(`<a:go_ahead:1085116891330269234> Admin Role`, `${admin}`)
    	.addField(`<a:go_ahead:1085116891330269234> Girl Admin Role`, `${girladmin}`)
    	.addField(`<a:go_ahead:1085116891330269234> Head Mod Role`, `${headmod}`)
    	.setFooter(`${client.user.username} • Page 1/2`, client.user.displayAvatarURL())
    
    const embed2 = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setTitle('Custom Role Settings for this Server .')
    	.setThumbnail(client.user.displayAvatarURL())
    	.addField(`<a:go_ahead:1085116891330269234> Mod Role`, `${mod}`)
    	.addField(`<a:go_ahead:1085116891330269234> Girl Mod Role`, `${girlmod}`)
    	.addField(`<a:go_ahead:1085116891330269234> Official Role`, `${official}`)
    	.addField(`<a:go_ahead:1085116891330269234> Girl Role`, `${girl}`)
    	.addField(`<a:go_ahead:1085116891330269234> Guest Role`, `${guest}`)
    	.addField(`<a:go_ahead:1085116891330269234> Friend Role`, `${friend}`)
    	.addField(`<a:go_ahead:1085116891330269234> Vip Role`, `${vip}`)
    	.setFooter(`${client.user.username} • Page 2/2`, client.user.displayAvatarURL())
    
    const menuOptions = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('helpOptionId')
        .setPlaceholder('Choose Pages here...')
        .addOptions([
          {
            label: 'Page 1',
            value: 'cc1',
            description: 'Go to Page 1'
          },
          {
            label: 'Page 2',
            value: 'cc2',
            description: 'Go to Page 2'
          },
        ])
    )
    
    const pag = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1003992348205777036`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`).setDisabled(true)
        );
    const pag2 = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`).setDisabled(true),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1003992348205777036`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`).setDisabled(true),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`).setDisabled(true)
        );
    
    let msg = await message.channel.send({embeds : [embed1] , components : [pag, menuOptions]});
    
    const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<a:ET_cross:1003992348205777036> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 200000,
            idle : 300000/2
        }); 

        collector.on('collect', async(interaction) => {
            if(interaction.isSelectMenu()) {
                for(const value of interaction.values) {
                    if (value === `cc1`) {
                      return interaction.update({embeds : [embed1]});
                    }
                    if (value === `cc2`) {
                      return interaction.update({embeds : [embed2]});
                    }
                }
            }
            if(interaction.isButton()) {
                if(interaction.customId === `lol4`) {
                    return interaction.update({embeds : [embed2]});
                }
              if(interaction.customId === `lol3`) {
                    return msg.delete()
                }
              if(interaction.customId === `lol2`) {
                    return interaction.update({embeds : [embed1]});
                }
            }
        });
        collector.on('end', async() => {
            msg.edit({ components : [pag2] })
        });
}

if(list === 'reset'){
    await client.db3.delete(`reqrole_${message.guild.id}`)
    await client.db3.delete(`owner_${message.guild.id}`)
    await client.db3.delete(`coowner_${message.guild.id}`)
    await client.db3.delete(`hadmin_${message.guild.id}`)
    await client.db3.delete(`admin_${message.guild.id}`)
    await client.db3.delete(`gadmin_${message.guild.id}`)
    await client.db3.delete(`hmod_${message.guild.id}`)
    await client.db3.delete(`mod_${message.guild.id}`)
    await client.db3.delete(`gmod_${message.guild.id}`)
    await client.db3.delete(`staff_${message.guild.id}`)
    await client.db3.delete(`official_${message.guild.id}`)
    await client.db3.delete(`official_${message.guild.id}`)  
    await client.db3.delete(`friend_${message.guild.id}`) 
    await client.db3.delete(`guest_${message.guild.id}`) 
    await client.db3.delete(`girl_${message.guild.id}`)
    await client.db3.delete(`vip_${message.guild.id}`) 

    const embed = new MessageEmbed()
.setColor("#2f3136")
.setAuthor(client.user.tag, client.user.displayAvatarURL())
.setDescription("<:ET_Tick:1020380251529937007> | Successfully Reseted Custom Roles Database for this Server .")
message.channel.send({embeds: [embed]})
				}
        	})
		})
	}
}