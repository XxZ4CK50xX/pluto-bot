const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');



const prefix = '.';

var version = '0.5.0 ALPHA';


bot.on('ready', () =>{
    console.log('good luck');
})

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

bot.login(settings.discord);
