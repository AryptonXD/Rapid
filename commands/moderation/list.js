const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")

module.exports = {
  name: "list",
  run: async (client, message, args) => {
      
    const pag = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1003992348205777036`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`).setDisabled(true)
        );
      
    const pag2 = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`).setDisabled(true),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1003992348205777036`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`).setDisabled(true),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`).setDisabled(true)
        );

      let i0 = 0;
      let i1 = 10;
      let page = 1;
      
    const require = args[0].toLowerCase();
      
    if (require  === "admin" || require == 'admins' || require == 'administration') {
      const administrators = message.guild.members.cache.filter((member) =>
 member.permissions.has('ADMINISTRATOR'))
      
      const embed = new MessageEmbed()
      .setTitle(`Admins in ${message.guild.name} - ${administrators.size}`)
      .setDescription(`${administrators.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(0, 10).join('\n')}`)
      .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(administrators.size / 10)}`)
      .setColor('2f3136')

      let msg = await message.channel.send({embeds : [embed] , components : [pag]});
    
    const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<a:ET_cross:1003992348205777036> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 200000,
            idle : 300000/2
        });

        collector.on('collect', async(interaction) => {
            if(interaction.isButton()) {
                if(interaction.customId === `lol4`) {
          			i0 = i0 + 10;
          			i1 = i1 + 10;
          			page = page + 1;
                    if (i1 > administrators.size + 10) {
                        return;
                    }
                    
                    description = `${administrators.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(i0, i1).join('\n')}`
                    
                    embed
                        .setTitle(`Admins in ${message.guild.name} - ${administrators.size}`)
                    	.setDescription(description)
                        .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(administrators.size / 10)}`);
                    
                    return interaction.update({ embeds: [embed]});
                }
              if(interaction.customId === `lol3`) {
                    return msg.delete()
                }
              if(interaction.customId === `lol2`) {
                  i0 = i0 - 10;
                  i1 = i1 - 10;
                  page = page - 1;
                  
                  if (i0 + 1 < 0) {
                      return;
                  }
                  
                  description = `${administrators.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(i0, i1).join('\n')}`
                }
                	embed
                        .setTitle(`Admins in ${message.guild.name} - ${administrators.size}`)
                    	.setDescription(description)
                        .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(administrators.size / 10)}`);
                
                return interaction.update({ embeds: [embed]})
            }
        });
        collector.on('end', async() => {
            msg.edit({ components : [pag2] })
        });
    }

    if (require === "bot" || require == 'bots') {
      const bots = message.guild.members.cache.filter((member) => member.user.bot)
      if(!bots) return message.reply({embeds: [new MessageEmbed().setColor('2f3136').setDescription(`I guess there is no bots in this server.`)]});
        
        const embed = new MessageEmbed()
      .setTitle(`Bots in ${message.guild.name} - ${bots.size}`)
      .setDescription(`${bots.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(0, 10).join('\n')}`)
      .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(bots.size / 10)}`)
      .setColor('2f3136')

      let msg = await message.channel.send({embeds : [embed] , components : [pag]});
    
    const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<a:ET_cross:1003992348205777036> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 200000,
            idle : 300000/2
        });

        collector.on('collect', async(interaction) => {
            if(interaction.isButton()) {
                if(interaction.customId === `lol4`) {
          			i0 = i0 + 10;
          			i1 = i1 + 10;
          			page = page + 1;
                    if (i1 > bots.size + 10) {
                        return;
                    }
                    
                    description = `${bots.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(i0, i1).join('\n')}`
                    
                    embed
                        .setTitle(`Bots in ${message.guild.name} - ${bots.size}`)
                    	.setDescription(description)
                        .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(bots.size / 10)}`);
                    
                    return interaction.update({ embeds: [embed]});
                }
              if(interaction.customId === `lol3`) {
                    return msg.delete()
                }
              if(interaction.customId === `lol2`) {
                  i0 = i0 - 10;
                  i1 = i1 - 10;
                  page = page - 1;
                  
                  if (i0 + 1 < 0) {
                      return;
                  }
                  
                  description = `${bots.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(i0, i1).join('\n')}`
                }
                	embed
                        .setTitle(`Bots in ${message.guild.name} - ${bots.size}`)
                    	.setDescription(description)
                        .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(bots.size / 10)}`);
                
                return interaction.update({ embeds: [embed]})
            }
        });
        collector.on('end', async() => {
            msg.edit({ components : [pag2] })
        });
    }
      
if (require == 'ban' || require == 'bans') {
      let bots = await message.guild.bans.fetch();
        
        const embed = new MessageEmbed()
      .setTitle(`Bots in ${message.guild.name} - ${bots.size}`)
      .setDescription(`${bots.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(0, 10).join('\n')}`)
      .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(bots.size / 10)}`)
      .setColor('2f3136')

      let msg = await message.channel.send({embeds : [embed] , components : [pag]});
    
    const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<a:ET_cross:1003992348205777036> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 200000,
            idle : 300000/2
        });

        collector.on('collect', async(interaction) => {
            if(interaction.isButton()) {
                if(interaction.customId === `lol4`) {
          			i0 = i0 + 10;
          			i1 = i1 + 10;
          			page = page + 1;
                    if (i1 > bots.size + 10) {
                        return;
                    }
                    
                    description = `${bots.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(i0, i1).join('\n')}`
                    
                    embed
                        .setTitle(`Bots in ${message.guild.name} - ${bots.size}`)
                    	.setDescription(description)
                        .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(bots.size / 10)}`);
                    
                    return interaction.update({ embeds: [embed]});
                }
              if(interaction.customId === `lol3`) {
                    return msg.delete()
                }
              if(interaction.customId === `lol2`) {
                  i0 = i0 - 10;
                  i1 = i1 - 10;
                  page = page - 1;
                  
                  if (i0 + 1 < 0) {
                      return;
                  }
                  
                  description = `${bots.map((us) => us).map((us, i) => `\`[${i + 1}]\` | [${us.user.tag}](https://discord.com/users/${us.user.id}) | [ID: [${us.user.id}](https://discord.com/users/${us.user.id})] `).slice(i0, i1).join('\n')}`
                }
                	embed
                        .setTitle(`Bots in ${message.guild.name} - ${bots.size}`)
                    	.setDescription(description)
                        .setFooter(`${client.user.username} • Page ${page}/${Math.ceil(bots.size / 10)}`);
                
                return interaction.update({ embeds: [embed]})
            }
        });
        collector.on('end', async() => {
            msg.edit({ components : [pag2] })
        });
		}
    }
}