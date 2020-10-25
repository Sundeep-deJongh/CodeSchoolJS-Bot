const Discord = require("discord.js");
const school = ("**CodeSchool**");

module.exports.run = (bot, message, args) => {

    let docent = message.guild.roles.get(`768901940763295805`);

    const ErrorEmbed = new Discord.RichEmbed()
    .setDescription(`:x: | **Enkel** <@&768901940763295805> **of hoger kan dit command uitvoeren!**`)
    .setColor('#08e9b4');

    if (!message.member.roles.has(docent.id)) return message.channel.send(ErrorEmbed);

    var Les = args[0];
    var LesDatum = args[1];
    var LesTijd = args[2];

        let lesEmbed = new Discord.RichEmbed()
        .setTitle('E R R O R')
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor('#08e9b4')
        .setDescription('Je mist het argument ||<les>|| of ||<datum>|| of ||<tijd>||!\n\nGebruik ||!createles <datum> <les> <tijd>||.')
        .setFooter("© CodeSchool - 2020", bot.user.displayAvatarURL)
        .setTimestamp();

        if (!Les) return message.channel.send(lesEmbed);
        if (!LesDatum) return message.channel.send(lesEmbed);
        if (!LesTijd) return message.channel.send(lesEmbed);

    let LMelding = new Discord.RichEmbed()
    .setTitle('Er is een les ingepland')
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor('#08e9b4')
    .setDescription(`**Datum & Tijd:**\n${LesDatum} om ${LesTijd}\n\n**Les:**\n${Les}\n\n**Docent:**\n${message.author}`)
    .setFooter("© CodeSchool - 2020", bot.user.displayAvatarURL)
    .setTimestamp();

        let leschannel = ('「」les-rooster')
        let lesmelding = message.guild.channels.get(`768937918928257094`)
        if (!lesmelding) console.log(`Het kanaal ${leschannel} bestaat niet!`)
        
        lesmelding.send(LMelding);

        let succesEmbed = new Discord.RichEmbed()
        .setDescription(`**De les is ingepland,** Zie ${lesmelding}`)
        .setColor('#08e9b4');

        message.channel.send(succesEmbed);

        lesmelding.send(`@everyone`)
        .then(msg => {
          msg.delete(1000)
        })
}

module.exports.help = {
    name: "createles"
}