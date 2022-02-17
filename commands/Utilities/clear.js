const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("\`🔒 Vous ne disposez pas des autorisations nécessaires pour faire cela :(\`")
    if (isNaN(args[0])) return message.channel.send("\`⛔| Veuillez saisir un nombre valide.\`")
    if (args[0] > 100) return message.channel.send("\`⛔| Insérez un nombre inférieur à 100.\`")
    if (args[0] < 2) return message.channel.send("\`⛔| Insérez un nombre au dessus de 1.\`")

    message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`\`♻️ Tu as supprimé ${messages.size}/${args[0]} message !\``)).then(d => d.delete({timeout: 3000}))
    .catch(() => message.channel.send("\`⭕| Une erreur s'est produite lors de la suppression des messages.\`")); 

};
 
exports.help = {
    name: "clear",
    aliases: ['purge', '']
};