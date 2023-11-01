const client = require('../index.js');

client.on('interactionCreate', (interaction) => {
  if (!interaction.isButton()) return;
  const User = interaction.member
  const verifyguild = client.db10.get(`verificationguild_${interaction.guild.id}.Guild`);
  const verifyenable = client.db10.get(`verification_${interaction.guild.id}`);
  const verifychannel = client.db10.get(`verificationchannel_${interaction.guild.id}.Channel`)
  const verifyrole = client.db10.get(`verificationrole_${interaction.guild.id}.Role`)
  const role = interaction.guild.roles.cache.get(verifyrole)
  
  if (!interaction.isButton()) return;
  if (!verifyenable) return;
  if (!verifychannel) return;
  if (!verifyrole) return;
  if (interaction.guild.id !== verifyguild) return;


  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  if (interaction.customId === `verify`) {
    if (!User.roles.cache.has(verifyrole)) {
    interaction.reply({ content: 'Successfully added role!', ephemeral: true })
  	User.roles.add(verifyrole)
  } else {
    interaction.reply({ content: 'Successfully removed role!', ephemeral: true })
  	User.roles.remove(verifyrole)
  	}
  }
});