const { MessageEmbed } = require('discord.js');
const client = require('../index.js');

client.on('presenceUpdate', async (oldPresence, newPresence) => {
  let vanityrole = await client.db6.get(`vanityrole_${newPresence.guild.id}.Role`)
  let vanityy = await client.db6.get(`vanityurl_${newPresence.guild.id}.Vanity`)
  let vanitychannel = await client.db6.get(`vanitych_${newPresence.guild.id}.Channel`)
const channel = newPresence.guild.channels.cache.get(vanitychannel)
const role = newPresence.guild.roles.cache.get(`${vanityrole}`);
const status = newPresence.activities.map(a => a.state);
const lalalala = newPresence.guild.members.cache.get(`${newPresence.user.id}`)

  const added = new MessageEmbed()
    .setColor('#2f3136')
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .addField(`Staff Added By Vanity System`, `\`${newPresence.user.tag}\` added the status and got the role ${role}`)

  const removed = new MessageEmbed()
    .setColor('#2f3136')
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .addField(`Staff Removed By Vanity System`, `\`${newPresence.user.tag}\` removed the status and lossed the role ${role}`)

if (status[0] && status.includes(`.gg/${vanityy}`) || status.includes(`discord.gg/${vanityy}`)) {
    channel.send({ embeds: [added]})
    newPresence.member.roles.add(role, 'Vanity Roles System');
  } else {
  if (lalalala.roles.cache.has(vanityrole)) {
    channel.send({ embeds: [removed]})
    newPresence.member.roles.remove(role);
    }
  }
});