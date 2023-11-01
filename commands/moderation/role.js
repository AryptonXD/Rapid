const { Message, Client, MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "role",
  run: async (client, message, args) => {
      const rolemtn = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])

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
        const user = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
        const guild = client.guilds.cache.get(message.guild.id)
        if(user ===undefined) return message.reply(`${client.error} User Not Found`)
        if(guild ===undefined) return console.log(`GUILD ERROR`)
        const userio = await guild.members.fetch(user.id).catch((e) => {
            console.log(`Unable to Get User`)
         });
            
            if (user) {
                return message.channel.send('Mention User Too')
            }
            if (rolemtn) {
                return message.channel.send('Mention Role Too')
            }

    if (message.member.roles.highest.position <= message.guild.roles.cache.get(rolemtn.id).position) {
      return message.channel.send(`❌ | You cannot give this role to the user because it is either role is equal or higher position than you`);
    }
        if(rolemtn ===undefined ) return message.reply(`:x: Role Not Found`)

        const userioi = userio.roles.cache.has(rolemtn.id)
        if(userioi ===true) {
           user.roles.remove(rolemtn.id, `${message.author.tag}(${message.author.id})`)
            const freefirepro = new  MessageEmbed()
            .setDescription(` Successfully Removed Role`)
            .setColor(`FF0000`)
            return message.channel.send({embeds: [freefirepro]})
        } else {
            user.roles.add(rolemtn.id, `${message.author.tag}(${message.author.id})`)
            const freefirenood = new  MessageEmbed()
            .setDescription(` Successfully Added Role`)
            .setColor(`FF0000`)
            return message.channel.send({embeds: [freefirenood]})
        }
        	})
        })
    }
}