const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    {
{
        var member = message.mentions.users.first();
        message.delete();
        let avatar = new Discord.RichEmbed()
        .setTitle(`${member.username}`)
        .setColor('#03355b')
        .setImage(member.avatarURL);
        message.channel.send(avatar)
        } 
    }
}

module.exports.help = {
    name: "avatar"
}
