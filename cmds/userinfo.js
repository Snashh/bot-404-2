const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {

    let inline = true
    let resence = true
    const status = {
        online: " Online",
        idle: " Idle",
        dnd: " Do Not Disturb",
        offline: " Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "Oui";
  } else {
    bot = "Non";
  }

            let embed = new Discord.RichEmbed()
                .setThumbnail((target.displayAvatarURL))
                .setColor("#03355b")
                .addField("Pseudo", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Surnom", `${member.nickname !== null ? `${member.nickname}` : " Aucun"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Jeux", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : " Aucun jeux"}`,inline, true)
                .addField("créer le", member.user.createdAt)
                .addField("Rejoins le", message.member.joinedAt)
                .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || " Aucun Roles"}`, true)
                .setFooter(`Information sur ${member.user.username}`)
    
            message.channel.send(embed);

            message.delete();
    }

module.exports.help = {
    name: "ui"
}