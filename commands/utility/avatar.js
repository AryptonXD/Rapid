const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["av", "pfp", "pic"],
  usage: "[user mention]",
  run: async (client, message, args) => {
    const user = client.users.cache.get(args[1]) || message.mentions.users.first() || message.author;
    const user2 = message.guild.members.cache.get(`${user.id}`);
    arypton = await client.users.fetch(`560115112078475266`); //arypton

    const guide = new MessageEmbed()
    .setColor("#2f3136")
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .addField(`Avatar`, `\`?avatar server [server=<current server>]\`\nShows avatar of the server.\n\n\`?avatar user [user=<you>]\`\nShows avatar of a user.`)
    .setFooter(`Made by ${arypton.username} with `, `${arypton.displayAvatarURL({ dynamic: true })}`);

    const guide2 = new MessageEmbed()
      .setColor("2f3136")
      .setAuthor(user.tag, user.displayAvatarURL())
      .setDescription(`Choose your avatar style from the buttons below.`)
      .setFooter(`Made by ${arypton.username} with 💞`, `${arypton.displayAvatarURL({ dynamic: true })}`);
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
      .setStyle(`SECONDARY`)
      .setCustomId(`lol1`)
      .setLabel(`Global Avatar`),
      new MessageButton()
      .setStyle(`SECONDARY`)
      .setCustomId(`lol2`)
      .setLabel(`Server Avatar`),

    )

    let av = new MessageEmbed()
      .setColor("2f3136")
      .setAuthor(user.username)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 512 }));

    let av2 = new MessageEmbed()
      .setColor("2f3136")
      .setAuthor(user.username)
      .setImage(user2.avatarURL({ dynamic: true, size: 512 }));
    
    let serverav = new MessageEmbed()
    .setColor("2f3136")
    .setAuthor(message.guild.name)
    .setImage(message.guild.iconURL({ dynamic: true, size: 1024 }));

    const png = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("PNG")
        .setStyle("LINK")
        .setURL(`${user.displayAvatarURL({ format: "png" })}`),

      new MessageButton()
        .setLabel("JPG")
        .setStyle("LINK")
        .setURL(`${user.displayAvatarURL({ format: "jpg" })}`),

      new MessageButton()
        .setLabel("WEBP")
        .setStyle("LINK")
        .setURL(`${user.displayAvatarURL({ format: "webp" })}`),

      new MessageButton()
        .setLabel("DYNAMIC")
        .setStyle("LINK")
        .setURL(`${user.displayAvatarURL({ dynamic: true })}`)
    )

    const png2 = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("PNG")
        .setStyle("LINK")
        .setURL(`${user2.avatarURL({ format: "png" })}`),

      new MessageButton()
        .setLabel("JPG")
        .setStyle("LINK")
        .setURL(`${user2.avatarURL({ format: "jpg" })}`),

      new MessageButton()
        .setLabel("WEBP")
        .setStyle("LINK")
        .setURL(`${user2.avatarURL({ format: "webp" })}`),

      new MessageButton()
        .setLabel("DYNAMIC")
        .setStyle("LINK")
        .setURL(`${user2.avatarURL({ dynamic: true })}`)
    )

    const serverpng = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("PNG")
        .setStyle("LINK")
        .setURL(`${message.guild.iconURL({ format: "png" })}`),

      new MessageButton()
        .setLabel("JPG")
        .setStyle("LINK")
        .setURL(`${message.guild.iconURL({ format: "jpg" })}`),

      new MessageButton()
        .setLabel("WEBP")
        .setStyle("LINK")
        .setURL(`${message.guild.iconURL({ format: "webp" })}`),

      new MessageButton()
        .setLabel("DYNAMIC")
        .setStyle("LINK")
        .setURL(`${message.guild.iconURL({ dynamic: true })}`)
    )

    if (!args[0]) {
        return message.channel.send({ embeds: [guide]});
      } else if (args[0] === `user`) {
        let msg = await message.channel.send({ embeds: [guide2], components: [button] });
      
      const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<a:ET_cross:1003992348205777036> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 20000,
            idle : 20000/2
        });

        collector.on('collect', async (interaction) => {
          if(interaction.isButton()) {
                if(interaction.customId === `lol1`) {
                    return interaction.update({embeds : [av], components: [png]});
                } 
              if (interaction.customId === `lol2`) {
                if (!user2.avatarURL({ dynamic: true, size: 512 })) {
                  return interaction.update({embeds : [av], components: [png]})
                }
                    return interaction.update({embeds : [av2], components: [png2]});
                }
            }
        });
        collector.on('end', async () => {
            msg.edit({ content : `<a:security:1055831548101939331> | Query Got Timed Out!`})
        });
      } else if (args[0] === 'server') {
        return message.channel.send({ embeds: [serverav], components: [serverpng] });
      }
    }
  }