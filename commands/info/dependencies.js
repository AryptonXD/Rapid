const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "dependencies",
  aliases: ["dp"],
  run: async (client, message) => {
	const embed = new MessageEmbed()
	   .setTitle(":bricks: Dependencies")
     .setDescription(client.user.tag + " run on " + Object.keys(require('../../package.json').dependencies).length + " dependencies")
	   .setTimestamp()
	   .setColor("2f3136")
  return message.channel.send({embeds: [embed]});
  }
}