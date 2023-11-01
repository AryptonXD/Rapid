const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');
const st = require('../../settings.js').bot;

module.exports = {
  name: 'addnoprefix',
  aliases: ['anp'],
  run: async (client, message, args) => {
    const user = message.guild.members.cache.get(args[1]) || message.mentions.members.first() || message.author;
    const ID = user.id;
    const option = args[0];
    const users = [];
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`); //arypton

const galblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Already added no prefix to <@${ID}> for this guild`);

const gblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Added no prefix to <@${ID}> for this guild`);

const mentionsomeone = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`Mention Someone First`);

const blist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Added no prefix to <@${ID}> for all guilds`);

const alblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Already added no prefix to <@${ID}> for all guilds`);

const guide = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
	.addField(`${prefix}anp all <user>`, `Add a user to noprefix users for all servers .`)
    .setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);

    if (!ownerIDS.includes(message.author.id)) {
          return message.channel.send(`Arypton se bhik mango owner ki jao`)
    }
    if (ownerIDS.includes(message.author.id)) {
      if (!option) {
        return message.channel.send({ embeds: [guide]});
      } else if (args[0] === `all`) {
          const nodata = new MessageEmbed()
    	  .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the anp command again because earlier database was not seted up.`);
          
            await client.db4.get(`members_np`).then(async (data) => {
                if (!data) {
                    await client.db4.set(`members_np`, { noprefixlist: [] });
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    if (!args[1]) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } if (!user) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } else {
                        if (data.noprefixlist.includes(ID)) {
                            return message.channel.send({ embeds: [alblist] })
                        }  else {
                            await client.db4.push(`members_np.noprefixlist`, ID);
                            return message.channel.send({ embeds: [blist] })
                        }
                    }
				}
			})
      }
    }
  }
}