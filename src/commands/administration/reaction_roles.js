const Discord = require('discord.js');
const config = require('../../../config.json');

module.exports = {
    commands: ['reactionrole', 'rrole'],
    expected_args: '',
    min_args: 0,
    max_args: 0,
    permissions: [],
    required_roles: ["Owner", "Developer", "Administrator"],
    callback(client, message, arguments, raw_text) {
        
    }
}