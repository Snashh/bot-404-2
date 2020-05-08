const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle(' ')
    .setColor('#03355b')
    .addField('💬 Voici la catégories message 💬', '▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂')
    .addBlankField()
    .addField(`.embed [Message]`, `Vous envoyez un message embed`,false)
    .addField(`­`, `­`)
    .setThumbnail(message.guild.iconURL);

    message.channel.send(embed);
    if (message.deletable) message.delete()
}

module.exports.help = {
    name: "message"
}