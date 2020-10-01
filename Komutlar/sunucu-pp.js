const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 
  
const apexcode = new Discord.RichEmbed()
.setTitle(message.guild.name + " | Sunucu Resmi")
.setColor("BLACK")
.setImage(message.guild.iconURL)
message.channel.send(apexcode)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['sunucupp'], 
  permLevel: 0
};

exports.help = {
  name: 'sunucu-pp',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};