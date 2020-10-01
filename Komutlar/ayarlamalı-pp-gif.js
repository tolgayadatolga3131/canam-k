const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_ROLES')) return;
    if (!args[0]) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`pp-gif ayarla/sıfırla komutlarını kullanın.`));

    if (args[0] === 'ayarla') {

        const ayarlı = await data.fetch(`darkcode.${message.guild.id}`)
        if (ayarlı) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Kanal zaten ayarlı.`))

        if (!args[1]) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Bir kanalı etiketlemelisin.`))
        let channel = message.mentions.channels.first()
        if (!channel) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`${args[1]}, isimli kanalı bu sunucuda bulamıyorum.`))

        data.set(`darkcode.${message.guild.id}`, channel.id)
        message.channel.send(new Discord.RichEmbed().setColor("Green").setDescription(`PP ve GİF fotoğrafların gönderileceği yer: ${channel} olarak ayarlandı.
Sıfırlamak İçin: pp-gif sıfırla`))

    } else if (args[0] === 'sıfırla') {
        const ayarlı = await data.fetch(`darkcode.${message.guild.id}`)
        if (!ayarlı) return message.channel.send(new Discord.RichEmbed().setColor("RED").setDescription(`Kanal zaten ayarlı değil.`))

        data.delete(`darkcode.${message.guild.id}`)
        message.channel.send(new Discord.RichEmbed().setColor("Green").setDescription(`PP ve GİF fotoğrafların gönderileceği kanal sıfırlandı.\n
Ayarlamak için: pp-gif ayarla #channel`))
    }

};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["random-ppgif"],
    permLevel: 0
}

exports.help = {
    name: 'random-pp-gif'
};