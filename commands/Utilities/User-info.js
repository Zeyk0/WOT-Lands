const Discord = require("discord.js");
const moment = require("moment")

exports.run = async (bot, message, args) => {
 
    let user = message.mentions.users.first() || message.author;

    if (user.presence.status === "dnd") user.presence.status = "🔴 Ne pas déranger";
    if (user.presence.status === "idle") user.presence.status = "🟡 Inactif";
    if (user.presence.status === "offline") user.presence.status = "⚪ Hors ligne";
    if (user.presence.status === "online") user.presence.status = "🟢 En ligne"

    function game() {
        let game;
        if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
        else if (user.presence.activities.length < 1) game = "Rien pour le moment...";
        return game;
    }
    
    let x = Date.now() - user.createdAt;
    let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt;
    let created = Math.floor(x / 86400000);
    let joined = Math.floor(y / 86400000); 

    const member = message.guild.member(user);
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "Pas de pseudo !";
    moment.locale("fr");
    let createdate = moment.utc(user.createdAt).format("LL");
    let joindate = moment.utc(member.joinedAt).format("LL");
    let status = user.presence.status;
    let avatar = user.avatarURL({size: 4096, dynamic: true});

    const embed = new Discord.MessageEmbed()
    .setAuthor(user.tag, avatar)
    .setThumbnail(avatar)
    .setTimestamp()
    .setColor('#79d0ff')    
    .addField("ID :", ` \`${user.id}\` `, true)
    .addField("Pseudo :", ` \`${nickname}\` `, true)
    .addField("Compte crée le :", ` \`${createdate}, \nincrit depuis: \n🌴 ${created} jour(s)\` `, true)
    .addField("Rejoind le serveur :", ` \`${joindate}, \nrejoind depuis: \n🌴 ${joined} jour(s)\` `, true)
    .addField("Status :", ` \`${status}\` `, true)
    .addField("Activités :", ` \`${game()}\` `, true)
    
    message.channel.send(embed);
}

exports.help = {
    name: "userinfo",
    aliases: ['ui']
};