const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

   let yetkiliROL = ayarlar.yetkiliROL;
 
 
  let rol = ayarlar.kadınROL
  let kayıtlı = ayarlar.kayıtlıROL
  let kayıtsız = ayarlar.kayıtsızROL
  let kullanıcı = message.mentions.users.first()
  if(kullanıcı.bot) return
  
   let isim = args[1]
   let yaş = args[2]
  if (!message.member.roles.has(yetkiliROL)) return;
  
  
  if(!args[0]) return message.reply(`Kayıt Olacak Kişiyi Etiketlemelisin`)
  if(!kullanıcı) return message.reply(`${args[0]} Adlı Kişi Sunucuda Bulunmuyor`)
  if(!isim) return message.reply(`${args[0]}, Adlı Kullanıcının İsmini Belirtmelisin.`)
  if(isim.length > 10) return message.reply(`Belirttiğiniz İsim 10 Harfi Geçmemeli.`)
   if(!yaş) return message.reply(`${args[0]}, Adlı Kullanıcının Yaşını Belirtmelisin.`)
   if(yaş.length > 100) return message.reply(`Belirttiğiniz Yaş 2 Basamaklı Bir Sayı Olmalı.`)
}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kadın',
  description : 'Kadın Kayıt '
};