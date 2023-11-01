const Discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
    name: "anal",
    run: async (client, message, args) => {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'anal'})
			.end((err, response) => {
				const anal = new Discord.MessageEmbed()
				.setImage(response.body.message)
				.setColor('2f3136')
			  return message.channel.send({embeds: [anal]})
			});
		  } else {
			return message.channel.send(":x: This isn't NSFW channel")
		}
	}
}