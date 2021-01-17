const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');
const path = require('path');
const fs = require('fs');
client.config = config;

client.login(config.BOT_SETTINGS.BOT_TOKEN);

var log = require('loglevel');
log.warn('a');
log.debug('b');
log.info('c');
log.error('d');
log.trace('e');
log.log('f');

(async function register_commands(directory = 'commands') {
    const commands_handler = require(`./commands/handler/command_handler.js`);
    const excluded_directories = ['handler'];
    const files = fs.readdirSync(path.join(__dirname, directory));
    for(const file of files) {
        const file_stat = fs.lstatSync(path.join(__dirname, directory, file));
        if(file_stat.isDirectory()) {
            if(!excluded_directories.includes(file)) {
                register_commands(path.join(directory));
                } else {
                    return;
                }
            } else if (!file_stat.isDirectory()) {
                const option = require(path.join(__dirname, directory, file));
                commands_handler(client, option);
            }
        }
})();

(async function register_events(directory = 'events') {
    let files = await fs.readdirSync(path.join(__dirname, directory));
    for(let file of files) {
        let stat = await fs.lstatSync(path.join(__dirname, directory, file));
        if(stat.isDirectory()) {
            register_events(path.join(directory, file));
            console.log(`Directory found and registering events: ${path.join(directory, file)}`);
        } else if(file.endsWith(".js")) {
            let event_name = file.substring(0, file.indexOf(".js"));
            let event_module = require(path.join(__dirname, directory, file));
            client.on(event_name, event_module.bind(null, client));
            console.log(`Event Loaded ${event_name}`);
        }
    }
})();