const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setColor(`#03355b`)
    .addField(`**PONG AHAH T'AS PERDU**`, `*${Math.round(bot.ping)}* ms !`)
    .setThumbnail(message.guild.iconURL)
    .setFooter(`𝑩𝒚 •𝒁• | 𝑫𝒐𝑫`);

    message.channel.send(embed);
    if (message.deletable) message.delete()

}

module.exports.help = {
    name: "ping"
}