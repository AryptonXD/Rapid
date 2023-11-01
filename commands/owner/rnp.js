const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');
const st = require('../../settings.js').bot;

module.exports = {
  name: 'removenoprefix',
  aliases: ['rnp'],
  run: async (client, message, args) => {
    const user = message.guild.members.cache.get(args[1]) || message.mentions.members.first();
    const ID = user.id;
    const option = args[0];
    const users = [];
    const gnoprefixed = await client.db4.get(`${message.guild.id}_noprefix_${ID}`);
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = st.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`); //arypton

const gnoblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Yet not having no prefix to <@${ID}> for this guild`);

const gremblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Removed no prefix from <@${ID}> for this guild`);

const mentionsomeone = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`Mention Someone First`);

const remblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Removed no prefix from <@${ID}> for all guilds`);

const noblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Yet not having no prefix to <@${ID}> for all guilds`);

const guide = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
	.addField(`${prefix}rnp all <user>`, `Remove a user from noprefix users from all servers .`)
    .setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);

    if (!ownerIDS.includes(message.author.id)) {
          return message.channel.send(`Arypton se bhik mango owner ki jao`)
    }
    if (ownerIDS.includes(message.author.id)) {
      if (!option) {
        return message.channel.send({ embeds: [guide]});
      } else if (args[0] === `all`) {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the rnp command again because earlier database was not seted up.`);
          
            await client.db4.get(`members_np`).then(async (data) => {
                if (!data) {
                    await client.db4.set(`members_np`, { noprefixlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    if (!user) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } else {
                        if (!data.noprefixlist.includes(ID)) {
                            return message.channel.send({ embeds: [noblist] })
                        } else {
                            await client.db4.pull(`members_np.noprefixlist`, ID);
                            return message.channel.send({ embeds: [remblist] })
                        }
                    }
                }
            })
        }
      }
    }
}