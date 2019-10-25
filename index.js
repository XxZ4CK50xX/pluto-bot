const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');



const prefix = '.';

var version = '0.5.0 ALPHA';


bot.on('ready', () =>{
    console.log('good luck');
})

client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}. 👌`); 
    client.commands.set(props.help.name, props);
  });
});


bot.on('message', msg=>{

    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'ping':
            msg.channel.sendMessage('pong');
            break;
    case 'info':
        if(args[1] === version){
            MessageChannel.channel.sendMessage('running on ' + version)
        }else{
            msg.channel.sendMessage('invalid arg')
        }
    break;
    }
})

bot.login(settings.DISCORD);
