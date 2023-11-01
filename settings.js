const prefix = process.env.prefix || '?'
const status = `${prefix}help`;


module.exports = {
  bot: {
    info: {
      prefix: process.env.prefix || '?',
      token: process.env.token,
      invLink: 'https://discord.com/api/oauth2/authorize?client_id=1006523966900404244&permissions=8&scope=bot%20applications.commands',
    },
    presence: {
      name: process.env.statusText || status,
      type: 'LISTENING',
      url: 'https://twitch.tv/pewdiepie'
    },
    credits: {
      developerId: '961159736479346689',
      developer: 'Arypton_xD',
      supportServer: 'https://discord.gg/hammertech'
    },
  }
}
