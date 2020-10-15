const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {
let toplamkayıt = db.fetch(`kayitsayisi_${message.author.id}_${message.guild.id} || 0 `)

var embed = new Discord.RichEmbed()

.setDescription(`Kayıt sayın : ${toplamkayıt}`)
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