const fs = require('fs').promises;
const config = require('../../config.json');

module.exports = {
    init: async(client) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        channel.send(`**[INIT - ${time}]** Logging initialized`);
        console.log(`\033[0;32m[INIT - ${time}] \033[0m${message}`);
    },
    info: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\033[0;32m[INFO - ${time}] \033[0m${message}`);
        channel.send(`**[INFO - ${time}]:** ${message}`);
    },
    error: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\033[0;31m[ERROR - ${time}] \033[0m${message}`);
        channel.send(`**[ERROR - ${time}]:** ${message}`);
    },
    debug: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\033[0;32m[DEBUG - ${time}] \033[0m${message}`);
        channel.send(`**[DEBUG - ${time}]:** ${message}`);
    },
    warn: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\033[0;33m[WARN - ${time}] \033[0m${message}`);
        channel.send(`**[WARN - ${time}]:** ${message}`);
    },
    start: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\033[0;32m[START - ${time}] \033[0m${message}`);
        channel.send(`**[START - ${time}]:** ${message}`);
    }
};