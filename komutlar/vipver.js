const Discord = require('discord.js');

exports.run = function(client, message, args) {
  let dena = message.guild.members.get(args[0]);
  if(!message.member.hasPermission('ADMINISTRATOR')) return
  var role = message.guild.roles.find(role => role.id === "766372335959015424"); 
  dena.addRole(role);
  message.channel.send(`Abone rolü başarıyla verildi`);
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
//codare
