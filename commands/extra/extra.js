const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: 'extra',
  run: async (client, message, args) => {

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[2]) || message.author;
    const ID = user.id;
    const option = args[0];
    const option2 = args[1];
        
        const guide = new MessageEmbed()
        	.setColor('2f3136')
    		.setAuthor({ name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
    		.setThumbnail(client.user.displayAvatarURL())
        	.addField(`<a:go_ahead:1085116891330269234> \`extra guide\``, `Shows the guide embed for the module .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra owner add <user>\``, `Add the extra owner for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra admin  add <user>\``, `Add the extra admin for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra mod add <user>\``, `Add the extra mod for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra owner remove <user>\``, `Remove the extra owner for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra admin remove <user>\``, `Remove the extra admin for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra mod remove <user>\``, `Remove the extra mod for the server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra owner show\``, `Shows the extra owner for this server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra admin show\``, `Shows the extra owner for this server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra mod show\``, `Shows the extra owner for this server .`)
        	.addField(`<a:go_ahead:1085116891330269234> \`extra reset\``, `Resets extra personality settings for the server .`)
      .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const mentionsomeone = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`Mention Someone First`);

    const eolist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Added <@${ID}> to Extra Owner for this guild .`);

    const eoallist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Already added <@${ID}> to Extra Owner for this guild .`);


    /////////////////////////////////////////////////

    const remblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Removed <@${ID}> Extra Owner from this guild .`);

    const noblist = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Yet not added <@${ID}> in Extra Owner for this guild .`);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const eolist2 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Added <@${ID}> to Extra Admin for this guild .`);

    const eoallist2 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Already added <@${ID}> to Extra Admin for this guild .`);


    /////////////////////////////////////////////////

    const remblist2 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Removed <@${ID}> Extra Admin from this guild .`);

    const noblist2 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Yet not added <@${ID}> in Extra Admin for this guild .`);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const eolist3 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Added <@${ID}> to Extra Admin for this guild .`);

    const eoallist3 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Already added <@${ID}> to Extra Admin for this guild .`);


    /////////////////////////////////////////////////

    const remblist3 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_tick:1004003482312900608> | Removed <@${ID}> Extra Admin from this guild .`);

    const noblist3 = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`<a:ET_cross:1003992348205777036> | Yet not added <@${ID}> in Extra Admin for this guild .`);

     const raja = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`Only Server Owner can perform this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

    if (!option) {
        return message.channel.send({embeds: [guide]});
	} else if (option === 'owner' && option2 === 'add') {
        const nodata = new MessageEmbed()
    	    .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra owner command again because earlier database was not seted up.`);

      if (message.author.id !== message.guild.ownerId && !ownerIDS.includes(message.author.id)) {
        return message.channel.send({ embeds: [raja] });
      }
          
        await client.db11.get(`${message.guild.id}_eo`).then(async (data) => {
          if (!data) {
            await client.db11.set(`${message.guild.id}_eo`, { extraownerlist: [] });
            return message.channel.send({ embeds: [nodata] });
            } else {
              if (!args[2]) {
                return message.channel.send({ embeds: [mentionsomeone] });
              } if (!user) {
                return message.channel.send({ embeds: [mentionsomeone] });
              } else {
              if (data.extraownerlist.includes(ID)) {
                return message.channel.send({ embeds: [eoallist] })
              } 
              if (data.extraownerlist.length === 2) {
                return message.channel.send('Maximum Extra Owner Limit is 2 .') 
                } else {
                await client.db11.push(`${message.guild.id}_eo.extraownerlist`, ID);
                return message.channel.send({ embeds: [eolist] })
            }
          }
				}
			}) 
    }	else if (option === 'owner' && option2 === 'remove') {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra owner command again because earlier database was not seted up.`);

      if (message.author.id !== message.guild.ownerId && !ownerIDS.includes(message.author.id)) {
        return message.channel.send({ embeds: [raja] });
      }
          
            await client.db11.get(`${message.guild.id}_eo`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_eo`, { extraownerlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                      if (!args[2]) {
                      return message.channel.send({ embeds: [mentionsomeone] });
                    } if (!user) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } else {
                        if (!data.extraownerlist.includes(ID)) {
                            return message.channel.send({ embeds: [noblist] })
                        } else {
                            await client.db11.pull(`${message.guild.id}_eo.extraownerlist`, ID);
                            return message.channel.send({ embeds: [remblist] })
                        }
                    }
                }
            })
    } else if (option === 'owner' && option2 === 'show') {
          const nodata = new MessageEmbed()
    	     .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra owner command again because earlier database was not seted up.`);

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        const exowner = dataa.extraownerlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
          
            await client.db11.get(`${message.guild.id}_eo`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_eo`, { extraownerlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.extraownerlist;
                    const mentions = [];
                    
                    if (users.length !== 0) {
                        users.forEach((userId, i) => mentions.push(`\`[${i + 1}]\` | ID: [${userId}](https://discord.com/users/${userId}) | <@${userId}>`))
                        const nplist = new MessageEmbed()
                        .setColor(`2f3136`)
              			    .setAuthor(client.user.tag, client.user.displayAvatarURL())
                        .setTitle(`Extra Owner List ${data.extraownerlist.length}/2`)
                        .setDescription(mentions.join('\n'))
                        .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
                          return message.channel.send({ embeds: [nplist] })
                    } else {
                        return message.channel.send(`No Extra Owner List`)
            		}
          		}
          })
      })
    } else if (option === 'owner' && option2 ==='reset') {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra owner command again because earlier database was not seted up.`);

        if (!message.guild.ownerId.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [raja] });
        }
            
            await client.db11.get(`${message.guild.id}_eo`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_eo`, { extraownerlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.extraownerlist;
                    if (users.length !== 0) {
                    await client.db11.set(`${message.guild.id}_eo`, { extraownerlist: [] });
                    return message.channel.send(`Reseted Extra Owner List`);
                		} else {
                        return message.channel.send(`No one is in Extra Owner List`)
            		}
                	} 
          		})
    } else if (option === 'admin' && option2 === 'add') {
        const nodata = new MessageEmbed()
    	    .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra admin command again because earlier database was not seted up.`);

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        const exowner = dataa.extraownerlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
          
        await client.db11.get(`${message.guild.id}_ea`).then(async (data) => {
          if (!data) {
            await client.db11.set(`${message.guild.id}_ea`, { extraadminlist: [] });
            return message.channel.send({ embeds: [nodata] });
            } else {
              if (!args[2]) {
                return message.channel.send({ embeds: [mentionsomeone] });
              } if (!user) {
                return message.channel.send({ embeds: [mentionsomeone] });
              } else {
              if (data.extraadminlist.includes(ID)) {
                return message.channel.send({ embeds: [eoallist2] })
              }
              if (data.extraadminlist.length === 5) {
                return message.channel.send('Maximum Extra Admin Limit is 5 .') 
              } else {
                await client.db11.push(`${message.guild.id}_ea.extraadminlist`, ID);
                return message.channel.send({ embeds: [eolist2] })
              }
            }
				  }
			  })
      })
    }	else if (option === 'admin' && option2 === 'remove') {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra admin command again because earlier database was not seted up.`);

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        const exowner = dataa.extraownerlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
          
            await client.db11.get(`${message.guild.id}_ea`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_ea`, { extraadminlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                      if (!args[2]) {
                      return message.channel.send({ embeds: [mentionsomeone] });
                    } if (!user) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } else {
                        if (!data.extraadminlist.includes(ID)) {
                            return message.channel.send({ embeds: [noblist2] })
                        } else {
                            await client.db11.pull(`${message.guild.id}_ea.extraadminlist`, ID);
                            return message.channel.send({ embeds: [remblist2] })
                        }
                    }
                }
            })
        })
    } else if (option === 'admin' && option2 === 'show') {
          const nodata = new MessageEmbed()
    	     .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra admin command again because earlier database was not seted up.`);

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

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
          
            await client.db11.get(`${message.guild.id}_ea`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_ea`, { extraadminlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.extraadminlist;
                    const mentions = [];
                    
                    if (users.length !== 0) {
                        users.forEach((userId, i) => mentions.push(`\`[${i + 1}]\` | ID: [${userId}](https://discord.com/users/${userId}) | <@${userId}>`))
                        const nplist = new MessageEmbed()
                        .setColor(`2f3136`)
              			    .setAuthor(client.user.tag, client.user.displayAvatarURL())
                        .setTitle(`Extra Admin List ${data.extraadminlist.length}/5`)
                        .setDescription(mentions.join('\n'))
      					.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
                          return message.channel.send({ embeds: [nplist] })
                    } else {
                        return message.channel.send(`No Extra Admin List`)
            		}
          		}
            })
          })
        })
    } else if (option === 'admin' && option2 ==='reset') {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra admin command again because earlier database was not seted up.`);

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        const exowner = dataa.extraownerlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
            
            await client.db11.get(`${message.guild.id}_ea`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_ea`, { extraadminlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.extraadminlist;
                    if (users.length !== 0) {
                    await client.db11.set(`${message.guild.id}_ea`, { extraadminlist: [] });
                    return message.channel.send(`Reseted Extra Admin List`);
                		} else {
                        return message.channel.send(`No one is in Extra Admin List`)
            		}
                	} 
          		})
        })
    } else if (option === 'mod' && option2 === 'add') {
        const nodata = new MessageEmbed()
    	    .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra mod command again because earlier database was not seted up.`);

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

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
          
        await client.db11.get(`${message.guild.id}_em`).then(async (data) => {
          if (!data) {
            await client.db11.set(`${message.guild.id}_em`, { extramodlist: [] });
            return message.channel.send({ embeds: [nodata] });
            } else {
              if (!args[2]) {
                return message.channel.send({ embeds: [mentionsomeone] });
              } if (!user) {
                return message.channel.send({ embeds: [mentionsomeone] });
              } else {
              if (data.extramodlist.includes(ID)) {
                return message.channel.send({ embeds: [eoallist3] })
              } 
              if (data.extramodlist.length === 10) {
                return message.channel.send('Maximum Extra Mod Limit is 10 .') 
                } else {
                await client.db11.push(`${message.guild.id}_em.extramodlist`, ID);
                return message.channel.send({ embeds: [eolist3] })
                }
              }
				    }
			    })
        })
      })
    }	else if (option === 'mod' && option2 === 'remove') {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra mod command again because earlier database was not seted up.`);

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

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
          
            await client.db11.get(`${message.guild.id}_em`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_em`, { extramodlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                      if (!args[2]) {
                      return message.channel.send({ embeds: [mentionsomeone] });
                    } if (!user) {
                        return message.channel.send({ embeds: [mentionsomeone] });
                    } else {
                        if (!data.extramodlist.includes(ID)) {
                            return message.channel.send({ embeds: [noblist3] })
                        } else {
                            await client.db11.pull(`${message.guild.id}_em.extramodlist`, ID);
                            return message.channel.send({ embeds: [remblist3] })
                        }
                    }
                }
            })
          })
        })
    } else if (option === 'mod' && option2 === 'show') {
          const nodata = new MessageEmbed()
    	     .setColor("#2f3136")
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra mod command again because earlier database was not seted up.`);

     const rajaa = new MessageEmbed()
      .setColor("#2f3136")
      .setThumbnail(client.user.displayAvatarURL())
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setDescription(`You need to be either Server Owner or to be in Extra Owner || Extra Admin or Extra Mod to execute this command.`)
      .setFooter(client.user.tag, client.user.displayAvatarURL())

        await client.db11.get(`${message.guild.id}_eo`).then(async (dataa) => {
        await client.db11.get(`${message.guild.id}_ea`).then(async (dataaa) => {
        await client.db11.get(`${message.guild.id}_em`).then(async (dataaaa) => {
        const exowner = dataa.extraownerlist;
        const exadmin = dataaa.extraadminlist;
        const exmod = dataaaa.extramodlist;

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !exmod.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
          
            await client.db11.get(`${message.guild.id}_em`).then(async (data) => {
                if (!data) {
                    await client.db11.set(`${message.guild.id}_em`, { extramodlist: [] } );
                    return message.channel.send({ embeds: [nodata] });
                } else {
                    const users = data.extramodlist;
                    const mentions = [];
                    
                    if (users.length !== 0) {
                        users.forEach((userId, i) => mentions.push(`\`[${i + 1}]\` | ID: [${userId}](https://discord.com/users/${userId}) | <@${userId}>`))
                        const nplist = new MessageEmbed()
                        .setColor(`2f3136`)
              			    .setAuthor(client.user.tag, client.user.displayAvatarURL())
                        .setTitle(`Extra Mod List ${data.extramodlist.length}/10`)
                        .setDescription(mentions.join('\n'))
      					.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
                          return message.channel.send({ embeds: [nplist] })
                    } else {
                        return message.channel.send(`No Extra Mod List`)
            		}
          		}
            })
          })
        })
      })
    } else if (option === 'mod' && option2 ==='reset') {
          const nodata = new MessageEmbed()
          .setColor('2f3136')
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setDescription(`Please run the extra mod command again because earlier database was not seted up.`);

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

        if (!message.guild.ownerId.includes(message.author.id) && !exowner.includes(message.author.id) && !exadmin.includes(message.author.id) && !ownerIDS.includes(message.author.id)) {
          return message.channel.send({ embeds: [rajaa] });
        }
        await client.db11.get(`${message.guild.id}_em`).then(async (data) => {
          if (!data) {
            await client.db11.set(`${message.guild.id}_em`, { extramodlist: [] } );
            return message.channel.send({ embeds: [nodata] });
          } else {
            const users = data.extramodlist;
            if (users.length !== 0) {
            await client.db11.set(`${message.guild.id}_em`, { extramodlist: [] });
            return message.channel.send(`Reseted Extra Mod List`);
            } else {
              return message.channel.send(`No one is in Extra Mod List`)
            	}
            }
          })
        })
      })
    }
  }
}