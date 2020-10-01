const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("jakiel logo komudu")
.addField("🤖 +green-logo","güzel bir Green yazıyla ismin yazılır.",true)
.addField("🤖 +graffiti-logo","güzel bir graffiti ile ismin yazılır.",true)
.addField("🤖 +gold2-logo" ,"gold2 şeklinde paylaşılır.",true)
.addField("🤖 +gold-logo","gold olarak ismiziz yazılır",true)
.addField("🤖 +fire-logo","ateş len birleşerek isminiz paylaşılır.",true)
.addField("🤖 +discord-logo","discordun logosu şeklinde isminiz atılır.",true )
.addField("🤖 +cool-logo", "cool bir şekilde isminiz yazılır.", true) 
.addField("🤖 +comic-logo", "sıradan bir logo ile isminiz yazılır.", true) 
.addField("🤖 +bubble-logo", "bubble İsminizi bilrştirir.", true)
.addField("🤖 +booking-logo" , "booking ile ismizi bileltirir.", true) 
.addField("🤖 +blue-logo", "mavi bir yazı ile İsminizi güzel leştirir.", true) 
.addField("🤖 +arrow-logo", "arrow ile İsminizi bileştirir.", true) 


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
    name: 'yardım-logo', 
    description: 'The Help Command',
    usage: 'help'
  };