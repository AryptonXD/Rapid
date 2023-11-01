const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "nick",
  aliases: ["nickname", "setnick"],
  run: async (client, message, args) => {
    const nickname = args[0];

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
      const member = message.mentions.members.first();
      if (!member) {
        message.channel.send({ content: `Mention someone first.`});
      } 
      if (!member.manageable) {
        message.channel.send({ content: `i don't have access to manage this member.` });
      } else {
        if (!nickname) {
          message.channel.send({ content: `provide me a nickname to set.` });
        } else {
        member.setNickname(`${nickname}`);
        message.channel.send({ content: `Done, the nickname is updated to *${nickname}*.`});
        		}
      		}
          })
        })
    })
  },
};