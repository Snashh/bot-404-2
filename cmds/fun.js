const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle(' ')
    .setColor('#03355b')
    .addField('👻 Voici la catégories fun 👻', '▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂')
    .addBlankField()
    .addField(`.salut`, `Vous envoyez un salut en mode random­`,false)
    .addField(`.biffle`, `Vous envoyez un gif d'une femme qui se fais bifflé­`,false)
    .addField(`.blc`, `M'en bat les couilles frère`,false)
    .addField(`.pd`, `Vous envoyez un gif d'un pd­`,false)
    .addField(`.pute`, `Vous envoyez un gif d'une pute`,false)
    .addField(`­`, `­`)
    .setThumbnail(message.guild.iconURL);

    message.channel.send(embed);
    if (message.deletable) message.delete()
}

module.exports.help = {
    name: "fun"
}