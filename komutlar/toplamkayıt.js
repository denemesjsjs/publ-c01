const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {
  let yetkili = message.author
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
var embed = new Discord.RichEmbed()
.setTitle(`• \`Kayıt Bilgileri\``)

.setDescription(`

• __ **Yetkili :** ${yetkili} __  \` { ${yetkili.id} } \`

• **__Toplam üye kayıt sayısı :__** \` ${toplam} \`

• **__Toplam kız kayıt sayısı :__** \` ${kız} \`

• **__Toplam erkek kayıt sayısı :__** \` ${erkek} \`



`)
.setThumbnail(yetkili.avatarURL)
.setImage('https://i.pinimg.com/originals/af/80/39/af8039261a387be71514bb4c2e5e54b5.gif')
message.reply(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'toplamkayıt'
};