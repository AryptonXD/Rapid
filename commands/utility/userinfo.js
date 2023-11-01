const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "userinfo",
    aliases: ['ui', 'whois'],
    category: 'info',
    description: "To Get Information About A User",
    run: async (client, message, args) => { 
        const permissions = {
            "ADMINISTRATOR": "Administrator",
            "MANAGE_GUILD": "Manage Server",
            "MANAGE_ROLES": "Manage Roles",
            "MANAGE_CHANNELS": "Manage Channels",
            "KICK_MEMBERS": "Kick Members",
            "BAN_MEMBERS": "Ban Members",
            "MANAGE_NICKNAMES": "Manage Nicknames",
            "MANAGE_EMOJIS": "Manage Emojis",
            "MANAGE_WEBHOOKS": "Manage Webhooks",
            "MANAGE_MESSAGES": "Manage Messages",
            "MENTION_EVERYONE": "Mention Everyone"
        }
        const mention = client.users.cache.get(args[0]) || message.mentions.members.first() || message.author;
        const nick = mention.nickname === null ? "None" : mention.nickname;
        const usericon = mention.displayAvatarURL({dynamic: true});
        const mentionPermissions = mention.permissions.toArray() === null ? "None" : mention.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
            else;
        }
        var flags = {
            "DICORD_ACTIVE_DEVELOPER": "<:active_dev:1046262094611357817>",
            "DISCORD_EMPLOYEE": "<:ET_Discord_Staff:1046259314630860850>",
            "DISCORD_PARTNER": "<:ET_Discord_Partner:1046259392665882704>",
            "BUGHUNTER_LEVEL_1": "<:ET_Hunterlvl1:1046259436538302545>",
            "BUGHUNTER_LEVEL_2": "<:ET_Hunterlvl2:1046259474937155635>",
            "HYPESQUAD_EVENTS": "<:ET_Special:1046258143711211561>",
            "HOUSE_BRILLIANCE": "<:ET_HypeSquadBrilliace:1046258011779371039>",
            "HOUSE_BRAVERY": "<:ET_HypeSquadBravery:1046258090493874247>",
            "HOUSE_BALANCE": "<:ET_HypeSquadBalance:1046258121531727903>",
            "EARLY_SUPPORTER": "<:ET_early:1046259645796323358>",
            "TEAM_USER": "<:Support_Team:1046260632711876738>",
            "VERIFIED_BOT": "<:zzRa_verified_bot:1046261649692168262>",
            "EARLY_VERIFIED_DEVELOPER": "<:ET_verified:1046260397440782336>"
        };
        var bot = {
            "true": "Bot",
            "false": "Human"
        };
        const userFlags = message.member.user.flags.toArray();
        const userlol = new MessageEmbed()
        .setAuthor({ name: `${mention.user.username}'s Information`, iconURL: mention.avatarURL()}) 
        .setThumbnail(usericon)
        .addField(`General Information`, `Name: \`\`${mention.user.username}\`\`\nDiscriminator: \`${mention.user.discriminator}\` \nNickname: \`${nick}\``)
        .addField(`Overview`, `Badges: ${userFlags.length ? userFlags.map(flag => flags[flag]).join(' ') : 'None'}\nType: ${bot[mention.user.bot]}`)
        .addField(`Server Relating Information`, `Roles: ${mention._roles[0] ? `<@&${mention._roles.join(">  <@&")}>` : `\`No roles\``}  \nKey Permissions: \`${finalPermissions.join(', ')}\``)
        .addField(`Misc Information`, `Created On: <t:${Math.round(mention.user.createdTimestamp/1000)}:R>\nJoined On: <t:${Math.round(mention.joinedTimestamp/1000)}:R>`)
        .setThumbnail(mention.user.avatarURL())
        .setFooter({ text: `Requested By: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true}) })
        .setTimestamp()
        .setColor('2f3136');
        return message.channel.send({ embeds: [userlol] })
    }
}