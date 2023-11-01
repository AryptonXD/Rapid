const client = require('../index.js');
const { WebhookClient }= require('discord.js');
const web1 = new WebhookClient({ url: `https://discord.com/api/webhooks/1069900496418123826/Xzt5IwWU7hVtLfckRPRHUNAnN63W0ma2c-Qjuxm040h91-Xo2hQMv1ki8Il75pYsG1IF` });

client.on('shardReady', async (shard) => {
  console.log(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${shard} Ready || <==> ||`)
});

client.on('shardDisconnect', async (shard) => {
  web1.send(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${shard} Disconnected || <==> ||`)
});

client.on('shardReconnecting', async (shard) => {
  web1.send(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${shard} Reconnecting || <==> ||`)
});

client.on('shardResume', async (shard) => {
  web1.send(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${shard} Resumed || <==> ||`)
});
  
client.on('shardError', async (shard) => {
  web1.send(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${shard} Errored || <==> ||`)
});