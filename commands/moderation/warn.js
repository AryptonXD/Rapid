const { MessageEmbed } = require('discord.js');
const { ownerIDS } = require('../../owner.json')

module.exports = {
  name: "warn",
  description: "warn members",
  usage: "m/warn <mention member/member id> [reason]",
  aliases: [],
  run: async (bot, message, args) => {
        let warnPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner or Extra Admin to execute this command.`)
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
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Please Mention A valid member of this server");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(No Reason Provided)";
            
            member.send(`You have been warned by <${message.author.username}> for this reason: ${reason}`)
            .catch(error => message.channel.send(`Sorry <${message.author}> I couldn't warn because of : ${error}`));
            const warnEmbed = new MessageEmbed()
            .setTitle("**__Warn Report__**")
            .setDescription(`<@${member.user.id}> has been warned by <@${message.author.id}>\nReason: \`${reason}\`\nAction: \`Warn\`\nModerator: ${message.author.tag}`)

            return message.channel.send({ embeds: [warnEmbed] })
        })
        })
        })

    }
}