const Discord = require('discord.js');
const config = require('../../../config.json');

module.exports = async(client, member) => {
    let channel = client.channels.cache.get(config.CHANNELS.WELCOME_LEAVE);
    let guild = client.guilds.cache.get(config.BOT_SETTINGS.GUILD_ID);

    const message_embed = new Discord.MessageEmbed()
        .setTitle(`Join [${guild.members.cache.filter(member => !member.user.bot).size}]`)
        .setThumbnail(member.user.avatarURL())
        .setDescription(`Welcome <@${member.user.id}> to ${guild.name}! Gain access to the discord by reacting to the message in <#${config.CHANNELS.VERIFICATION}>`)
        .setFooter(config.BOT_SETTINGS.EMBED_AUTHOR)
        .setColor(config.BOT_SETTINGS.EMBED_COLORS.MAIN);
    return channel.send(message_embed);
}