const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const st = require('../../settings').bot;
const { ownerIDS } = require('../../owner.json');

module.exports = {
    name : "rgirladmin",
    category: 'customroles',
    run: async (client, message, args) => {
        let prefix = await client.db8.get(`prefix_${message.guild.id}`);
        if(!prefix) prefix = st.info.prefix;
        let reqRole = await client.db3.get(`reqrole_${message.guild.id}`);
        if(!reqRole || reqRole == null){
            return message.channel.send({embeds : [new MessageEmbed().setColor("#2f3136").setDescription(`<:ET_cross:1022870496250953769> | Required Role is missing before continuing Please Setup **Required Role**`).setFooter(`${prefix}setup reqrole <role mention/id>`)]});
        }

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`<:ET_cross:1022870496250953769> | You need to be either Server Owner or to be in Extra Owner or Extra Admin or must have Required Role to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        await client.db11.get(`${message.guild.id}_ea`).then(async (dataaa) => {
        const exowner = dataa.extraownerlist;
        const exadmin = dataaa.extraadminlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id) && !message.member.roles.cache.has(reqRole)) {
          return message.channel.send({ embeds: [rajaa] });
        }

        if(!args[0]){
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`Usage: ${prefix}rgirladmin <user>`)]})
        }

        let abc = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!abc) return message.channel.send({content : `<:ET_cross:1022870496250953769> | Please Provide me a valid user.`});

        let gRole = await client.db3.get(`gadmin_${message.guild.id}`);
        if(!gRole || gRole == null){
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:ET_cross:1022870496250953769> | **girl Admin Role** not found.`)]})
        }

        if(!message.guild.roles.cache.has(gRole)){
            await client.db3.set(`gadmin_${message.guild.id}`,null);
            return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:ET_cross:1022870496250953769> | Role not found in this Guild. Probably deleted!`)]})
        }

        message.guild.members.cache.get(abc.id).roles.remove(gRole);
        return message.channel.send({embeds : [new MessageEmbed().setColor(`#2f3136`).setDescription(`<:ET_Tick:1020380251529937007> | Successfully Removed <@&${gRole}> from ${abc}`)]});
       		})
        })
    }
}