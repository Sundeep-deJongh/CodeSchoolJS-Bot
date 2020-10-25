const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var alertKanaal = message.mentions.channels.first();

        if (!alertKanaal) return;

        var message = args.join(" ").slice(22);
        var alertEmbed = new Discord.RichEmbed()
            .setAuthor("Alert | CodeSchool")
            .setThumbnail(bot.user.displayAvatarURL)
            .setColor("#08e9b4")
            .setDescription(message)
            .setFooter("© CodeSchool - 2020")
            .setTimestamp();

        alertKanaal.send(alertEmbed);

        const errorEmbed2 = new Discord.RichEmbed()
        .setDescription(`:white_check_mark: | **Bericht is verstuurd naar ${alertKanaal}**`)
        .setColor("#08e9b4")
}

module.exports.help = {
    name: "alert"
}