const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
/*->  Coded by. Chimp \n Edited by. Thunz  <-*/

exports.run = async (client, message, args) => {

    let kadınROL = message.guild.roles.get(`766264849004101642`)// Kadın rol id
    let kayıtsızROL = message.guild.roles.get(`762283600929357835`)
    let kayıtlıROL = message.guild.roles.get(`766264850233032734`)// Kayıtsız rol id
    let yetkili = ayarlar.yetkiliROL
    let channel = message.guild.channels.get(`766264831346343976`) || message.channel// Log kanal id girin, boş bırakırsanız komutun kullanıldığı kanala logu yollar.

    if(!message.member.roles.has(yetkili)) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')


if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
  
  
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
   var kontrol;
if (kurulus < 1296000000) kontrol = 'Şüpheli'
if (kurulus > 1296000000) kontrol = 'Güvenli'
  
  
  
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

message.guild.members.get(kullanıcı.id).setNickname(`${isim} • ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(kadınROL.id)
  message.guild.members.get(kullanıcı.id).addRole(kayıtlıROL.id)
message.guild.members.get(kullanıcı.id).removeRole(kayıtsızROL.id)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`• Kaydın başarıyla ${message.author} tarafından yapıldı. \n • Sunucudaki İsmin : ${isim} • ${yaş} `))
let embed2 = new Discord.RichEmbed()
.setTitle(`• Bir Kullanıcı Kayıt Oldu.`)
.setDescription(`
• **Kayıt Olan Kullanıcı:** ${kullanıcı} \`  { ${kullanıcı.id} }  \` 
• 
• **İsim Yaş:** \` ${isim} | ${yaş} \`
• 
• **Verilen Rol:** ${kadınROL} \`  { ${kadınROL.id} }  \` 
• 
• **Bu Hesap:** \`  { ${kontrol} }  \` 
• 
• **Kayıt eden:** ${message.author} \`  { ${message.author.id} }  \` 
`)
.setImage('https://i.pinimg.com/originals/af/80/39/af8039261a387be71514bb4c2e5e54b5.gif')
db.add(`kayitsayisi_${message.author.id}_${message.guild.id}`, 1)
channel.send(embed2)
  
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