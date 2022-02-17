const Discord = require("discord.js");
const config = require("./Storage/config.json");
const bot = new Discord.Client

let prefix = "z!";

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}


// ----------------------------------------------------------------------------------------------------------------------------  //


bot.on('guildMemberAdd', member => {

    let welcomeEmbed = new Discord.MessageEmbed()
    .setColor('#79d0ff')
    .setTitle("Bienvenue")
    .setDescription(`Hey ${member} Bienvenue sur **🌴・WOT land's** ! 

    N'oublie pas de :
    - Lire le <#815680362888953887> 
    - Prendre connaisance du <#835558819659513891>
    - Pour me soutenir bg : [twitch.tv/zeyk0tv](https://www.twitch.tv/zeyk0tv) !`)
    
    .setImage("https://cdn.discordapp.com/attachments/828061501486268450/838504271585607770/tenor_1.gif")
    .setTimestamp()
    .setFooter("Bienvenue","https://cdn.discordapp.com/attachments/828061501839245322/837777855973949491/toad_Degrade_Bleu.png")
    

    member.guild.channels.cache.get('833480192864944168').send(welcomeEmbed)
});                                     


bot.on("guildMemberRemove", member => {
    
    member.guild.channels.cache.find(channel => channel.id === '833480354823274516').send(`${member} nous a quitté ce fdp de lardon 👋`);
})


// ----------------------------------------------------------------------------------------------------------------------------  //


load()
bot.login(process.env.TOKEN);