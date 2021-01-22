const Discord = require('discord.js');
const config = require('../../../config.json');

module.exports = async(client, member) => {
    let channel = client.channels.cache.get(config.CHANNELS.WELCOME_LEAVE);
    let guild = client.guilds.cache.get(config.BOT_SETTINGS.GUILD_ID);

    const message_embed = new Discord.MessageEmbed()
        .setTitle(`Leave [${guild.members.cache.filter(member => !member.user.bot).size}]`)
        .setThumbnail(member.user.avatarURL())
        .setDescription(`Goodbye ${member.user.tag}! Hope to see you again in the future :(`)
        .setFooter(config.BOT_SETTINGS.EMBED_AUTHOR)
        .setColor(config.BOT_SETTINGS.EMBED_COLORS.MAIN);
    return channel.send(message_embed);
}