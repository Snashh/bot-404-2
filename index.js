const Discord = require("discord.js");
const fs = require('fs');
var config = require("./config.json")
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)
const superagent = require('superagent')
const prefix = config.prefix


var bot = new Discord.Client();

let statuses = [
    `⚡ 𝟜𝟘𝟜` ,
    `🙀 𝑶𝑴𝑮 🙀` ,
    `💖 𝐙 𝒆𝒔𝒕 𝒕𝒓𝒐𝒑 𝑩𝑶 💖`,
    `❗ .help ❗`
]

bot.on('ready', () => {
console.log("BOT IS READY");
setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {type: "STREAMING", url:"https://www.twitch.tv/mysterieux_z"});
    
}, 5000)
    
}) 

bot.commands = new Discord.Collection();

function loadCmds() {
    fs.readdir("./cmds/", (err, files) => {
        if(err) console.erroe(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if(jsFiles.length <= 0) {
            console.log("Aucune commande à chargé.")
            return;
        }
        console.log(`${jsFiles.length} commandes chargées.`);
        jsFiles.forEach((f, i) => {
            delete require.cache[require.resolve(`./cmds/${f}`)];
            var props = require(`./cmds/${f}`);
            console.log(`${i + 1}: ${f} chargé`);
            bot.commands.set(props.help.name, props); 
        })
    })
};

loadCmds();

bot.on('message', message => { 

var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);    
}) 

    


bot.login("TOKEN")
