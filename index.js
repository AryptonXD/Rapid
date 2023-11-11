const { Client, Collection } = require('discord.js');
const { bot } = require('./settings.js');
const config = require('./config.json');
const fs = require('fs')
const { readdirSync } = require("fs");
const { joinVoiceChannel } = require('@discordjs/voice');
const { GiveawaysManager } = require('discord-giveaways');
const { QuickDB } = require('quick.db');
const token = config.token;

const client = new Client({
    shardCount: 2, 
    intents: 32767
});

module.exports = client;

client.db = new QuickDB({ filePath: './database/antinuke/json.sqlite' });
client.db1 = new QuickDB({ filePath: './database/automod/json.sqlite' });
client.db2 = new QuickDB({ filePath: './database/badges/json.sqlite' });
client.db3 = new QuickDB({ filePath: './database/customroles/json.sqlite' });
client.db4 = new QuickDB({ filePath: './database/noprefix/json.sqlite' });
client.db5 = new QuickDB({ filePath: './database/ticket/json.sqlite' });
client.db6 = new QuickDB({ filePath: './database/vanityroles/json.sqlite' });
client.db7 = new QuickDB({ filePath: './database/voicerole/json.sqlite' });
client.db8 = new QuickDB({ filePath: './database/Guild/json.sqlite' });
client.db9 = new QuickDB({ filePath: './database/ignore/json.sqlite' });
client.db10 = new QuickDB({ filePath: './database/verification/json.sqlite' });
client.db11 = new QuickDB({ filePath: './database/extra/json.sqlite' });
client.db12 = new QuickDB({ filePath: './database/tag/json.sqlite' });

client.on("ready", async () => {
  // await db.set(`uptime`, `${Math.floor(Date.now() / 1000)}`)
  client.user.setPresence({
    activities: [bot.presence],
    status: "dnd",
  })
  console.log(`Made by Arypton_xD`.green)
  console.log(`Logged in as ${client.user.tag}`.cyan)
});

client.on("ready", async (client) => {
  const data = await client.db4.get(`members_np`);
    if (!data) {
      await client.db4.set(`members_np`, { noprefixlist: [] });
  }
});

client.on("ready", async c => {
  setInterval(() => {
    const channelid = "1095539235248934922"
    const channel = client.channels.cache.get(channelid);
    if (!channel) return
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });
    connection;
  }, 1000 * 5);
}); 

client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaway.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#2f3136",
    reaction: "🎉"
  }
});

client.on("messageCreate", async (message) => {
  if (message.content === "Jai Shri Ram") {
    return message.channel.send(`Jai Shri Ram🔥`);
  }
  if (message.content === "Jai Shree Ram") {
    return message.channel.send("Jai Shree Ram🔥")
  }

  if (message.guild.id === "914082896208334888") {
    if (message.content.includes("<@864165006668726313>")) {
      return message.channel.send("Support will be with you Shortly").then((m) => {
        setTimeout(async () => {
          m.delete();
        }, 2000)
      })
    }
    if (message.content.includes("<@560115112078475266>")) {
      return message.channel.send("Support will be with you Shortly").then((m) => {
        setTimeout(async () => {
          m.delete();
        }, 2000)
      })
    }
  }
});

//new collections
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync('./commands');

//load the files
['command', 'slashCommand'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});

client.login(token);
