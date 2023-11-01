const Discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
    name: "4k",
    run: async (client, message, args) => {
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: '4k'})
			.end((err, response) => {
				const porn = new Discord.MessageEmbed()
				.setImage(response.body.message)
				.setColor('2f3136')
			  message.channel.send({ embeds: [porn]})
			});
		  } else {
			return message.channel.send(":x: This isn't NSFW channel")
		}
	}
}