const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

     if(message.author.id !== "384034665033498634") return; 
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFEFE`)
    .setTitle("Rip les yeux")
    .setImage(`https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif`);

    message.channel.send(embed);
    if (message.deletable) message.delete()

}

module.exports.help = {
    name: "riplesyeux²"
}
