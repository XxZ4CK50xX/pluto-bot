const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./utils/eventLoader')(client);
	function log(message) {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
	}

const prefix = '.';

var version = '0.5.0 ALPHA';


client.on('ready', () =>{
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


client.on('message', msg=>{

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

client.login(settings.DISCORD);
