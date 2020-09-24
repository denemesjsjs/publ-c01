const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:no_entry: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
	let botisim = message.guild.members.get(args[1])
  let sahip = message.guild.members.get(args[0])
	let log = "758379780751491143" // bot eklendi / onaylandı / reddedildi kanalı
	let rol = '758382847005949962'
  let b = '734904078114750526'

	if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if(!sahip) return message.reply("Bir sahip id girmen gerekiyor")
  message.delete()
    sahip.addRole(rol)
  botisim.addRole(b)
   
		client.channels.get(log).send(`<a:tik4:756946179530424541> ${sahip} adlı kişinin ${botisim} adlı botu onaylandı.`)
		message.channel.send(`<a:tik4:756946179530424541> Botu onayladınız.`).then(msg => msg.delete(2000))
    
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-onayla', 'onayla'],
  permLevel: 0
};

exports.help = {
  name: 'botonayla', 
  description: "Sunucuya eklenen botu onaylar.",
  usage: 'botonayla <bot ismi>'
};6