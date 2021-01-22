const fs = require('fs').promises;
const config = require('../../config.json');

module.exports = {
    init: async(client) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        channel.send(`**[INIT - ${time}]** Logging initialized`);
        console.log(`\e[32m[INIT - ${time}] \e[39m${message}`);
    },
    info: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\e[32m[INFO - ${time}] \e[39m${message}`);
        channel.send(`**[INFO - ${time}]:** ${message}`);
    },
    error: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\e[31m[ERROR - ${time}] \e[39m${message}`);
        channel.send(`**[ERROR - ${time}]:** ${message}`);
    },
    debug: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\e[33m[DEBUG - ${time}] \e[39m${message}`);
        channel.send(`**[DEBUG - ${time}]:** ${message}`);
    },
    warn: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\e[33m[WARN - ${time}] \e[39m${message}`);
        channel.send(`**[WARN - ${time}]:** ${message}`);
    },
    start: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\e[32m[START - ${time}] \e[39m${message}`);
        channel.send(`**[START - ${time}]:** ${message}`);
    }
};