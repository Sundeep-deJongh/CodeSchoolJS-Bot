const Discord = require("discord.js");
const config = require("../settings.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Je moet de permissie BAN_MEMBERS hebben!");

    var appealID = (Math.floor(Math.random()*200)+1);


    let bannedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bannedUser) return message.channel.send(`:x: **Gebruik**: !ban (@user) (reason)`)
    let bannedReason = args.join(" ").slice(22);
    if (!bannedReason) return message.channel.send(`:x: **Gebruik**: !ban (@user) (reason)`)
    let punishmentchannel = message.guild.channels.get("769563117595394091")
    if (!punishmentchannel) return message.channel.send("Kanaal bestaat niet!")
    
    let avatar2 = message.author.avatarURL;
    let banned = new Discord.RichEmbed()
    .setColor("#08e9b4")
    .setTitle(`Member verbannen!`)
    .addField("Verbannen gebruiker", bannedUser, true)
    .addField("Case ID", `${appealID}`, true)
    .addField("Reden", bannedReason)
    .setFooter(`Uitgevoerd door: ${message.author.tag}`, avatar2)
    message.guild.member(bannedUser).ban(bannedReason);
    punishmentchannel.send(banned);

}
module.exports.help = {
    name: "ban"
}