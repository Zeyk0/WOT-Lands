const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("\`🔒 Vous ne disposez pas des autorisations nécessaires pour faire cela !\`")

    const mentionMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "pas de raison donné";

    const embed = new Discord.MessageEmbed()
    .setTitle(`You were Banned from : **${message.guild.name}**`)
    .setDescription(`Reason : ${reason}`)
    .setColor("#79d0ff")
    .setTimestamp()
    .setFooter(bot.user.tag, bot.user.displayAvatarURL())

    if (!args[0]) return message.channel.send("\`⛔| Vous devez spécifier un utilisateur à bannir !\`");

    if(!mentionMember) return message.channel.send("\`⛔| Cet utilisateur n'est pas un utilisateur valide / n'est plus sur le serveur !\`");

    if(!mentionMember.bannable) return message.channel.send("\`⛔| Je n'ai pas pu expulser cet utilisateur !\`")

    await mentionMember.send(embed);
    await mentionMember.ban({
        reason: reason
    }).then(() => message.channel.send("User bannie : " + `<@${mentionMember}>` ));
};

exports.help = {
    name: "ban",
    aliases: ['bn']
};