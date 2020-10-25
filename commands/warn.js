const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./history.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])

  var appealID = (Math.floor(Math.random()*200)+1);

  let Error1 = new Discord.RichEmbed()
  .setColor("#08e9b4")
  .setDescription(`:x: **Je mag dit niet doen.**`)

  let Error2 = new Discord.RichEmbed()
  .setColor("#08e9b4")
  .setDescription(`:x: **Kan de member ${wUser.id} vinden.**`)

  let Error3 = new Discord.RichEmbed()
  .setColor("#08e9b4")
  .setDescription(`:x: **Je mag dit niet doen.**`)

if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(Error1);
if(!wUser) return message.reply(Error2);
if(wUser.hasPermission("MANAGE_MESSAGES"))  return(Error3)
let reason = args.join(" ").slice(22);
if(!warns[wUser.id]) warns[wUser.id] = {

    warns: 0

  };
  warns[wUser.id].warns++;

  fs.writeFile("./history.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });
  
  let warnEmbed = new Discord.RichEmbed()

  .setTitle("Waarschuwing | CodeSchool")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("#08e9b4")
  .addField("Warned User", `<@${wUser.id}>`)
  .addField("Warned In", message.channel)
  .addField("Appeal-ID", `${appealID}`)
  .addField("reden", reason)
  .setFooter("© CodeSchool - 2020", bot.user.displayAvatarURL)

  let warnchannel = message.guild.channels.get("769563117595394091");
  if(!warnchannel) return message.reply("kan geen log kanaal vinden");

  warnchannel.send(warnEmbed);

  let membersEmbed = new Discord.RichEmbed()
  .setDescription(`:rotating_light: **<@${wUser.id}> is gewarned door ${message.author} voor ${reason}**`)
  .setColor("#08e9b4")

  message.channel.send(membersEmbed);

}

module.exports.help = {

  name: "warn"

}