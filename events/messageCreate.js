const client = require('../index.js');
const st = require('../settings').bot;
const { MessageEmbed, WebhookClient } = require("discord.js");
const web = new WebhookClient({ url: `https://discord.com/api/webhooks/1085122292629110834/mopaupubF0uGlO_V3-0eyCA_KZQaptA097TKKHSeHwed6MaarZMI-8ANvDgqW99yyr8T`})

//messagCreate events
client.on("messageCreate", async (message) => {
  let prefix = await client.db8.get(`${message.guild.id}_prefix`);
  if (!prefix) prefix = st.info.prefix;
  const MEMBER = message.author;
  const ID = MEMBER.id;
    let np = [];
    
    const exowner = await client.db11.get(`${message.guild.id}_eo`);
    const exadmin = await client.db11.get(`${message.guild.id}_ea`);
    const exmod = await client.db11.get(`${message.guild.id}_em`);
    //const ignorech = await client.db9.get(`${message.channel.id}_ic`);
    //const ignoreby = await client.db9.get(`${message.channel.id}_ib`);
    
  let blacklisted = await client.db4.get(`blacklist_${ID}`);
 
  const user = message.mentions.users.first() || message.author;
  //await client.db9.get(`${message.channel.id}_ib`).then(async (daaata) => {
  ///await client.db9.get(`${message.channel.id}_ic`).then(async (daata) => {
  await client.db4.get(`members_np`).then(async (data) => {
  const noprefixed = data.noprefixlist;
  //const channels = daata.ignorechannellist;
  //const byusers = daaata.ignorebypasslist;
  
const blll = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`You are blacklisted from using **Rapid**`);
  
  if (blacklisted) {
  if (message.content.includes(`${prefix}`)) {
  const embed = new MessageEmbed()
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setDescription(`You are Blacklisted for Good!`)
  .setColor("#2f3136")
  return message.channel.send({embeds: [embed]})
  } 
}

noprefixed.forEach(x => np.push(x));

let regex = new RegExp(`^<@!?${client.user.id}>`);
let pre = message.content.match(regex) ? message.content.match(regex)[0] : prefix;

if (!np.includes(message.author.id)) {
  if(!message.content.startsWith(pre)) return;
}
    if(message.author.bot) return; //return when message author is a bot
    if(!message.guild) return; //return if the command is not using in guild. For example: DM will return the cmd
    const args = np.includes(message.author.id) === false ? message.content.slice(pre.length).trim().split(/ +/) : message.content.startsWith(pre) ? message.content.slice(pre.length).trim().split(/ +/) : message.content.trim().split(/ +/)
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
        if (command) {
            if (!exowner || !exadmin || !exmod) {
          const nodata = new MessageEmbed()
    	     .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the ${command.name} command again because earlier database was not seted up.`);
        await client.db11.set(`${message.guild.id}_eo`, { extraownerlist: [] } ),
        await client.db11.set(`${message.guild.id}_ea`, { extraadminlist: [] } ),
        await client.db11.set(`${message.guild.id}_em`, { extramodlist: [] } );
        //await client.db9.set(`${message.channel.id}_ic`, { ignorechannellist: [] } ),
        //await client.db9.set(`${message.channel.id}_ib`, { ignorebypasslist: [] });
        return message.channel.send({ embeds: [nodata] })
    	}
      }
      /*if (command.name !== ignore) {
          if (!byusers.includes(message.author.id)) {
          if (channels.includes(message.channel.id)) {
              return message.channel.send("This channel is in my ignore channel list, try in another channel").then((m) => {
        setTimeout(async () => {
          m.delete();
        }, 2000)
      })
          	  }
          }
      }*/
    if(command) command.run(client, message, args)
  web.send(`> Command __**${command.name}**__ used by ${message.author.tag} | ${message.author.id} | ${message.guild.name} | ${message.guild.id} | ${message.channel.name} | ${message.channel.id}`)
  			//});
  		//});
    });
});