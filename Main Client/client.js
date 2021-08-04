const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, botname, logo } = require('../Main Client/config.json');

client.on('ready', () => {
    console.log('The client is ready.');
    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'Don not disturb',
            type: 'PLAYING',
            url: 'https://www.google.com/'
        }
    })
});

client.on('message', message => {
    const args = message.content.split(" ").slice(1);

    if(message.content.startsWith(prefix + 'help')) {
        let embedhelp = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('GLITCH HELP')
        .setThumbnail(`${logo}`)
        .addField(`${prefix}ping`, 'test ajah')
        .setTimestamp()
        .setFooter(`Requested By ${message.author.username}`)
    
        message.channel.send(embedhelp)
    }


    if (message.content.startsWith(prefix + "kick")) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
        let member = message.mentions.members.first()
        if (!member) message.channel.send("Please mention someone")
        else {
        member.kick().then(mem => {
        message.channel.send(`Kicked ${mem.user.username}!`)
        })
        }
        } else {
        message.reply("You don't have the permission to do that...")
        }
    }


    if (message.content.startsWith(prefix + "kick")) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
        let member = message.mentions.members.first()
        if (!member) message.channel.send("Please mention someone")
        else {
        member.kick().then(mem => {
        message.channel.send(`Kicked ${mem.user.username}!`)
        })
        }
        } else {
        message.reply("You don't have the permission to do that...")
        }
    }


    if (message.content.startsWith(prefix + "ban")) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
         let member = message.mentions.members.first()
         if (!member) message.channel.send("Please mention someone")
         else {
         member.ban().then(mem => {
         message.reply(`Banned ${mem.user.username}!`)
         })
         }
         } else {
         message.reply("You don't have the permission to do that...")
         }
    }


    if (message.content.startsWith(prefix + "Ban")) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
         let member = message.mentions.members.first()
         if (!member) message.channel.send("Please mention someone")
         else {
         member.ban().then(mem => {
         message.reply(`Banned ${mem.user.username}!`)
         })
         }
         } else {
         message.reply("You don't have the permission to do that...")
         }
    }

    
    
});

client.login(token);