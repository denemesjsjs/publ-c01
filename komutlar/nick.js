const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  let isim = args[1]
  let uye = message.mentions.users.first();
  let yaş = args[2]
  let isimlog = ayarlar.isimLOG
  let yetkili = message.author;
  
  if(!uye) return message.channel.send(`İsmi değiştirilecek üyeyi belirtin.`)
  if(!yaş) return message.channel.send(`Üyenin yaşını yazın.`)
  if(!isim) return message.channel.send(`Üyenin ismini yazınız.`)
  if(isim.length > 10) return message.channel.send(`Üyenin ismi 10 harfi geçmemeli.`)
  if(yaş.length > 100) return message.channel.send(`Üyenin yaşı 100'ü geçemez.`)
  message.guild.members.get(uye.id).setNickname(`${isim} • ${yaş}`)
  message.channel.send(`\`${uye.username}\`'in ismi başarıyla  \` ${isim} • ${yaş} \` olarak değiştirildi.`)
  let embed2 = new Discord.RichEmbed()
  .setDescription(`Yetkili : ${yetkili}`)
  .addField(`\`${uye.username}\`'in ismi \` ${isim} • ${yaş} \` olarak değiştirildi.`)
  client.guild.channels.find(isimlog).send(embed2)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isim'],
    permLevel: 0
}

exports.help = {
    name: 'nick',
  
}