const Discord = require("discord.js"),
moment = require('moment')

exports.run = async (bot, message, args) => {
    const role = message.mentions.roles.first()
    if (!role) return message.channel.send('Veuillez mentionner le rôle dont vous voulez voir les infos.')
    const roleinfo = new Discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL({dynamic : true, size: 512}))
        .addField('Rôle', role, true)
        .addField('Membres le possédant', role.members.size, true)
        .addField('Couleur', role.hexColor, true)
        .addField('Date de création', moment(role.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
        .addField('Affiché séparément', role.hoist ? 'Oui' : 'Non', true)
        .addField('Mentionnable', role.mentionable ? 'Oui' : 'Non', true)
        .setFooter(`ID : ${role.id}`)
        .setColor(role.hexColor)

    
    message.channel.send(roleinfo)

};

exports.help = {
    name: "role-info",
    aliases: ['rl-inf']
}; 