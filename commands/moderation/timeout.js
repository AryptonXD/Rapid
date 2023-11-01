const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "timeout",
  aliases: ["tm"],
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

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
        } else {
      if (!member) {
        message.channel.send({ content: `To enable/disable timeout for a user, Mention them first.`});
      } 
      if (!member.manageable) {
        message.channel.send({ content: `i don't have access to manage this member.` });
      } else {
        if (member.isCommunicationDisabled()) {
          member.timeout(null);
          message.channel.send({ content: `Done, i removed their timeout.`});
        } else {
        member.timeout(10000000);
        message.channel.send({ content: `Done, i timed out this member.`});
        }
      }
    }
        })
        })
        })
  },
};