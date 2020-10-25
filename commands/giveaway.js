const ms = require("ms");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let membersEmbed1 = new Discord.RichEmbed()
    .setDescription(`:x: **Enkel <@&768901836883099678> kan dit doen.**`)
    .setColor("#08e9b4")

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(membersEmbed1);

    if (args[0] && args[1] && args[2]) {
        message.delete().catch(() => {});
        const item = args.slice(2).join(" ");
        const winnersCount = args[0];
        const secondsForGiveaway = args[1];

        await bot.giveawaysManager.start(message.channel, {
            time: ms(secondsForGiveaway),
            prize: item,
            winnerCount: parseInt(winnersCount),
            messages: {
                giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",
                giveawayEnded: "🎉🎉 **GIVEAWAY GEËINDIGD** 🎉🎉",
                timeRemaining: "Tijd te gaan: **{duration}**!",
                inviteToParticipate: "Reageer met 🎉 om deel te nemen!",
                winMessage: "Gefeliciteerd, {winners}! Je won **{prize}**!",
                embedFooter: "Giveaways",
                noWinner: "Giveaway geannuleerd, niet genoeg deelnemers.",
                winners: "winnaar(s)",
                endedAt: "Eindigd op",
                units: {
                    seconds: "seconden",
                    minutes: "minuten",
                    hours: "uren",
                    days: "dagen"
                }
            }
        });
    } else {

        message.channel.send("Gebruik !giveaway ``AantalWinnaars`` ``Tijd`` ``Item``");
    }
}

module.exports.help = {
    name: "giveaway"
}