const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

module.exports = client => {
  client.user.setStatus("online");
console.log('𝗮𝘆𝗮𝗿𝗹𝗮𝗿.𝗷𝘀𝗼𝗻 𝗱𝗼𝘀𝘆𝗮𝘀ı𝗻𝗱𝗮𝗻 𝘆𝗮𝗽𝗮𝗯𝗶𝗹𝗶𝗿𝘀𝗶𝗻𝗶𝘇.𝗧ü𝗺 𝗮𝘆𝗮𝗿𝗹𝗮𝗿ı 𝗱𝗼𝗹𝗱𝘂𝗿𝗺𝗮𝘀𝘀𝗮𝗻ı𝘇 𝗯𝗮𝘇ı ö𝘇𝗲𝗹𝗹𝗶𝗸𝗹𝗲𝗿 ç𝗮𝗹ış𝗺𝗮𝘆𝗮𝗯𝗶𝗹𝗶𝗿.');
  console.log(
    ` \n ${client.user.username}: { Kanal : ` +
      client.channels.size +
      ` Sunucu :` +
      client.guilds.size +
      ` Kullanıcı : ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` }`
  );
};
