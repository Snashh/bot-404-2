const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle(' ')
    .setColor(`#03355b`)
    .addField('🤖 Voici les catégories du Bot 🤖', '▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂')
    .addBlankField()
    .addField(`Fun👻`, `­`,true)
    .addField(`Message💬`, `­`,true)
    .addField(`­`, `­`)
    .addField('Info❔', `­`,true)
    .addField('moderation⚙️', `­`,true)
    .addField(`­`, `­`)
    .setThumbnail(message.guild.iconURL)

    message.channel.send(embed);
    if (message.deletable) message.delete()

}

module.exports.help = {
    name: "help"
}
