const { MessageEmbed } = require('discord.js');
const client = require('../index.js');

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;
  if (message.member.permissions.has("ADMINISTRATOR")) return;
  const antilink2 = await client.db1.get(`${message.guild.id}_antilink`)
  let antilinkregex =
    /((([(https)(http)]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
  if (antilink2 === true) {
  if (antilinkregex.test(message) === true) {
    await message.delete().catch((e) => {});
    let role = await message.guild.roles.cache.find((r) => r.name === "Muted");
    if (!role) {
      role = await message.guild.roles.create({
        name: "Muted",
        permissions: ["VIEW_CHANNEL"],
        mentionable: false,
      });
    }
    await message.member.roles.add(role).catch((e) => {});

    await message.guild.channels.cache.forEach((ch) => {
      ch.permissionOverwrites.edit(role, {
        SEND_MESSAGES: false,
        CONNECT: false,
        SPEAK: false,
      });
    });

    message.channel.send(`${message.author} Muted for sending links`);
  }
}
});