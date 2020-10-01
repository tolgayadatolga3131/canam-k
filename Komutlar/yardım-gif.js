const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("bot adı")
.addField("🤖 +avatar","kendi avatar ını atar.",true)
.addField("🤖 +sunucu-pp", "sunucu pp veya gif atar", true)
.addField("🤖 +kız-gif","kız gifi atar.",true)
.addField("🤖 +erkek-gif" ,"erkek gifi atar.",true)
.addField("🤖 +bebek-gif","bebek gifi atar.",true)
.addField("🤖 +sevgili-gif","sevgili gifi atar.",true)


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
    name: 'yardım-gif', 
    description: 'The Help Command',
    usage: 'help'
  };