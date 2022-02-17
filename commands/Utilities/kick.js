const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("\`🔒 Vous ne disposez pas des autorisations nécessaires pour faire cela !\`")

    const mentionMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Aucune raison donné :(";

    const kickembed = new Discord.MessageEmbed()
    .setTitle(`Vous avez été expulsé de : **${message.guild.name}**`)
    .setDescription(`Reason : ${reason}`)
    .setColor("#79d0ff")
    .setTimestamp()
    .setFooter(bot.user.tag, bot.user.displayAvatarURL())

    if (!args[0]) return message.channel.send("\`⛔| Vous devez spécifier un utilisateur à expulser !\`");

    if(!mentionMember) return message.channel.send("\`⛔| Cet utilisateur n'est pas un utilisateur valide / n'est plus sur le serveur !\`");

    if(!mentionMember.kickable) return message.channel.send("\`⛔| Je n'ai pas pu expulser cet utilisateur !\`")

    try {
        await mentionMember.send(kickembed)
    } catch (err) {

    }
    
    try {
        await mentionMember.kick(reason);
    } catch (err) {
        return message.channel.send("\`⭕| Je n'ai pas pu expulser cet utilisateur ! Sorry...\`")
    }

};
 

exports.help = {
    name: "kick",
    aliases: ['kc']
};