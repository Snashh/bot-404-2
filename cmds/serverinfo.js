const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    const verificationLevel = message.guild.verificationLevel;
    const verificationLevels = ["None", "Low", "Medium", "High", "Max", "Extreme"]

    if (message.deletable) message.delete()

    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .addField('**Nom du Serveur**',`${message.guild.name}`, true)
    .addField('**ID du serveur**', `${message.guild.id}`, true)
    .addField('**Nom du FilsDePute**',`${message.guild.owner.user}`, true)
    .addField('**ID du FilsDePute**',`${message.guild.owner.id}`, true)
    .addField('**Membres**', `${message.guild.members.filter(member => member.user.bot).size} bots dans ${message.guild.memberCount} membres`, true)
    .addField('**Channels**', `${message.guild.channels.filter(channel => channel.type === 'voice').size} voice / ${message.guild.channels.filter(channel => channel.type === 'text').size} text`, true)
    .addField('**Level de Verification**', `${verificationLevels[message.guild.verificationLevel]}`, true)
    .addField('**Region du serveur**', `${message.guild.region}`)
    .addField('**AFK channel**', `${message.guild.afkChannel}`, true)
    .addField('**Créer**', `${message.guild.createdAt}`, true)
    .addField('**Rejoins**', `${message.member.joinedAt}`, true)
    .setColor('#03355b');

    message.channel.send(embed)

}

module.exports.help = {
    name: "si"
}