const Discord = require("discord.js");
const config = require("../settings.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    message.delete();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Je moet de permissie BAN_MEMBERS hebben!");

    var appealID = (Math.floor(Math.random()*200)+1);


    let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!kickUser) return message.channel.send(`:x: **Gebruik**: !ban (@user) (reason)`)
    let kickReason = args.join(" ").slice(22);
    if (!kickReason) return message.channel.send(`:x: **Gebruik**: !kick (@user) (reason)`)
    let punishmentchannel = message.guild.channels.get("769563117595394091")
    if (!punishmentchannel) return message.channel.send("Kanaal bestaat niet!")
    
    let avatar2 = message.author.avatarURL;
    let banned = new Discord.RichEmbed()
    .setColor("#08e9b4")
    .setTitle(`Member gekickt!`)
    .addField("gekickte gebruiker", kickUser, true)
    .addField("Case ID", `${appealID}`, true)
    .addField("Reden", kickReason)
    .setFooter(`Uitgevoerd door: ${message.author.tag}`, avatar2)
    message.guild.member(kickUser).kick(kickReason);
    punishmentchannel.send(banned);

}
module.exports.help = {
    name: "kick"
}