    var Discord = require("discord.js");

    module.exports.run = (bot, message, args) => {

    const adminRole = message.guild.roles.get(`768901836883099678`);

    if (!adminRole) return console.log('Mod role does not exist!');

    const errorEmbed = new Discord.RichEmbed()
    .setDescription(":x: **Enkel <@&768901836883099678> kan aanmeldingen accepteren!**")
    .setColor("#08e9b4")

    if (!message.member.roles.has(adminRole.id)) return message.reply(errorEmbed);

    if (args.length === 0) return message.reply('Wat is de prijs?');

    if (args.length === 1) return message.reply('Product!');

    if (isNaN(args[0])) return message.reply(`${args[0]} is een ongeldig aantaal.`);

    let desc = args.slice(1).join(" ");

    let embed = new Discord.RichEmbed()
        .setColor("#08e9b4")
        .setThumbnail(bot.user.displayAvatarURL)
        .setURL(`https://paypal.me/SundeepDonate/${args[0]}`)
        .addField("Prijs:", `€${args[0]}`)
        .addField("Beschrijving:", `${desc}`)
        .addField("Betaling:", `Klaar om te betalen? Klik [hier](https://paypal.me/SundeepDonate/${args[0]})`)

    message.channel.send({ embed });
}

module.exports.help = {
    name: "factuur"
}