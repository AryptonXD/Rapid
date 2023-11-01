const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: 'roleaddall',
  run: async (client, message, args, ee) => {

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
    try {
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

      if (!role) return message.reply({
        embeds: [new MessageEmbed()
          .setColor('RED')
          .setTitle(`<:ET_cross:1022870496250953769> | Please mention a role to add to everyone!`)
        ]
      });

      if (message.member.roles.highest.position <= role.position) return message.reply({
        embeds: [new MessageEmbed()
          .setColor('RED')
          .setDescription(`<:ET_cross:1022870496250953769> | You cannot give this role as it is the same or above your current highest role.`)
        ]
      });
      if (message.guild.me.roles.highest.position <= role.position) return message.reply({
        embeds: [new MessageEmbed()
          .setColor('RED')
          .setDescription(`<:ET_cross:1022870496250953769> | I cannot add this roles as this role is the same or higher then mine.`)
        ]
      });

      message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role))
      return message.reply({
        embeds: [new MessageEmbed()
          .setTitle(`<:ET_Tick:1020380251529937007> | Adding Role to Everyone`)
          .setDescription(`It might take a few \`mins\` or \`hours\` to add role to everyone according to how many members u have!`)
          .setColor('#2f3136')
          .setTimestamp()
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL({
            dynamic: true
          }))
          .setTitle(`<:ET_cross:1022870496250953769> | Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${message.guild.memberCount} Users`)
        ]
      })
    }
        })
        })
  }
}