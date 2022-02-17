const Discord = require("discord.js");


exports.run = async (bot, message, args) => {

    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("\`🔒 Vous ne disposez pas des autorisations nécessaires pour faire cela :(\`");
    if (message.content.startsWith(`z!embed`)) {
        let embedBeforeEdit = new Discord.MessageEmbed()
            .setDescription()
        let msgEmbedForEditing = await message.channel.send(embedBeforeEdit)
        const msgwait = await message.channel.send("Vueillez patienter la fin de l'ajout des réactions.");
        await Promise.all(['✏️','💬','🕵️','🔻','⬜','⏲️','🖼️','🌐','🔵','↩️','↪️','📥','✅','📑'].map(r => msgwait.react(r)));
        await msgwait.edit(`:pencil2: Modifier le titre\n :speech_balloon: Modifier la description\n :detective: Modifier l'auteur\n :small_red_triangle_down: Modifier le footer\n :white_square_button: Modifier le thumbnail\n :clock10: Ajouter un timestamp\n :frame_photo: Modifier l'image\n :globe_with_meridians: Modifier l'url\n :blue_circle: Modifier la couleur\n :leftwards_arrow_with_hook: Ajouter un field\n :arrow_right_hook: Pour retiré un field\n :inbox_tray: Copier un embed existant\n :white_check_mark: Envoyer l'embed\n :bookmark_tabs: Modifier un message du bot avec cet embed`)
        /*  
            copier un embed
            Supprimer un field
            Modifier un message du bot
        */
        const filterReaction = (reaction, user) => user.id===message.author.id&&!user.bot;
        const filterMessage = (m) => m.author.id===message.author.id&&!m.author.bot;
        const collectorReaction = await new Discord.ReactionCollector(msgwait, filterReaction);
        collectorReaction.on('collect', async reaction => {
            reaction.users.remove(message.author);
            switch(reaction._emoji.name){
                case '✏️':
                    const msgQuestionTitle = await message.channel.send("\`Quel est votre titre ?\`")
                    const title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionTitle.delete();
                    title.delete();
                    embedBeforeEdit.setTitle(title.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '💬' :
                    const msgQuestionDescription = await message.channel.send("\`Quel est votre description ?\`");
                    const description = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionDescription.delete();
                    description.delete();
                    embedBeforeEdit.setDescription(description.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '🕵️':
                    const msgQuestionAuteur = await message.channel.send("\`Quel est votre auteur ?\`");
                    const auteur = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionAuteur.delete();
                    auteur.delete();
                    embedBeforeEdit.setAuthor(auteur.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '🔻':
                    const msgQuestionFooter = await message.channel.send("\`Quel est votre footer ?\`");
                    const footer = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionFooter.delete();
                    footer.delete();
                    embedBeforeEdit.setFooter(footer.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '⬜':
                    const msgQuestionThumbnail = await message.channel.send("\`Quel est votre thumbnail ?\`");
                    const thumbnail = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    if(!thumbnail.content.includes('http') || !thumbnail.content.includes('https')) return message.channel.send('\`Thumbnail incorrect\`')
                    msgQuestionThumbnail.delete();
                    thumbnail.delete();
                    embedBeforeEdit.setThumbnail(thumbnail.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '⏲️':
                    embedBeforeEdit.setTimestamp();
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '🖼️':
                    const msgQuestionImage = await message.channel.send("\`Quel est votre image ?\`");
                    const image = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    if(!image.content.includes('http') || !image.content.includes('https')) return message.channel.send('\`Image incorrect\`')
                    msgQuestionImage.delete();
                    image.delete();
                    embedBeforeEdit.setImage(image.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '🌐':
                    const msgQuestionURL = await message.channel.send("\`Quel est votre url ?\`");
                    const url = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionURL.delete();
                    url.delete();
                    embedBeforeEdit.setURL(url.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '🔵':
                    const msgQuestionColor = await message.channel.send("\`Quel est votre couleur ?\`");
                    const color = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionColor.delete();
                    color.delete();
                    embedBeforeEdit.setColor(color.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '↩️':
                    const msgQuestionField = await message.channel.send("\`Quel est votre titre du field ?\`");
                    const titlefield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionField.delete();
                    titlefield.delete()
                    const msgQuestionDescField = await message.channel.send("\`Quel est votre description du field ?\`");
                    const descfield = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionDescField.delete();
                    descfield.delete();
                    embedBeforeEdit.addField(titlefield.content, descfield.content);
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '✅':
                    const msgQuestionChannel = await message.channel.send("\`Merci de mettre l'id du salon en question\`");
                    const channel = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionChannel.delete();
                    channel.delete
                    if (!message.guild.channels.cache.get(channel.content)) return message.channel.send('\`Salon invalide\`')
                    else message.guild.channels.cache.get(channel.content).send(embedBeforeEdit);
                break;
                case '↪️':
                    const msgQuestionFieldTitle = await message.channel.send("\`Merci de mettre le titre du Field à retirer\`")
                    const field_title = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionFieldTitle.delete();
                    field_title.delete();
                    let indexField = '';
                    embedBeforeEdit.fields.map(field => {
                        if (indexField !== '') return;
                        if (field.name === field_title.content) indexField+=embedBeforeEdit.fields.indexOf(field);
                    })
                    if (indexField === '') return message.channel.send('\`aucun field trouvé\`').then(msg => msg.delete({tiemout: 5000}));
                    delete embedBeforeEdit.fields[indexField];
                    msgEmbedForEditing.edit(embedBeforeEdit);
                break;
                case '📥':
                    const msgQuestionChannelID = await message.channel.send("\`Merci de mettre l'id du salon\`");
                    const channel_id = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionChannelID.delete();
                    channel_id.delete();
                    if(!Number(channel_id.content)||!message.guild.channels.cache.get(channel_id.content)) return message.channel.send('\`salon invalide\`').then(msg => msg.delete({timeout: 5000}));
                    const msgQuestionMessageID = await message.channel.send("\`Merci de mettre l'id du message\`");
                    const message_id = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionMessageID.delete();
                    message_id.delete();
                    if(!Number(message_id.content)||!message.guild.channels.cache.get(channel_id.content).messages.fetch(message_id.content)) return message.channel.send('\`Message invalide\`').then(msg => msg.delete({timeout: 5000}));
                    const msg = await message.guild.channels.cache.get(channel_id.content).messages.fetch(message_id.content);
                    if (msg.embeds.length === 0) return message.channel.send("\`Ce message n'est pas un embed\`").then(msg => msg.delete({timeout: 5000}));
                    msgEmbedForEditing.edit(msg.embeds);
                break;
                case '📑':
                    const msgQuestionChannel_ID = await message.channel.send("\`Merci de mettre l'id du salon\`");
                    const channel_ID = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionChannel_ID.delete();
                    channel_ID.delete();
                    if(!Number(channel_ID.content)||!message.guild.channels.cache.get(channel_ID.content)) return message.channel.send('\`salon invalide\`').then(msg => msg.delete({timeout: 5000}));
                    const msgQuestionMessage_ID = await message.channel.send("\`Merci de mettre l'id du message\`");
                    const message_ID = (await message.channel.awaitMessages(filterMessage, {max: 1, time: 60000})).first();
                    msgQuestionMessage_ID.delete();
                    message_ID.delete();                  
                    if(!Number(message_ID.content)||!message.guild.channels.cache.get(channel_ID.content).messages.fetch(message_ID.content)) return message.channel.send('\`Message invalide\`').then(msg => msg.delete({timeout: 5000}));
                    const msg1 = await message.guild.channels.cache.get(channel_ID.content).messages.fetch(message_ID.content);
                    msg1.edit(msgEmbedForEditing.embeds);
                break;
            }
        })
    } 
}
 
exports.help = {
    name: "embed",
    aliases: ['eb']
};