const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("jakiel yardım")
.addField("🤖 +yardım-kullanıcı", "kullanıcı yardım menüsü", true)
.addField("🤖 +yardım-logo","logo komutlarını gösterir.",true)
.addField("🤖 +yardım-gif","eğlence komutlarını atar.",true)
.addField("🤖 +yardım-pp-gif", "random pp veya gif ile alakalı bilgi", true)


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
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };