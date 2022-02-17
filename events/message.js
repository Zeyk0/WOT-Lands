const Discord = require("discord.js");

module.exports = async (bot, message) => {

    let prefix = "z!"

    const args = message.content.split(/ +/g);
    const command = args.shift().slice(prefix.length).toLowerCase();
    const cmd = bot.commands.get(command) || bot.aliases.get(command);

    if(!message.content.toLocaleLowerCase().startsWith(prefix) || !message.guild || message.author.bot || !cmd) return;

    cmd.run(bot, message, args).catch(e => {return console.log(e)});

}