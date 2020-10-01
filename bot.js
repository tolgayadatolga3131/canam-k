////ApexCode
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
//random pp gif
//eklendim atıldım
client.on("guildCreate", async function(guild) {

    const owner = client.users.get(guild.ownerID)

    const kanal = "748952700758130790" //Eklendim mesajının atılacağı kanal ID'sini giriniz.

    const darkcode = new Discord.RichEmbed()

    .setTitle(`Yeni bir sunucuya eklendim`)

    .setColor("BLACK")

    .addField(`Sunucu Adı`, guild.name)

    .addField(`Sunucu Sahibi`, owner.username + "#" +owner.discriminator)

    .addField(`Sunucu Üye Sayısı`, guild.memberCount)

    client.channels.get(kanal).send({embed: darkcode}).catch(err => console.log("Kanala mesaj atamıyorum!"))

    })

    //

      //Darkcode

    //Atıldım

    client.on("guildDelete", async function(guild) {

    const owner = client.users.get(guild.ownerID)

    const kanal = "748952700758130790 i" //Atıldım mesajının atılacağı kanal ID'sini giriniz.

    const darkcode = new Discord.RichEmbed()

    .setTitle(`Bir sunucudan atıldım`)

    .setColor("BLACK")

    .addField(`Sunucu Adı`, guild.name)

    .addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)

    .addField(`Sunucu Üye Sayısı`, guild.memberCount)

    client.channels.get(kanal).send({embed: darkcode}).catch(err => console.log("Kanala mesaj atamıyorum!"))

    })

    

  client.on('userUpdate', async (oldUser, newUser) => {

  if(oldUser.avatarURL !== newUser.avatarURL) {

  

    client.guilds.forEach(async guild => {

    if(guild.members.get(newUser.id)) {

    

    const channeldata = await require('quick.db').fetch(`darkcode.${guild.id}`)

    if(!channeldata) return;

    let channel = await guild.channels.get(channeldata)

    

    let avatar = new Discord.Attachment(newUser.avatarURL)

    let gifkontrol = newUser.avatarURL.includes('.gif') ? `**[[GIF]](${newUser.avatarURL})**` : `~~**[GIF]**~~`  

    const DarkCode = new Discord.RichEmbed().setColor('BLACK').setAuthor(newUser.tag).setImage(newUser.avatarURL).setDescription(`${gifkontrol} | **[[PNG]](${newUser.avatarURL.replace('.gif', '.png').replace('.jpg', '.png').replace('.webp', '.png')})** | **[[JPG]](${newUser.avatarURL.replace('.png', '.jpg').replace('.gif', '.jpg').replace('.webp', '.jpg')})** | **[[WEBP]](${newUser.avatarURL.replace('.gif', '.webp').replace('.png', '.webp').replace('.jpg', '.webp')})**`)

    return channel.send(DarkCode)

  

    }

    })

  }

  });

client.on('message', message => {
if (message.content === `<@${client.user.id}>`) {
 message.reply('Prefixim: +')
}
});