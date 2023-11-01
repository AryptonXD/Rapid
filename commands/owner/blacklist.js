const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');
const st = require('../../settings.js').bot;

module.exports = {
  name: 'blacklist',
  aliases: ['bl'],
  run: async (client, message, args) => {
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.author;
    const ID = user.id;
    const blacklisted = await client.db4.get(`blacklist_${ID}`);
    arypton = await client.users.fetch(`560115112078475266`); //arypton

const mentionsomeone = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`Mention Someone First`);

const blist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<@${ID}> is now blacklisted`);

const remblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<@${ID}> is now unblacklisted`);

const alblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<@${ID}> is already blacklisted`);

const noblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<@${ID}> is not blacklisted`);

const guide = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`${prefix}blacklist add <user>\nAdd a user to blacklisted users in the server.\n\n${prefix}blacklist remove <user>\nShows list of blacklisted users in the client database.\n\n${prefix}blacklist show\nRemoves a user from blacklisted users from the client database.\n\n${prefix}blacklist reset\nRemoves all the users from blacklisted users from the client database.`)
    .setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);
    
    const raja = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`Only Bot Owner can perform this command.`)
      .setFooter("Arypton se bhik mango owner ki");

    if (!ownerIDS.includes(message.author.id)) {
          return message.channel.send({embeds: [raja], components: [button2] })
    }
    if (ownerIDS.includes(message.author.id)) {
      if (!args[0]) {
        return message.channel.send({ embeds: [guide]});
      } else if (args[0] === `add`) {
         if (blacklisted) {
           user.user
          .send("You Blacklisted from using **Rapid**")
          return message.channel.send({ embeds: [alblist]});
        } else {
          await client.db4.set(`blacklist_${ID}`, true),
          await client.db2.delete(`noprefix_${ID}`, true),
          await client.db2.delete(`${ID}_owner`, true),
          await client.db2.delete(`${ID}_dev`, true),
          await client.db2.delete(`${ID}_admin`, true),
          await client.db2.delete(`${ID}_staff`, true),
          await client.db2.delete(`${ID}_partner`, true),
          await client.db2.delete(`${ID}_supporter`, true),
          await client.db2.delete(`${ID}_sponsor`, true),
          await client.db2.delete(`${ID}_os`, true),
          await client.db2.delete(`${ID}_vip`, true),
          await client.db2.delete(`${ID}_friend`, true),
          await client.db2.delete(`${ID}_bug`, true),
          await client.db2.delete(`${message.guild.id}_noprefix_${ID}`);
           user.user
          .send("You are Blacklisted from using **Rapid**")
          return message.channel.send({ embeds: [blist]});
        }
      } else if (args[0] === `remove`) {
         if (!blacklisted) {
          return message.channel.send({ embeds: [noblist]});
        } else {
          await client.db4.delete(`blacklist_${ID}`, true);
          return message.channel.send({ embeds: [remblist]});
        }
      }
    }
  }
}