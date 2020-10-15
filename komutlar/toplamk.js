const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {
let toplam = db.fetch(`kayitsayisi_${message.author.id}_${message.guild.id}`)

var embed = new Discord.RichEmbed()

.setDescription(`• **Kayıt sayın :** ${toplam}`)
.setImage('https://i.pinimg.com/originals/af/80/39/af8039261a387be71514bb4c2e5e54b5.gif')
message.channel.send(embed)

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