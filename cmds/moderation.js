const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle(' ')
    .setColor('#03355b')
    .addField('⚙️ Voici la catégories message ⚙️', '▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂')
    .addBlankField()
    .addField(`.clear [nombre]`, `Commande pour supprimer les messages`,false)
    .addField(`.kick [User] [reason]`, `Commande pour kick`,false)
    .addField(`.ban [User] [reason]`, `Commande pour ban`,false)
    .addField(`.unban [ID] [reason]`, `Commande pour unmute`,false)
    .addField(`.mute [User] [Temps] [reason]`, `Commande pour mute`,false)
    .addField(`.unmute [User] [reason]`, `Commande pour unmute`,false)
    .addField(`­`, `­`)
    .setThumbnail(message.guild.iconURL);

    message.channel.send(embed);
    if (message.deletable) message.delete()
}

module.exports.help = {
    name: "moderation"
}