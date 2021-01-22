const fs = require('fs').promises;
const config = require('../../config.json');

module.exports = {
    init: async(client) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        channel.send(`**[INIT - ${time}]** Logging initialized`);
        console.log(`\x1b[32m[INIT - ${time}] \x1b[39mLogging initialized`);
    },
    info: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\x1b[32m[INFO - ${time}] \x1b[39m${message}`);
        channel.send(`**[INFO - ${time}]:** ${message}`);
    },
    error: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\x1b[31m[ERROR - ${time}] \x1b[39m${message}`);
        channel.send(`**[ERROR - ${time}]:** ${message}`);
    },
    debug: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\x1b[33m[DEBUG - ${time}] \x1b[39m${message}`);
        channel.send(`**[DEBUG - ${time}]:** ${message}`);
    },
    warn: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\x1b[33m[WARN - ${time}] \x1b[39m${message}`);
        channel.send(`**[WARN - ${time}]:** ${message}`);
    },
    start: async(client, message) => {
        let channel = client.channels.cache.get(config.CHANNELS.ELESTRA_BOT_LOGGING);
        let time = new Date().toUTCString();
        console.log(`\x1b[32m[START - ${time}] \x1b[39m${message}`);
        channel.send(`**[START - ${time}]:** ${message}`);
    }
};