const { ownerIDs } = require('../../owner.json');

module.exports = {
  name: "dm",
  run: async (client, message, args) => {
        
        if(!ownerIDs.includes(message.author.id)) return;

      let user = client.users.cache.get(args[0]) || message.mentions.members.first();
      if (!user)
        return message.channel.send(
          `You did not mention a user, or you gave an invalid id`
        );
      if (!args.slice(1).join(" "))
        return message.channel.send("You did not specify your message");
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("That user could not be DMed!")) 
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
    message.delete();
    },
  };