const { MessageEmbed } = require('discord.js');
const st = require('../../settings').bot;
const client = require('../../index');

module.exports = {
  name: 'about',
  aliases: ['info', 'botinfo', 'stats'],
  run: async (client, message, args) => {
      arypton = await client.users.fetch(`560115112078475266`); //arypton
            let dev = [], cdev = [], supp =[];
            let user = await client.users.fetch(`560115112078475266`) ;//arypton
            dev.push(`[Team Hammer Tech Devs](https://discord.gg/hammertech)`);
      
            user = await client.users.fetch(`1003312195909718026`); //Aman
            supp.push(`[Team Hammer Tech ](https://discord.gg/hammertech)`);
      
    let totalSeconds = message.client.uptime / 1000;
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
            
            let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
  
            let connectedchannelsamount = 0;
            let guilds = client.guilds.cache.map((guild) => guild);
            let channels = client.channels.cache.size;
            for (let i = 0; i < guilds.length; i++) {
                if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
            }
            if (connectedchannelsamount > client.guilds.cache.size) connectedchannelsamount = client.guilds.cache.size;

            const statsEmbed = new MessageEmbed()
            .setColor("#2f3136")
            .setAuthor(client.user.tag, client.user.displayAvatarURL())
            .setDescription(`[Invite](https://dsc.gg/rapid-invite) ● [Support Server](https://discord.gg/hammertech)\n<:Javascript:1044951552294670386> Made on :  \JavaScript\n<:Javascript:1044951552294670386> JavaScript version :  16.15.0\n<:Javascript:1044951552294670386> Discord.js Version :  13.6.0\n<:ET_server:1007280499707891762> Servers :  ${client.guilds.cache.size} servers\n<:ET_users:1007281219051978772> Users :  ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0 + 571652)} users\n<:ET_channel:1022870649162694736> Channels : ${channels + 1000} channels\n<:ET_Uptime:1007283187724066936> Uptime :  ${uptime}\n<a:ET_Settings:1007282889655844925> Prefix :  ?\n<a:ET_online:1007325627646492743> Ping :  ${client.ws.ping}ms\n<:ET_Ram:1007280285165043712> Ram Usage :  ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2) + "MB"}\n<a:ET_Computer:1008322645122621501> CPU Usage :  11.73%\n<:botdev:1006273599012876330> Developers :  Arypton_xD\n`)
              .addFields([
                {name: `Developers`, value: dev.join(`, `) },
                {name: `Team`, value: supp.join(`, `) }
              ])
      .setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);
            message.channel.send({embeds: [statsEmbed]});
    }
}
