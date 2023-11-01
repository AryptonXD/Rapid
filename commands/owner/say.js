const { ownerIDs } = require('../../owner.json');

module.exports = {
  name: "say",
  description: "Make the bot say your message",
  run: async (client, message, args) => {
    
      if(!ownerIDs.includes(message.author.id)) {
        return
      }
         if (ownerIDs.includes(message.author.id)) {
    if (!args.join(" ")) {
      message.channel.send("Hey developer add some text for me to repeat");
    }
    message.channel.send(args.join(" "), {
      allowedMentions: { parse: ["users"] },
    });
    message.delete();
    }
  }
};