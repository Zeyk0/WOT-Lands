const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    try {
        const m = await message.channel.send("๐Pinging...");
        const embed = new Discord.MessageEmbed()
        .setTitle("Latence de ZeyBot & de l'api", bot.user.avatarURL)
        .setColor("#79d0ff")
        .addField("โณ Latency :", `**\`${m.createdTimestamp - message.createdTimestamp}ms\`**`)
        .addField("๐ API :", `\`${Math.floor(bot.ws.ping)}ms\``)
        .setFooter("ZeyBot | Ping")
        return m.edit(`๐ Pong !`, embed);
    } catch (error) {
        return message.channel.send(`Something went wrong: ${error.message}`);
    }
}

exports.help = {
    name: "ping",
    aliases: ['pn']
};