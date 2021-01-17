module.exports = async(client) => {
    let guild = client.guilds.cache.get(client.config.BOT_SETTINGS.GUILD_ID);

    console.log(`${client.user.tag} connected! Watching ${guild.memberCount} people in ${guild.name}!`);
}