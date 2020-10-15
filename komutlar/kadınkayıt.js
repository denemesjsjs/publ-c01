const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {

   let yetkiliROL = ayarlar.yetkiliROL;
 
  
  let rol = ayarlar.kadınROL
  let kayıtlı = ayarlar.kayıtlıROL
  let kayıtsız = ayarlar.kayıtsızROL
  let kullanıcı = message.mentions.users.first()
  if (!message.member.roles.has(yetkiliROL)) return;
  
  
  
  if(!args[0]) return message.reply(`Kayıt Olacak Kişiyi Etiketlemelisin`)
  if(
  
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