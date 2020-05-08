const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    {
 {
            message.delete();
        var pd = new Discord.RichEmbed()
        .setAuthor(`Hey Girl.`)
        .setColor('#03355b')
        .setImage('https://media.giphy.com/media/d7fvcrPydrDIVDRkim/giphy.gif');
        message.channel.send(pd)
        } 
    }
}

module.exports.help = {
    name: "salut"
}
