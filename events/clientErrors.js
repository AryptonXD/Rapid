const client = require('../index');
const { WebhookClient } = require('discord.js');
const web1 = new WebhookClient({ url: 'https://discord.com/api/webhooks/1069900964867354624/JNvJDAHTzxaUCR4rRsGuVliCq2EDfKJYqx2h3TwKZ2qMDlAfhzSpVrpHq6RbVzXYqFST' });
const web2 = new WebhookClient({ url: 'https://discord.com/api/webhooks/1069904448408793199/BU_tweYcD2RRSBl-XBk6pDkW3X6ukYs-HDGHC0ZZhZDFpLQyNTvvgSzcorTpsial0gUD' });
const web3 = new WebhookClient({ url: 'https://discord.com/api/webhooks/1069904529883136062/4szlJMFK1X8Zvg_dE_I2ToYmH1CXbzUwKhhGMzk8eiY9vIOhDC0tf84n8CPsF__sgLLD' });

client.on('rateLimit', (info) => {
  web1.send(`${info}\n[!]; The bot is rate limited..`)
});

// #1
process.on('unhandledRejection', async (er) => {
  web2.send(`\`\`\`js\n${er.stack}\`\`\``)
});

// #2
process.on("uncaughtException", async (err) => {
  web3.send(`\`\`\`js\n${err.stack}\`\`\``)
});