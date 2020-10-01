const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Jakiel random-pp-gif komutları")
.addField("🤖 +random-ppgif ayarla #kanal","random pp gif kanalını ayarlar.",true)
.addField("🤖 +randım-ppgif sıfırla","random pp gif kanalını sıfırlar.",true)


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
    name: 'yardım-pp-gif', 
    description: 'The Help Command',
    usage: 'help'
  };