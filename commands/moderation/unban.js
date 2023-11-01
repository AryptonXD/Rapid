const { ownerIDS } = require('../../owner.json');

module.exports = {
    name: "unban",
    aliases: [],
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

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        } else {
       const ID = args[0];
       if (!ID) {
         message.channel.send({ content: `Provide me an ID to unban.` });
       } else {
         const user = await message.guild.bans.fetch(ID);
         
         if (!user) {
           message.channel.send({ content: `That user is not banned from this server.` });
         } else {
           message.guild.members.unban(ID).catch(() => {
             message.channel.send(`:warning: Unknown Ban, failed to unban that user..`)
           })
           message.channel.send({ content: `Unbanned!` });
         }
       }
     }
        })
        })
  },
};