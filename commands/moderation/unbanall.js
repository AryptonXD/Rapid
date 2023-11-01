const { Message, Client, MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
    name: "unbanall",
    aliases: ['ub'],
    run: async (client, message, args) => {

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
        message.guild.bans.fetch().then((bans) => {
            if (bans.size == 0) {
              {
                const embed = new MessageEmbed()
                  .setDescription(`${client.error} ! There are no banned users.`)
                  .setColor("2f3136");
                message.reply({embeds: [embed]}).then(m => {
                    setTimeout(() => {
                      m.delete().catch(() => {});
                    }, 7000);
                  });
            
              }
            } else {
              message.channel.send({ content: `Unbanning All Members from the server .`})
              bans.forEach((ban) => {
                message.guild.members.unban(ban.user.id);
              });
      
}
        })
        })
        })
        }
}