const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async (client, message, args) => {

  let yetkiliROL = ayarlar.yetkiliROL;
 let log = ayarlar.kayıtLOG
 
  let rol = ayarlar.kadınROL
  let kayıtlı = ayarlar.kayıtlıROL
  let kayıtsız = ayarlar.kayıtsızROL
  let kullanıcı = message.mentions.users.first()

  
  
   let isim = args[1]
   let yaş = args[2]
   
   
  if (!message.member.roles.has(yetkiliROL)) return;
  if(kullanıcı.bot) return
 // db.add(`kayitsayisi_${message.author.id}_${message.guild.id}`, 1)
  if(!args[0]) return message.reply(`Kayıt Olacak Kişiyi Etiketlemelisin`)
  if(!kullanıcı) return message.reply(`${args[0]} Adlı Kişi Sunucuda Bulunmuyor`)
  if(!isim) return message.reply(`${args[0]}, Adlı Kullanıcının İsmini Belirtmelisin.`)
  if(isim.length > 10) return message.reply(`Belirttiğiniz İsim 10 Harfi Geçmemeli.`)
   if(!yaş) return message.reply(`${args[0]}, Adlı Kullanıcının Yaşını Belirtmelisin.`)
   if(yaş.length > 100) return message.reply(`Belirttiğiniz Yaş 2 Basamaklı Bir Sayı Olmalı.`)
  
  const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`#${message.channel.name} Kanalında Kullanıldı.`)

  
message.guild.members.get(kullanıcı.id).setNickname(`${isim} | ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(rol.id)
message.guild.members.get(kullanıcı.id).removeRole(kayıtsız.id)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`• Kaydın başarıyla ${message.author} tarafından yapıldı. \n • Sunucudaki İsmin : ${isim} • ${yaş} `))
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