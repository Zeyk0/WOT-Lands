const Discord = require("discord.js");

module.exports = async (bot, message) => {
-
    console.log(`${bot.user.tag} est en ligne ✔️ !`);
    bot.user.setStatus("online");
    bot.user.setActivity(`de Zeyk0 !`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/zeyk0tv"
        
    });
};
    

