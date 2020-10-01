const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
    const nekadaraktifbot = moment.duration(client.uptime).format(" D [gün], H [Saat], m [Dakika], s [Saniye]");
    const kurucu55 = new Discord.RichEmbed()
    .setColor(`BLUE`)
.setDescription(`**${client.user.username}** - İstatistik`)
  .addField("Geliştirici Ekibi:", "<@450350884782866463>", true)
  .addField("Shard:", "1/1", true)
  .addField("Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField("Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(`Ne Kadar Süredir Aktif:`, `${nekadaraktifbot}`, true)
  .addField("Ping", `${client.ping}`, true)
  .addField(`Davet Et`, `[TIKLA](https://discord.com/oauth2/authorize?client_id=728334040704352277&scope=bot&permissions=8)`, true)
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
    message.channel.sendEmbed(kurucu55)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","istatistik",],
  permLevel: 0
};

exports.help = {
  name: 'info',
};
 