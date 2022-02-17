const Discord = require("discord.js");

exports.run = async (bot, message, args,) => {

    if(args[0] == "help") return message.channel.send(`Faites simplement : ${prefix}help à la place`); 

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command)
            let SHembed = new Discord.MessageEmbed()
            .setColor('#79d0ff')
            .setAuthor(`ZeyBot | Author`, message.guild.iconURL({dynamic : true, size: 512}))
            .setThumbnail(bot.user.displayAvatarURL({dynamic : true, size: 512}))
            .setDescription(`Le bot à comme préfix : \`${prefix}\`\n\n`)

    }}

    let cmdmember = `   \`help\` | \`avatar\` | \`ping\` | \`twitch\` | \`userinfo\` |   `
    let cmdadmin = `    \`clear\` | \`kick\` | \`ban\` | \`embed\` | \`say\` |           `

    if(!args[0]) {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setColor('#79d0ff')
        .setAuthor(`Commande Help`, message.guild.iconURL({dynamic : true, size: 512}))
        .setDescription(`**${message.author}** va voir tes mp !`)

        let Sembed = new Discord.MessageEmbed()
        .setColor('#79d0ff')
        .setAuthor(`ZeyBot Support`, message.guild.iconURL({dynamic : true, size: 512}))
        .setThumbnail(bot.user.displayAvatarURL({dynamic : true, size: 512}))
        .setDescription(`Voici toutes les commandes disponibles pour le bot \`${bot.user.username}\` \n Le prefix du bot est : \`z!\` `)
        .addField('Commandes pour les membres :', cmdmember)
        .addField('Commandes pour le Staff :', cmdadmin)
        .setFooter('ZeyBot | Footer', bot.user.displayAvatarURL({dynamic : true, size: 512}))

        message.channel.send(embed).then(d => d.delete({timeout: 30000}))
        message.author.send(Sembed)
    }
};
 
exports.help = {
    name: "help",
    aliases: ['hp']
};