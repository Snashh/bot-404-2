const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    {
{
        message.delete();
        var biffle = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag} te biffle salope.`)
        .setColor('#03355b')
        .setImage('http://la-biffle.com/la-biffle.com/image/la_biffle.gif');
        message.channel.send(biffle)
        } 
    }
}

module.exports.help = {
    name: "biffle"
}
