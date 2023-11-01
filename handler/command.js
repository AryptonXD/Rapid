const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const client = require('..');
let table = new ascii("Rapid Commands");
table.setHeading('Commands', 'Load Status');
var colors = require('colors');

module.exports = (client) => {
  console.log(`

██████╗░░█████╗░██████╗░██╗██████╗░
██╔══██╗██╔══██╗██╔══██╗██║██╔══██╗
██████╔╝███████║██████╔╝██║██║░░██║
██╔══██╗██╔══██║██╔═══╝░██║██║░░██║
██║░░██║██║░░██║██║░░░░░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═════╝░                                               
`.brightRed)
    readdirSync('./commands/').forEach(dir => {
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
            if(pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅ Success')
            }else {
                table.addRow(file, '❌ Error')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString().rainbow);

    readdirSync('./events/').forEach((file) => {
        const events = readdirSync('./events/').filter((file) =>
        file.endsWith('.js')
        );
        for (let file of events) {
            let pull = require(`../events/${file}`);
            if(pull.name) {
                client.events.set(pull.name, pull);
            }
        }
        console.log(`${file} Events load Successfully!`.bgCyan)
    })
}