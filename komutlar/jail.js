const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  let abone = message.mentions.members.first()
  let log = ayarlar.jailLOG
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yetkin yok')
   if(!abone) return message.channel.send('Jaile atacağın kişiyi etiketlemelisin.')
  var role = message.guild.roles.find(role => role.id === rol); 
  abone.setRoles(['766634561583972373']);
  
  let embed2 = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Bir Kullanıcı Jaile Atıldı  \`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\`  Yetkili \`**__ ${message.author}
<a:jke:751558669585612830> • __**\`  Kullanıcı \`**__ ${abone}`)
  
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Kullanıcı Başarıyla Jaile Atıldı  \`__   `)
  .setDescription(`<a:jke:751558669585612830> • __**\` Yetkili \`**__ ${message.author}`)
  message.channel.send(embed);
  log.send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail-ver'],
  permLevel: 0
};

exports.help = {
  name: 'jail'
};
