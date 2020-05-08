const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./db.json');
const db = low(adapter);
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
     
    let author = message.author.id;
    if(!db.get("staffs" && "modos").find({ user_id: author }).value()) {
        return message.channel.send("**:x: | Vous ne disposez pas des permissions nécessaires.**")
    }
    let muteUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!muteUser) return message.channel.send("**:x: | Veuillez mentionner un utilisateur**");
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("**:x: | Vous n'avez pas les permissions.**");
  
    if (muteUser.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("**:x: | Vous ne pouvez pas mute cette personne.**");
  
    let muteRole = message.guild.roles.find(`name`, '⚠️ | Muted');
  
    if (!muteRole) {
      try {
        muteRole = await message.guild.createRole({
          name: "⚠️ | Muted",
          color: "#ff0004",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muteRole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }
  
    let muteTime = args[1];
    if (!muteTime) return message.channel.send("**:x: | Spécifier une durée**");
    let reason = args.slice(2).join(" ");
    if(!reason) reason = "Aucune reason"

    await muteUser.addRole(muteRole.id);
    message.channel.send(`<@${muteUser.id}> est muté pour ${ms(ms(muteTime))} !`);
    var messagelogs = new Discord.RichEmbed()
    .setTitle("❗**__MUTE__**❗")
    .addField("__Utilisateur__ :", "<@" + `${muteUser.id}` + ">")
    .addField("__ID__ :", `${muteUser.id}`)
    .addField("__Staff__ :", "<@" + `${message.author.id}` + ">")
    .addField("__Temps__", `${muteTime}`)
    .addField("__Raisons__ :", `${reason}`)
    .setTimestamp()
    .setColor("#edcb09")
    let sChannel = message.guild.channels.find(c => c.name === "『📃』log-mute")
    sChannel.send(messagelogs)
  
    setTimeout(() => {
      muteUser.removeRole(muteRole.id);
      message.channel.send(`<@${muteUser.id}> n'est plus muté !`);
    }, ms(muteTime))
    message.delete()
  };
  
  module.exports.help = {
    name: "mute"
  };