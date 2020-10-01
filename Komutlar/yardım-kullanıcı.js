const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("jakiel kullanıcı yardım")
.addField("🤖 +sil <sayı>","belirtiniz kadar mesaj siler.",true)
.addField("🤖 +istatistik","botun istatistik ini gösterir.",true)
.addField("🤖 +destek", "çok yakında.", true)

message.channel.sendEmbed(embed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım-kullanıcı', 
    description: 'The Help Command',
    usage: 'help'
  };