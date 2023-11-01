const { MessageEmbed } = require('discord.js');
const { ownerIDS } = require('../../owner.json');

module.exports = {
    name: 'ignore',
    run: async (client, message, args) => {
        const option = args[0];
    	const user = message.guild.members.cache.get(args[2]) || message.mentions.members.first() || message.author;
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]) || message.channel;
    	const ID = user.id;
        
        const mentionchannel = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`Mention Channel First`);
        
        const mentionsomeone = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`Mention Someone First`);
        
        const alblist = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_cross:1003992348205777036> | Already added <#${channel.id}> in ignore channel for this guild .`);

		const blist = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_tick:1004003482312900608> | Added <#${channel.id}> in ignore channel for this guild .`);

		const remblist = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_tick:1004003482312900608> | <#${channel.id}> is Removed from ignore channel for this guild .`);

		const noblist = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_cross:1003992348205777036> | <#${channel.id}> Yet not added in ignore channel for this guild .`);
        
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		const remblist2 = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_tick:1004003482312900608> | Removed ignore bypass from <@${ID}> for this guild .`);

		const noblist2 = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_cross:1003992348205777036> | Yet not added in ignore bypass to <@${ID}> for this guild .`);

		const blist2 = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_tick:1004003482312900608> | Added in ignore bypass to <@${ID}> for this guild .`);

		const alblist2 = new MessageEmbed()
    	.setColor("#2f3136")
    	.setAuthor(client.user.tag, client.user.displayAvatarURL())
    	.setDescription(`<a:ET_cross:1003992348205777036> | Already in ignore bypass to <@${ID}> for this guild .`);
        
        const guide = new MessageEmbed()
        	.setColor('2f3136')
    		.setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
    		.setThumbnail(client.user.displayAvatarURL())
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore guide\``, `Shows the guide embed for the module .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore channel add <channel>\``, `Add the channel in ignore channels .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore channel remove <channel>\``, `Remove the channel from ignore channels .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore channel config\``, `Show ignore module settings for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore bypass add <user>\``, `Bypass a user from ignore channels .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore bypass remove <user>\``, `Remove bypass from a user from ignore channels .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore bypass config\``, `Show ignore module settings for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`ignore reset\``, `Resets ignore settings for the server .`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner or Extra Admin to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        await client.db11.get(`${message.guild.id}_ea`).then(async (dataaa) => {
        const exowner = dataa.extraownerlist;
        const exadmin = dataaa.extraadminlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !exmod.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
        
        if (!option) {
            return message.channel.send({ embeds: [guide] });
        } else if (option === `guide`) {
            return message.channel.send({ embeds: [guide] });
        } else if (option === `channel` && args[1] === `add`) {
          const nodata = new MessageEmbed()
    	  .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the channel command again because earlier database was not seted up.`);
          
            await client.db9.get(`${message.channel.id}_ic`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ic`, { ignorechannellist: [] });
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    if (!args[2]) {
                        return message.channel.send({ embeds: [mentionchannel] });
                    } if (!channel) {
                        return message.channel.send({ embeds: [mentionchannel] });
                    } else {
                        if (data.ignorechannellist.includes(channel.id)) {
                            return message.channel.send({ embeds: [alblist] })
                        } 
                        if (data.ignorechannellist.length === 10) {
                          return message.channel.send('Maximum Channel Addition Limit is 10 .') 
                        } else {
                            await client.db9.push(`${message.channel.id}_ic.ignorechannellist`, channel.id);
                            return message.channel.send({ embeds: [blist] })
                        }
                    }
				}
			})
        } else if (option === `channel` && args[1] === `remove`) {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the channel command again because earlier database was not seted up.`);
          
            await client.db9.get(`${message.channel.id}_ic`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ic`, { ignorechannellist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    if (!args[2]) {
                        return message.channel.send({ embeds: [mentionchannel] });
                    } if (!channel) {
                        return message.channel.send({ embeds: [mentionchannel] });
                    } else {
                        if (!data.ignorechannellist.includes(channel.id)) {
                            return message.channel.send({ embeds: [noblist] })
                        } else {
                            await client.db9.pull(`${message.channel.id}_ic.ignorechannellist`, channel.id);
                            return message.channel.send({ embeds: [remblist] })
                        }
                    }
                }
            })
        } else if (option === `bypass` && args[1] === `add`) {
          const nodata = new MessageEmbed()
    	  .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the bypass command again because earlier database was not seted up.`);
          
            await client.db9.get(`${message.channel.id}_ib`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ib`, { ignorebypasslist: [] });
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    if (!args[2]) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } if (!user) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } else {
                        if (data.ignorebypasslist.includes(ID)) {
                            return message.channel.send({ embeds: [alblist2] })
                        }  
                        if (data.ignorebypasslist.length === 10) {
                          return message.channel.send('Maximum Bypass Users Addition Limit is 10 .') 
                        } else {
                            await client.db9.push(`${message.channel.id}_ib.ignorebypasslist`, ID);
                            return message.channel.send({ embeds: [blist2] })
                        }
                    }
				}
			})
        } else if (option === `bypass` && args[1] === `remove`) {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the bypass command again because earlier database was not seted up.`);
          
            await client.db9.get(`${message.channel.id}_ib`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ib`, { ignorebypasslist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    if (!args[2]) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } if (!user) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } else {
                        if (!data.ignorebypasslist.includes(ID)) {
                            return message.channel.send({ embeds: [noblist2] })
                        } else {
                            await client.db9.pull(`${message.channel.id}_ib.ignorebypasslist`, ID);
                            return message.channel.send({ embeds: [remblist2] })
                        }
                    }
                }
            })
        } else if (option === `channel` && args[1] === `config`) {
          const nodata = new MessageEmbed()
    	  .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the channel command again because earlier database was not seted up.`);
          
            await client.db9.get(`${message.channel.id}_ic`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ic`, { ignorechannellist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const channels = data.ignorechannellist;
                    const mentions = [];
                    
                    if (channels.length !== 0) {
                        channels.forEach((userId, i) => mentions.push(`\`[${i + 1}]\` | ID: [${userId}](https://discord.com/channels/${message.guild.id}/${userId}) | <#${userId}>`))
                        const nplist = new MessageEmbed()
                        .setColor(`2f3136`)
              			.setAuthor(client.user.tag, client.user.displayAvatarURL())
                        .setTitle(`Total Ignore Channels`)
                        .setDescription(mentions.join('\n'))
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
                      return message.channel.send({ embeds: [nplist] })
                    } else {
                        return message.channel.send(`No channel is in Ignore Channel Database`)
            		}
          		}
            })
        } else if (option === `bypass` && args[1] === `config`) {
          const nodata = new MessageEmbed()
    	  .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the bypass command again because earlier database was not seted up.`);
            
            await client.db9.get(`${message.channel.id}_ib`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ib`, { ignorebypasslist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.ignorebypasslist;
                    const mentions = [];
                    
                    if (users.length !== 0) {
                        const memberss = client.users.cache.get(users)
                        users.forEach((userId, i) => mentions.push(`\`[${i + 1}]\` | ID: [${userId}](https://discord.com/users/${userId}) | <@${userId}>`))
                        const nplist = new MessageEmbed()
                        .setColor(`2f3136`)
              			.setAuthor(client.user.tag, client.user.displayAvatarURL())
                        .setTitle(`Total Ignore Bypass Users`)
                        .setDescription(mentions.join('\n'))
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
                      return message.channel.send({ embeds: [nplist] })
                    } else {
                        return message.channel.send(`No one is in Ignore Bypass Database`)
            		}
          		}
            })
        } else if (option === `channel` && args[1] === `reset`) {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the channel command again because earlier database was not seted up.`);
            
            await client.db9.get(`${message.channel.id}_ic`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ic`, { ignorechannellist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.ignorechannellist;
                    const mentions = [];
                    if (users.length !== 0) {
                    await client.db9.set(`${message.channel.id}_ic`, { ignorechannellist: [] });
                    return message.channel.send(`Reseted Ignore Channel database`);
                		} else {
                        return message.channel.send(`No channel is in Ignore Channel Database`)
            			}
                	} 
          	})
        } else if (option === `bypass` && args[1] === `reset`) {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the bypass command again because earlier database was not seted up.`);
            
            await client.db9.get(`${message.channel.id}_ib`).then(async (data) => {
                if (!data) {
                    await client.db9.set(`${message.channel.id}_ib`, { ignorebypasslist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.ignorebypasslist;
                    const mentions = [];
                    if (users.length !== 0) {
                    await client.db9.set(`${message.channel.id}_ib`, { ignorebypasslist: [] });
                    return message.channel.send(`Reseted Ignore Channel database`);
                		} else {
                        return message.channel.send(`No channel is in Ignore Channel Database`)
                        		}
                			}
            			})
                	} 
          	})
        })
    }
};