const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {
  let dena = message.mentions.members.first
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  
  var role = message.guild.roles.find(role => role.id === ayarlar.vipROL); 
  await(member.addRole(member.guild.roles.get(otorol).id)) 
  dena.addRole(role);
  message.channel.send(`Vip rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip'],
  permLevel: 0
};

exports.help = {
  name: 'vipver',

};

