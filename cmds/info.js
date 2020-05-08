const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
 
    let embed = new Discord.RichEmbed()
    .setTitle(' ')
    .setColor('#03355b')
    .addField('❔ Voici la catégories Info ❔', '▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂')
    .addBlankField()
    .addField(`>ui [User]`, `Affiche les informations de la personne­`,false)
    .addField(`>si [User]`, `Affiche les informations du serveur`,false)
    .addField(`>avatar [User]`, `Affiche l'avatar de la personne­`,false)
    .addField(`­`, `­`)
    .setThumbnail(message.guild.iconURL);

    message.channel.send(embed);
    if (message.deletable) message.delete()
}

module.exports.help = {
    name: "info"
}