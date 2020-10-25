const Discord = require("discord.js");
const school = ("**CodeSchool**");

module.exports.run = (bot, message, args) => {

let HelpEmbed = new Discord.RichEmbed()
.setAuthor(`CodeSchool » HelpMenu`, bot.user.displayAvatarURL)
.setThumbnail(bot.user.displayAvatarURL)
.addField("✅ Member Commands:", "``!aanmelden``, ``!account``, ``!hastebin``, ``!help``, ``!kerst``, ``!members``, ``!suggestie``")
.addField("🛠️ Docenten/Lead Commands:", "``!alert``, ``!approve``, ``!ban``, ``!clear``, ``!createles``, ``!factuur``, ``!giveaway``, ``!kick``, ``!warn``")
.setColor("#08e9b4")
.setFooter("© CodeSchool - 2020", bot.user.displayAvatarURL)
.setTimestamp();

message.channel.send(HelpEmbed);

}

module.exports.help = {
    name: "help"
}