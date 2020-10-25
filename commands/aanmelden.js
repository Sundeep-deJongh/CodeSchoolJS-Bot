const Discord = require("discord.js");
const school = ("CodeSchool");

module.exports.run = (bot, message, args) => {

    var randomNumber = (Math.floor(Math.random()*200)+1);

    let Embed = new Discord.RichEmbed()

    .setAuthor(`${school} | Aanmelden`)
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription(`Bedankt dat je hebt gekozen voor **${school}**, Als je op ✅ klikt ga je akkoord met onze voorwaardens klik [hier](https://bit.ly/CodeSchoolTOS), Het aanmeld prodecuren heeft een verwerkingstijd van 24 uur dus wacht geduldig.\n\n*Bij het verbreken van de regels/Voorwaardens mag **${school}** je ten alletijden uitschrijven.*`)
    .setColor("#08e9b4")
    .setFooter("© CodeSchool - 2020")
    .setTimestamp();

    message.channel.send(Embed)
    .then ((m => {
        m.react('✅').then(() => m.react('❌'));

        const filter = (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        m.awaitReactions(filter, { max: 1, time: 20000, errors: ['time']})
        .then(collected => {
            const reaction = collected.first();

            let confirm1 = new Discord.RichEmbed()
            .setTitle(`Procedure | Gestart`)
            .setThumbnail(bot.user.displayAvatarURL)
            .setColor("#0ceb48")
            .setDescription(`<@${message.author.id}>,\nWe werken om dit moment aan je aanmelding,\nDit kan maximaal 24 uur duren!\nWe laten je zo snel mogelijk wat weten.\n\n**Met vriendelijk groet**,\nCodeSchool - Directie\n\n**Aanmeld-Nummer:** ${randomNumber}`)
            .setFooter("© CodeSchool - 2020")
            .setTimestamp();

            let confirm2 = new Discord.RichEmbed()
            .setColor("#0ceb48")
            .setDescription(`<@${message.author.id}> | **Je aanvraag is verstuurd naar <#768908519226736670>.**`)

                m.edit(confirm2)
            let accept = message.guild.channels.get('768908519226736670')

            if (reaction.emoji.name === '✅') {
                accept.send(confirm1)
                var interval = setInterval(function() {
                    clearInterval(interval);
                }, 10 * 1000);
            } else {

                let denied1 = new Discord.RichEmbed()
                .setTitle(`Procedure | Gecanceld`)
                .setThumbnail(bot.user.displayAvatarURL)
                .setColor("#f50202")
                .setDescription(`<@${message.author.id}>,\n Je aanvraag is geannuleerd.`)
                .setFooter("© CodeSchool - 2020")
                .setTimestamp();

                m.edit(denied1);
            }
        })
    }))

}

module.exports.help = {
    name: "aanmelden"
}