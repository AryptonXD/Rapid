const Discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
    name: "pussy",
    run: async (client, message, args) => {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'pussy'})
			.end((err, response) => {
				const pussy = new Discord.MessageEmbed()
				.setImage(response.body.message)
				.setColor('2f3136')
			  return message.channel.send({ embeds: [pussy]})
			});
		  } else {
			return message.channel.send(":x: This isn't NSFW channel")
		}
	}
}