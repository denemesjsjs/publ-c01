const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const fs = require("fs");
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);
  
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////////////////////////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(ayarlar.token);


client.on("ready", () => {
  client.user.setPresence({
    game: { name: `j!botekle`, type: "WATCHING" },
    status: "online"
  });
});

client.on("guildMemberAdd", member => {
  let tag = ayarlar.tag;
  member.setNickname(`${tag} | ${member.user.username}`);
});

client.on("message", message => {
  let kanal2 = ayarlar.kanalengel2;
  if (message.channel.id == kanal2) {
    if (message.author.id == message.client.user.id) return;

    message.delete(1 * 500);
  }
});

client.on("message", (message, member) => {
  let kanal1 = ayarlar.kanalengel;
  if (message.channel.id == kanal1) {
    if (message.author.id == message.client.user.id) return;

    message.delete(1 * 500);
  }
});


// kayıtsız rolü

client.on("guildMemberAdd", async(member) => {
  let otorol = ayarlar.kayıtsızROL
  if(!otorol) return
  await(member.addRole(member.guild.roles.get(otorol).id)) 
});

/// kayıtsız rolü son


client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    let tag = ayarlar.tag
  
    let rol = ayarlar.tagROL;
    if (newUser.username.includes(tag) && !client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(ayarlar.tagLOG).send(`${newUser} ${tag} tagını aldığı için <@&${rol}> rolünü kazandı!`)
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).removeRole(rol)
      client.channels.get(ayarlar.tagLOG).send(`${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!`)
    }

  }
})


  client.on("guildMemberAdd", member => { 
    const moment = require('moment');
  const emoji = client.emojis.get('754989058513698937');
  const kanal = ayarlar.giriskanal;
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const tarih = new Date().getTime() - user.createdAt.getTime();  
  const embed = new Discord.RichEmbed()
 
  var kontrol;
if (tarih < 1196000000) kontrol = ' __**Kullanıcı Güvenli**__ '
if (tarih > 1196000000) kontrol = ' __**Kullanıcı Güvenli Değil**__ '
  moment.locale("tr");
  let kanal1 = client.channels.get(kanal);
    let giris = new Discord.RichEmbed()
   .setTitle(` <a:kraltac:740610303628279808>   \` Sunucumuza Hoşgeldin!\` `)
    .setDescription(`
• ** Hoşgeldin! ${member} Seninle Birlikte ${member.guild.memberCount} Kişiyiz. **

• ** Sunucuya Hoşgeldin Tagımızı Alarak Kayıt Olabilirsin. **

• ** <@&${ayarlar.yetkiliROL}> seninle ilgilenicektir. **

• ** Hesabın Oluşturulma Tarihi:** \` ${moment(member.user.createdAt).format("YYYY DD MMMM dddd (hh:mm:ss)")} \`

•  ${kontrol} 

• ** __ Ses teyit odasında kaydınızı yaptırabilirsiniz. __ ** `)
    .setThumbnail(member.user.avatarURL || 'https://cdn.discordapp.com/attachments/766342468576608318/766343451994226778/af8039261a387be71514bb4c2e5e54b5.gif')
    .setImage('https://cdn.discordapp.com/attachments/766342468576608318/766343451994226778/af8039261a387be71514bb4c2e5e54b5.gif')
    .setTimestamp()
kanal1.send(giris)
  });