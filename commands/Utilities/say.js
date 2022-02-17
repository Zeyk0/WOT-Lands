const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("\`🔒 Vous ne disposez pas des autorisations nécessaires pour faire cela !\`")
    
    if(!args.length) return message.channel.send("Rien ?")


    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage)

};

exports.help = {
    name: "say",
    aliases: ['sy']
};