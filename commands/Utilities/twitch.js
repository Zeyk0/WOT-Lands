const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let avatar = user.avatarURL({size: 4096, dynamic: true});

    const twitchembed = new Discord.MessageEmbed()
    .setTitle(`Zeyk0 Sponsore`) 
    .setDescription(`⚪》https://www.twitch.tv/zeyk0tv`)
    .setColor('#79d0ff')
    .setImage('https://cdn.discordapp.com/attachments/832657604005593088/834060802192965675/toad_noir.png')
    .setFooter('ZeykBot | Twitch')

    return message.channel.send(twitchembed);   

};

exports.help = {
    name: "twitch",
    aliases: ['tw']
}; 