const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let guild = message.guild;
    
    let embed = new Discord.RichEmbed()
    .setDescription(`:rotating_light: CodeSchool heeft op het moment **${guild.memberCount} members**!`)
    .setColor("#08e9b4")     

    message.channel.send(embed);
}

module.exports.help = {
    name: "members"
}