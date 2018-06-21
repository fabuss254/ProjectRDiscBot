/* VARIABLES */

const Discord = require("discord.js");
const gd = require('node-gd');
const http = require('http');
const fs = require('fs');

var prefix = ":";
var footer = "Created by Fabuss254#9232";

var bot = new Discord.Client();

/* EVENEMENT */

bot.on('ready', () => {
  console.log("bot ready")
});

bot.on('message', message => {
  if (message.author.equals(bot.user)) return;
  var args = message.content.substring(prefix.length).split (" ");
  if (!message.content.startsWith(prefix)) return;
  switch (args[0].toLowerCase()) {
    
    case "botinfo":
      message.channel.send("Hi!")
    break;
      
  }
});

/* FUNCTION */



/* LOGIN */

bot.login(process.env.TOKEN);
console.log("Login succesfully!");

bot.on("error", err => {
    console.log(err);
});
