const Discord = require("discord.js");
const moment = require("moment")

exports.run = (client, message, args) => {

function checkDays(date) {
  let now = new Date();
  let diff = now.getTime() - date.getTime();
  let days = Math.floor(diff / 86400000);
  return days + (days == 1 ? " dag" : " dagen") + " geleden";
};

const status = {
  online: "Online",
  idle: "Afwezig",
  dnd: "Niet storen",
  offline: "Offline/ontzichtbaar"
};

const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

if (!user) {
  user = message.author
};

if (!user) {
  message.reply("Deze gebruiker bestaat niet!")
}

const gebruiker = `${user.user.username}#${user.user.discriminator}`
const id = user.id;

const userStatus = `${status[user.user.presence.status]}`
const nickname = `${user.nickname !== null ? `${user.nickname}` : "Geen nickname"}`
const speelStatus = `${user.user.presence.game ? `${user.user.presence.game.name}` : "Speelt niks"}`
const accountGemaakt = `${user.user.createdAt.toGMTString().substr(0, 16)} (${checkDays(user.user.createdAt)})`
const accountJoined = `${user.joinedAt.toGMTString().substr(0, 16)} (${checkDays(user.joinedAt)})`
const roles = `${user.roles.filter(r => r.id !== message.guild.id).map(roles => "<@&" + roles.id + ">").join(", ") || "Geen Roles"}`


let embed = new Discord.RichEmbed()
.setTitle("CodeSchool » Account")
.setThumbnail(user.user.displayAvatarURL)
.setColor("#08e9b4")
.addField(`Naam:`, `${gebruiker}`)
.addField(`UserID:`, `${id}`)
.addField(`Nickname:`, `${nickname}`)
.addField(`Speelt:`, `${speelStatus}`)
.addField(`Account gemaakt op:`, `${accountGemaakt}`)
.addField(`CodeSchool gejoined op:`, `${accountJoined}`)
.addField(`Rollen:`, `${roles}`)
.setFooter("© CodeSchool - 2020", client.user.displayAvatarURL)
.setTimestamp();


message.channel.send(embed);

}

module.exports.help = {
    name: "account"
  }