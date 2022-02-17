const Discord = require("discord.js"),
    moment = require('moment')

exports.run = async (bot, message, args) => {
    const roleinfo = new Discord.MessageEmbed()
        .setColor('#79d0ff')
        .addField('Nom :', ` \`${message.guild.name}\` `, true)
        .addField('Région :', message.guild.region, true)
        .addField('Membres :', `${message.guild.memberCount} membres\n${message.guild.members.cache.filter(member => !member.user.bot).size} humains\n${message.guild.members.cache.filter(member => member.user.bot).size} bots`, true)
        .addField('Salons :', `${message.guild.channels.cache.size} salons\n${message.guild.channels.cache.filter(channel => channel.type === 'text').size} salons textuels\n${message.guild.channels.cache.filter(channel => channel.type === 'voice').size} salons vocaux\n${message.guild.channels.cache.filter(channel => channel.type === 'category').size} Catégories`, true)
        .addField('Emojis :', `${message.guild.emojis.cache.size} emojis\n${message.guild.emojis.cache.filter(emoji => !emoji.animated).size} emojis statiques\n${message.guild.emojis.cache.filter(emoji => emoji.animated).size} emojis animés`, true)
        .addField('Rôles :', message.guild.roles.cache.size, true)
        .addField('Propriétaire :', message.guild.owner, true)
        .addField('Date de création :', moment(message.guild.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss', true))
        .addField('Nitro boost', `Tier : ${message.guild.preniumTier}\nNombre de boosts : ${message.guild.preniumSubscriptionCount}`, true)
        .setFooter(`ID : ${message.guild.id}`)
        .setThumbnail(message.guild.iconURL())
        .setImage(message.guild.bannerURL())

    message.channel.send(roleinfo)

};

exports.help = {
    name: "serverinfo",
    aliases: ['srv-inf']
};