const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
const Settings = require('../../settings.js');

module.exports = {
  name: 'help',
  aliases: ['h'],
  run: async (client, message, args) => {
    let prefix = await client.db8.get(`${message.guild.id}_prefix`);
    if (!prefix) prefix = Settings.bot.info.prefix;
    arypton = await client.users.fetch(`560115112078475266`).catch(console.error); //arypton
    rishi = await client.users.fetch(`864165006668726313`).catch(console.error); //arypton

    // Check if arypton and rishi are defined before accessing their 'name' property
    const aryptonName = arypton ? arypton.username : 'UnknownUser1';
    const rishiName = rishi ? rishi.username : 'UnknownUser2';

    const embed1 = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`~ Prefix for this server is ${prefix}
~ Click on menu to access commands
~ Support Server: [Rapid HQ](${Settings.bot.credits.supportServer})`)
      .addField('__Main Modules__', `<:purple_arrow:1082692693479673936>    Antinuke
      <:purple_arrow:1082692693479673936> Moderation
      <:purple_arrow:1082692693479673936> Automod
      <:purple_arrow:1082692693479673936> Custom Role
      <:purple_arrow:1082692693479673936> Ticket
      <:purple_arrow:1082692693479673936> Giveaway
      <:purple_arrow:1082692693479673936> Tag System
      <:purple_arrow:1082692693479673936> Verification
      <:purple_arrow:1082692693479673936> Vanity Roles
      <:purple_arrow:1082692693479673936> Invc`, true)
      .addField('__Extra Modules__', `<:purple_arrow:1082692693479673936> Image
      <:purple_arrow:1082692693479673936> Information
      <:purple_arrow:1082692693479673936> Report
      <:purple_arrow:1082692693479673936> Owner
      <:purple_arrow:1082692693479673936> Games
      <:purple_arrow:1082692693479673936> Nsfw
      <:purple_arrow:1082692693479673936> Fun
      <:purple_arrow:1082692693479673936> Voice
      <:purple_arrow:1082692693479673936> Utility`, true)
      .addField('__Links__', `・Invite Rapid From [Here](${Settings.bot.credits.supportServer}) if you need help\n・Privacy Policy of [Rapid](https://github.com/TanjiroSan/Rapid-Privacy-Policy.git)`, false)
      .setImage(`https://media.discordapp.net/attachments/1069907374950850622/1086963316649361438/standard_5.gif`)
      //.setFooter(`Made by ${aryptonName} and ${rishiName} with 💞`, `${client.guilds.cache.get(`968742392507293756`) ({ dynamic: true })}`);
    const embed2 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<a:security:1055831548101939331> Antinuke Commands`, `\`antinuke\`, \`antinuke <event>\`, \`antinuke guide\`, \`antinuke reset\`, \`antinuke features\`, \`antinuke whitelist <user>\`, \`antinuke whitelist role <role>\`, \`antinuke show\`, \`antinuke whitelist reset\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed3 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:ET_boom:1022870815227777044> Moderation Commands`, `\`clear bots\`, \`clear humans\`, \`clear embeds\`, \`clear files\`, \`clear mentions\`, \`clear pins\`, \`ban <user>\`, \`unban <user>\`, \`kick <user>\`, \`nick <user>\`, \`hide <channel>\`, \`unhide <channel>\`, \`lock <channel>\`, \`unlock <channel>\`, \`nuke\`, \`purge\`, \`timeout <user>\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed4 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:automod:1055832658942378044> Automod Commands`, `\`antilink enable\`, \`antilink disable\`, \`antilink config\`, \`antieveryone enable\`, \`antieveryone disable\`, \`antieveryone config\`, \`antiping enable\`, \`antiping disable\`, \`antiping config\``)
      //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed5 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:emoji2:1047037776933163038> Custom Role Commands`, `\`setup\`, \`setup config\`, \`owner <user>\`, \`coowner <user>\`, \`headadmin <user>\`, \`admin <user>\`, \`girladmin <user>\`, \`headmod <user>\`, \`mod <user>\`, \`girlmod <user>\`, \`staff <user>\`, \`official <user>\`, \`friend <user>\`, \`guest <user>\`, \`girl <user>\`, \`vip <user>\`, \`rowner <user>\`, \`rcoowner <user>\`, \`rheadadmin <user>\`, \`radmin <user>\`, \`rgirladmin <user>\`, \`rheadmod <user>\`, \`rmod <user>\`, \`rgirlmod <user>\`, \`rstaff <user>\`, \`rofficial <user>\`, \`rfriend <user>\`, \`rguest <user>\`, \`rgirl <user>\`, \`rvip <user>\``)
      //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed6 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:ray_ticket:1067391528311459840> Ticket Commands`, `\`ticket\`, \`ticket send panel\`, \`ticket set channel <channel>\`, \`ticket set staff <role>\``)
      //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed7 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:icons_tada:1050760987839565854> Giveaway Commands`, `\`gstart\`, \`gend\`, \`gedit\`, \`glist\`, \`greroll\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed8 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:rapid_tag:1098162621217247243> Tag System Commands`, `\`set guide\`, \`set tag <tag>\`, \`set stag <stag>\`, \`set config\`, \`set reset\``)
    //  .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed9 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:ET_mod:1022869727145639946> Verification Commands`, `\`verification config\`, \`verification enable\`, \`verification disable\`, \`verification set role\`, \`verification set channel\`, \`verification send panel\`, \`verification reset\``)
      //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed10 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:icons_discordhypesquard:1046708051295612978> Vanity Commands`, `\`vanity\`, \`vanity set vanity <vanity>\`, \`vanity set channel <channel>\`, \`vanity set role <role>\`, \`vanity config\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed11 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:jk_mic:1050775463821332560> Invc Commands`, `\`invc\`, \`invc config\`, \`invc set role <role>\`, \`invc enable\`, \`invc disable\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed12 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:nsfw:1050775462860824686> Image Commands`, `\`grave <user>\`, \`heaven <user>\`, \`bear\`, \`cat\`, \`dog\`, \`hug\`, \`panda\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed13 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:ET_info:1022870207745757245> Information Commands`, `\`code\`, \`help\`, \`info\`, \`invite\`, \`ping\`, \`privacy\`, \`stats\`, \`uptime\`, \`vote\``)
      //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed14 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:ET_bug:1022870703718027326> Report Commands`, `\`repoty\`, \`suggest\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed15 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:rapid_raja:1098161628693925958> Owner Commands`, `\`extra guide\`, \`extra owner add <user>\`, \`extra admin add <user>\`, \`extra mod add <user>\`, \`extra owner remove <user>\`, \`extra admin remove <user>\`, \`extra mod remove <user>\`, \`extra owner show\`, \`extra admin show\`, \`extra mod show\`, \`extra reset\``)
      //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed16 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:emoji_13:1047038076326785074> Games Commands`, `\`connect4 <user>\`, \`hack <user>\`, \`nitro\`, \`snake\`, \`tictactoe <user>\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed17 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:malware_nonSFW:1055832664378179664> Nsfw Commands`, `\`4k\`, \`pussy\`, \`nitro\`, \`ass\`, \`blowjob\` \`boobs\`, \`porngif\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed18 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:emoji_2:1047037776933163038> Fun Commands`, `\`roast <user>\`, \`hack <user>\`, \`howgay <user>\`, \`kill <user>\`, \`motivate <user>\`, \`respect <user>\``)
     //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed19 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:voice:1050775464945397780> Voice Commands`, `\`voice\`, \`voice muteall\`, \`voice unmuteall\`, \`voice deafenall\`, \`voice undeafenall\`, \`voice mute <user>\`, \`voice unmute <user>\`, \`voice deafen <user>\`, \`voice undeafen <user>\``)
     // .setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);

    const embed20 = new MessageEmbed()
      .setColor('#2f3136')
      .addField(`<:emoji_15:1047038141204287529> Utility Commands`, `\`avatar <user>\`, \`firstmsg\`, \`serverinfo\`, \`userinfo <user>\`, \`channelinfo <channel>\`, \`badge <user>\`, \`membercount\`, \`boostcount\`, \`rolecount\`, \`channelcount\`, \`emojicount\``)
      //.setFooter(`Made by ${client.guilds.cache.get(`968742392507293756`).name} with 💞`, `${client.guilds.cache.get(`968742392507293756`).iconURL({ dynamic: true })}`);
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Vote Me")
        .setStyle("LINK")
        .setURL(`https://top.gg/bot/${client.user.id}/vote`),
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    )
    
    const menuOptions = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('helpOption')
        .setPlaceholder('Choose something...')
        .addOptions([
          {
            label: 'Home',
            value: 'h1',
            emoji: "1082692693479673936",
            description: 'See Home Page'
          },
          {
            label: 'Antinuke',
            value: 'h2',
            emoji: "1082692693479673936",
            description: 'See the antinuke Commands'
          },
          {
            label: 'Moderation',
            value: 'h3',
            emoji: "1082692693479673936",
            description: 'See the Moderation Commands'
          },
          {
            label: 'Automod',
            value: 'h4',
            emoji: "1082692693479673936",
            description: 'See the Automod Commands'
          },
          {
            label: 'Custom Roles',
            value: 'h5',
            emoji: "1082692693479673936",
            description: 'See the Custom Roles Commands'
          },
          {
            label: 'Ticket',
            value: 'h6',
            emoji: "1082692693479673936",
            description: 'See the Ticket Commands'
          },
          {
            label: 'Tag System',
            value: 'h7',
            emoji: "1082692693479673936",
            description: 'See the Tag System Commands'
          },
          {
            label: 'Giveaway',
            value: 'h8',
            emoji: "1082692693479673936",
            description: 'See the Giveaway Commands'
          },
          {
            label: 'Verification',
            value: 'h9',
            emoji: "1082692693479673936",
            description: 'See the Verification Commands'
          },
          {
            label: 'Vanity',
            value: 'h10',
            emoji: "1082692693479673936",
            description: 'See the Vanity Commands'
          },
          {
            label: 'Invc',
            value: 'h11',
            emoji: "1082692693479673936",
            description: 'See the Invc Commands'
          },
          {
            label: 'Image',
            value: 'h12',
            emoji: "1082692693479673936",
            description: 'See the Image Commands'
          },
          {
            label: 'Information',
            value: 'h13',
            emoji: "1082692693479673936",
            description: 'See the Information Commands'
          },
          {
            label: 'Report',
            value: 'h14',
            emoji: "1082692693479673936",
            description: 'See the Report Commands'
          },
          {
            label: 'Owner',
            value: 'h15',
            emoji: "1082692693479673936",
            description: 'See the Owner Commands'
          },
          {
            label: 'Games',
            value: 'h16',
            emoji: "1082692693479673936",
            description: 'See the Game Commands'
          },
          {
            label: 'Nsfw',
            value: 'h17',
            emoji: "1082692693479673936",
            description: 'See the Nsfw Commands'
          },
          {
            label: 'Fun',
            value: 'h18',
            emoji: "1082692693479673936",
            description: 'See the Fun Commands'
          },
          {
            label: 'Voice',
            value: 'h19',
            emoji: "1082692693479673936",
            description: 'See the Voice Commands'
          },
          {
            label: 'Utility',
            value: 'h20',
            emoji: "1082692693479673936",
            description: 'See the Utility Commands'
          },
        ])
    )
    
    const menuOptions2 = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId('helpOption2')
        .setPlaceholder('Choose something...')
        .addOptions([
          {
            label: 'Home',
            value: 'h31',
            emoji: "1082692693479673936",
            description: 'See Home Page'
          },
        ])
        .setDisabled(true)
    )
      
    const pag = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1082692693479673936`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`)
        );
      
      const pag2 = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`logl1`).setLabel(`≪`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`logl2`).setLabel(`Back`).setDisabled(true),
            new MessageButton().setStyle(`DANGER`).setCustomId(`logl3`).setEmoji(`1082692693479673936`).setDisabled(true),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lgol4`).setLabel(`Next`).setDisabled(true),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lgol5`).setLabel(`≫`).setDisabled(true)
        );

    let msg = await message.channel.send({embeds : [embed1] , components : [pag, menuOptions, button]});
        let page = 0;
    
        let embeds = [];
    
    embeds.push(embed1);
    embeds.push(embed2);
    embeds.push(embed3);
    embeds.push(embed4);
    embeds.push(embed5);
    embeds.push(embed6);
    embeds.push(embed7);
    embeds.push(embed8);
    embeds.push(embed9);
    embeds.push(embed10);
    embeds.push(embed11);
    embeds.push(embed12);
    embeds.push(embed13);
    embeds.push(embed14);
    embeds.push(embed15);
    embeds.push(embed16);
    embeds.push(embed17);
    embeds.push(embed18);
    embeds.push(embed19);
    embeds.push(embed20);
    
    const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<:purple_arrow:1082692693479673936> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 200000,
            idle : 300000/2
        });

        collector.on('collect', async(interaction) => {
            if(interaction.isSelectMenu()) {
                for(const value of interaction.values) {
                    if (value === `h1`) {
                      return interaction.update({embeds : [embed1]});
                    }
                    if (value === `h2`) {
                      return interaction.update({embeds : [embed2]});
                    }
                    if (value === `h3`) {
                      return interaction.update({embeds : [embed3]});
                    }
                    if (value === `h4`) {
                      return interaction.update({embeds : [embed4]});
                    }
                    if (value === `h5`) {
                      return interaction.update({embeds : [embed5]});
                    }
                    if (value === `h6`) {
                      return interaction.update({embeds : [embed6]});
                    }
                    if (value === `h7`) {
                      return interaction.update({embeds : [embed7]});
                    }
                    if (value === `h8`) {
                      return interaction.update({embeds : [embed8]});
                    }
                    if (value === `h9`) {
                      return interaction.update({embeds : [embed9]});
                    }
                    if (value === `h10`) {
                      return interaction.update({embeds : [embed10]});
                    }
                    if (value === `h11`) {
                      return interaction.update({embeds : [embed11]});
                    }
                    if (value === `h12`) {
                      return interaction.update({embeds : [embed12]});
                    }
                  if (value === `h13`) {
                      return interaction.update({embeds : [embed13]});
                    }
                  if (value === `h14`) {
                      return interaction.update({embeds : [embed14]});
                    }
                  if (value === `h15`) {
                      return interaction.update({embeds : [embed15]});
                    }
                  if (value === `h16`) {
                      return interaction.update({embeds : [embed16]});
                    }
                  if (value === `h17`) {
                      return interaction.update({embeds : [embed17]});
                    }
                  if (value === `h18`) {
                      return interaction.update({embeds : [embed18]});
                    }
                  if (value === `h19`) {
                      return interaction.update({embeds : [embed19]});
                    }
                  if (value === `h20`) {
                      return interaction.update({embeds : [embed20]});
                    }
                }
            }
            if(interaction.isButton()) {
                if(interaction.customId === `lol4`) {
                    page = page + 1 < embeds.length ? ++page : 0;
                    return interaction.update({embeds : [embeds[page]]});
                } 
              if (interaction.customId === `lol5`) {
                    return interaction.update({embeds : [embed20]});
                }
              if(interaction.customId === `lol3`) {
                    return msg.delete()
                }
              if(interaction.customId === `lol2`) {
                    page = page > 0 ? --page : embeds.length - 1;
                    return interaction.update({embeds : [embeds[page]]});
                }
              if(interaction.customId === `lol1`) {
                    return interaction.update({embeds : [embed1]})
                }
            }
        });
        collector.on('end', async() => {
            msg.edit({ components : [pag2, menuOptions2, button] })
        });
    }
}
