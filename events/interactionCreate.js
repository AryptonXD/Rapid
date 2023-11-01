const { Client, Collection } = require('discord.js');
const client = require('../index');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

function getChannelName(user) {
 const user1 = `${user.username}#${user.discriminator}`

  let value = user1.replace("#", "-").toLowerCase();
  
  value = value.replace(/ /g, "-");
  return value;
}

function hasTicket(g, interaction) {
  let channelName = getChannelName(interaction.user);
  let ticket = interaction.guild.channels.cache.find((ch) => ch.name == channelName);
  if (ticket) {
    interaction.editReply({ content: `You already have a ticket. <#${ticket.id}>`})
    return true;
  } else {
    return false;
  }
}

client.on('interactionCreate', async interaction => {
  
	if (!interaction.isCommand()) return;
	const slashCommand = client.slashCommands.get(interaction.commandName);
	if (!slashCommand) return;
	try {
		await slashCommand.execute(client, interaction);
	} catch (error) {
		if (error) console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on("interactionCreate", async (interaction) => {
if(!interaction.isButton()) return;
  
if (interaction.customId == `ss`) {
  await interaction.reply({ content: `Your ticket is being processed. Please wait `, ephemeral: true})
    if (hasTicket(interaction.guild, interaction)) {
      return;
    }
 
   interaction.guild.channels.create(getChannelName(interaction.user), {
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
          {
            id: (await client.db5.get(`Staff_${interaction.guild.id}.Admin`)),
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`,`MANAGE_MESSAGES`],
          },
          {
            id: interaction.member.id,
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`],
          },
        ], parent: (await client.db5.get(`Channels_${interaction.guild.id}.Cat`)), position: 50, topic: `${interaction.member.id}`, reason: "Arypton OP"
      }).then(async channel => {
        channel = channel
        
      
        await interaction.editReply({ content: `
  Your ticket has been successfully opened <#${channel.id}>`, ephemeral: true})
        await client.db5.set(`${interaction.user.id}_ticket_${channel.id}_${interaction.guild.id}`, true);
     
    const ADMIN = await client.db5.get(`Staff_${interaction.guild.id}.Admin`)
     
          const embedticket = new Discord.MessageEmbed()
          .setTimestamp()
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setColor('2f3136')
          .setDescription(`Support will be with you shortly.
To close this ticket click the <:x_:1046451277221085255> button.`)
        
        let bu1tton = new Discord.MessageButton()
          .setStyle(`SECONDARY`)
          .setLabel('Close Ticket')
          .setCustomId(`cl`)
          .setEmoji(`1046451277221085255`)
          
        channel.send({ content: `Welcome <@!${interaction.member.user.id}>\n<@&${ADMIN}>`,  embeds: [embedticket], components: [new Discord.MessageActionRow().addComponents(bu1tton)] }).then(msg => {
          msg.pin()
        })
        })
}

if (interaction.customId == `cl`) {

  const r1 = new Discord.MessageActionRow().addComponents(
        new Discord.MessageButton()
          .setStyle(`SECONDARY`)
          .setLabel('Delete Ticket')
          .setCustomId(`dl`)
          .setEmoji(`1022870371541712947`)
    )
            
        const embedticket2 = new Discord.MessageEmbed()
          .setTimestamp()
          .setAuthor(client.user.username, client.user.displayAvatarURL())
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setColor('2f3136')
          .setDescription(`To Delete this ticket click the <:ET_delete:1022870371541712947> button.`)
  
  interaction.update({ content: `Closed`, embeds: [embedticket2], components: [r1] })

   let ch = interaction.channel
            if (!ch) return;
            setTimeout(async () => {
              try {

               const member = client.users.cache.get(ch.topic)
               
                ch.permissionOverwrites.edit(member.id,{
                   VIEW_CHANNEL: false
                   }
                )
                
                ch.setName(`closed-ticket`)
                
              } catch (e) {
                interaction.reply({ content: `An error occurred, please try again!`, ephemeral: true})
                console.log(e)
                
              }
            }, 2000)
}

if (interaction.customId == `dl`) {
  const closemebed = new Discord.MessageEmbed()
                .setDescription(`Ticket will be deleted in 5 seconds`)
                .setColor(`2f3136`)

              interaction.reply({ embeds: [closemebed] })
        await client.db5.delete(`ticket_${interaction.channel.id}_${interaction.guild.id}`, true);

                 setTimeout(async () => {
              try {
                    interaction.channel.delete()
              } catch (e) {
                interaction.editReply({ content: `An error occurred, please try again!`, ephemeral: true})
                console.log(e)
                
              }
                  }, 5000)
}

});