const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`#03355b`)
    .addField(`­`, `Le bot à été crée par 𝟜𝟘𝟜 | • 𝒁 • \n `)
    .setThumbnail(message.guild.iconURL);

    message.channel.send(embed);
    if (message.deletable) message.delete()

}

module.exports.help = {
    name: "about"
}