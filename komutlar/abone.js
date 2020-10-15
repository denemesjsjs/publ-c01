const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  let erkek = ayarlar.erkekROL
  let yetkili = message.author
  let kullanıcı = message.guild.members.get(args[0]);
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  var role = message.guild.roles.find(role => role.id === erkek); 
  kullanıcı.addRole(role);
  db.set(``)
  let embed = new Discord.RichEmbed()
  .setDescription('Kişinin kaydı başarıyla yapıldı')
  .addField(`Kaydı Yapan Yetkili : ${yetkili}`)
  .addField(`Kayıt Olan Kullanıcı : ${kullanıcı}`)
  .addField(``)
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone.js','abone'],
  permLevel: 0
};

exports.help = {
  name: 'abone',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'abone'
};

