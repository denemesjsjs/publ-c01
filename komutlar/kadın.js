const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
/*->  Coded by. Chimp \n Edited by. Thunz  <-*/

exports.run = async (client, message, args) => {

    let kadınROL = ayarlar.kadınROL
    let kayıtsızROL = ayarlar.kayıtsızROL
    let yetkiliROL = ayarlar.yetkiliROL
    let log = message.guild.channels.get(``) || message.channel// Log kanal id girin, boş bırakırsanız komutun kullanıldığı kanala logu yollar.

    if(!message.member.roles.has(yetkiliROL)) return;

  
if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
let isim = args[1];
if(!isim) return message.channel.send(`${args[0]}, için bir isim girmelisin.`)
if(isim.length > 16) return message.channel.send(`Daha kısa bir isim yaz.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`${args[0]}, için bir isim gir.`)
if(yaş.length > 2) return message.channel.send(`Adam 100 yaşında değil ya?`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`#${message.channel.name} Kanalında Kullanıldı.`)

message.guild.members.get(kullanıcı.id).setNickname(`${isim} | ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(kadınROL.id)
message.guild.members.get(kullanıcı.id).removeRole(kayıtsızROL.id)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`• Kaydın başarıyla ${message.author} tarafından yapıldı. \n • Sunucudaki İsmin : ${isim} • ${yaş} `))
let embed2 = new Discord.RichEmbed()
.setDescription(`${kullanıcı}, Adlı Kullanıcı Başarıyla Kayıt Oldu.`)
.addField(`• Kayıt eden:`, message.author, true)
.addField(`• İsim Yaş:`, args[1] | args[2]``, true)
.addField(`• Verilen Rol:`, kadınROL.name, true)
.setImage('https://i.pinimg.com/originals/af/80/39/af8039261a387be71514bb4c2e5e54b5.gif')
log.send(embed2)
  
message.reply(`Kayıt işlemi başarılı \n Kayıt türü: ** KADIN **`)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kadın'
};//codare