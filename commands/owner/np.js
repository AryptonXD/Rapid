const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');
const st = require('../../settings.js').bot;

module.exports = {
  name: 'noprefix',
  aliases: ['np'],
  run: async (client, message, args) => {
    const user = message.guild.members.cache.get(args[1]) || message.mentions.members.first() || message.author;
    const ID = user.id;
    const option = args[0];
    const users = [];
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`); //arypton

const guide = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
	.addField(`${prefix}np show`, `Shows all the users in noprefix database .`)
	.addField(`${prefix}np reset`, `Removes all the users from noprefix users from the database .`)
	.setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);

    if (!ownerIDS.includes(message.author.id)) {
          return message.channel.send(`Arypton se bhik mango owner ki jao`)
    }
    if (ownerIDS.includes(message.author.id)) {
      if (!option) {
        return message.channel.send({ embeds: [guide]});
      } else if (args[0] === `show`) {
          const nodata = new MessageEmbed()
    	  .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the np command again because earlier database was not seted up.`);
          
            await client.db4.get(`members_np`).then(async (data) => {
                if (!data) {
                    await client.db4.set(`members_np`, { noprefixlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.noprefixlist;
                    const mentions = [];
                    
                    if (users.length !== 0) {
                        const memberss = client.users.cache.get(users)
                        users.forEach((userId, i) => mentions.push(`\`[${i + 1}]\` | ID: [${userId}](https://discord.com/users/${userId}) | <@${userId}>`))
                        const nplist = new MessageEmbed()
                        .setColor(`2f3136`)
              			.setAuthor(client.user.tag, client.user.displayAvatarURL())
                        .setTitle(`Total No Prefix Users`)
                        .setDescription(mentions.join('\n'))
    					.setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);
                      return message.channel.send({ embeds: [nplist] })
                    } else {
                        return message.channel.send(`No one is in No Prefix Database`)
            		}
          		}
            })
        } else if (args[0] === 'reset') {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the whitelist command again because earlier database was not seted up.`);
            
            await client.db4.get(`members_np`).then(async (data) => {
                if (!data) {
                    await client.db4.set(`members_np`, { noprefixlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.noprefixlist;
                    const mentions = [];
                    if (users.length !== 0) {
                    await client.db4.set(`members_np`, { noprefixlist: [] });
                    return message.channel.send(`Reseted Np database`);
                		} else {
                        return message.channel.send(`No one is in No Prefix Database`)
            		}
                	} 
          		})
        	}
      	}
    }
}