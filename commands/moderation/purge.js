const { MessageEmbed } = require('discord.js');
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: 'purge',
  aliases: ['prune'],
  run: async (client, message, args) => {

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
    else {
      const amount = args[0];
      if (!amount) {
        message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<a:ET_cross:1003992348205777036> | You must provide the number of messages to be deleted.`)]})
      } 
      else {
        if (!parseInt(amount)) {
          message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<a:ET_cross:1003992348205777036> | You must provide a valid number of messages to be deleted.`)]})
        } else if (amount >= 1001) {
          message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<a:ET_cross:1003992348205777036> | You can't delete more than **1000** messages at a time.`)]})
        } else {
          await message.delete().catch((_) => { });
          Delete(message.channel, amount);
          message.channel.send({embeds: [new MessageEmbed().setColor(client.color).setDescription(`<a:ET_tick:1004003482312900608> | Successfully deleted ${amount} messages.`)]}).then(m => {
                    setTimeout(() => {
                      m.delete().catch(() => {});
                    }, 2000);
                  });                   
        }
      }
    }
  })
        })
     })
  }
}

function Delete(channel, amount){
  for (let i = amount; i > 0; i-=100) {
    if (i > 100) {
      channel.bulkDelete(100).catch((_) => { });
    } else {
      channel.bulkDelete(i).catch((_) => { });
    }
  }
}