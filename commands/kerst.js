const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let today = new Date();
    let xmas = new Date(today.getFullYear(), 11, 24);
    if (today.getMonth() == 11 && today.getDate() > 24) {
    xmas.setFullYear(xmas.getFullYear() + 1);
    }
    let one_day = 1000 * 60 * 60 * 24;
    let daysleft = Math.ceil((xmas.getTime() - today.getTime()) / (one_day));
    let days = daysleft+1

    let embed = new Discord.RichEmbed()
        .setTitle(`🎅 | All i want for christmas is you!`)
        .setThumbnail("https://cdn.discordapp.com/attachments/761929946784333845/769553366359474196/kerstman.png")
        .addField(`Het is bijna kerst:`, `**Nog ${days} dagen!**`)
        .setColor("#08e9b4")
        .setFooter("© CodeSchool - 2020")
        .setTimestamp();

    message.channel.send(embed);

}

module.exports.help = {
    name: "kerst"
}