const client = require('../index.js');

client.on('messageCreate', async (message) => {
  const tag = await client.db12.get(`tag_${message.guild.id}.Tag`);
  const stag = await client.db12.get(`stag_${message.guild.id}.Stag`);

if (tag) {
  if (message.content === 'tag') {
    return message.channel.send({ content: `${tag}` });
  }
  if (message.content === 'Tag') {
    return message.channel.send({ content: `${tag}` });
  }
}
    if (stag) {
  if (message.content === 'stag') {
    return message.channel.send({ content: `${stag}` });
  	}
  if (message.content === 'Stag') {
    return message.channel.send({ content: `${stag}` });
  	}
  }
})