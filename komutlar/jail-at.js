const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  let abone = message.mentions.members.first()
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yetkin yok')
   if(!abone) return message.channel.send('Jaile atacağın kişiyi etiketlemelisin.')
  var role = message.guild.roles.find(role => role.id === rol); 
  abone.setRoles(['766634561583972373']);
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Kullanıcı Başarıyla Jaile Atıldı  \`__   `)
  .setDescription(`<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}`)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jailgönder'],
  permLevel: 0
};

exports.help = {
  name: 'jailat'
};
