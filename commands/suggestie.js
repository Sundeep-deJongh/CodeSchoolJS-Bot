const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    var idee = args.join(" ");

    let errorEmbed = new Discord.RichEmbed()
    .setAuthor("CodeSchool » Suggestie")
    .setColor("#08e9b4")     
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription("Je mist het argument ||<idee>|| | Gebruik ||!idee (Idee)||.")
    .setFooter("© CodeSchool - 2020", bot.user.displayAvatarURL)
    .setTimestamp();

    if (!idee) return message.channel.send(errorEmbed); 

    var eindEmbed = new Discord.RichEmbed()
    .setAuthor("CodeSchool » Suggestie", message.guild.iconURL)
    .setColor("#08e9b4")     
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription("Je hebt een idee ingestuurd in **CodeSchool** zie de onderstaande informatie.")
    .addField("Suggestie: ", idee)
    .setFooter("© CodeSchool - 2020", bot.user.displayAvatarURL)
    .setTimestamp();

    message.author.send(eindEmbed);

    var ideeEmbed = new Discord.RichEmbed()
    .setColor("#08e9b4")     
    .setAuthor("CodeSchool » Suggestie", message.guild.iconURL)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Suggestie: ", idee)
    .addField("Ingezonden door:", message.author)
    .setFooter("© CodeSchool - 2020", bot.user.displayAvatarURL)
    .setTimestamp();
 
        var ideeChannel = message.guild.channels.get(`768908132339941376`);
        if(!ideeChannel) return message.guild.send("Kan geen kanaal met de naal ``『💡』suggesties`` vinden.");
 
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('✅');
        embedMessage.react("❌");


        var embed = new Discord.RichEmbed()
        .setDescription(`**Je hebt succesvol een idee verstuurd :tada:**`)
        .setColor("#08e9b4")     

        message.channel.send(embed);


    });
 
}

module.exports.help = {
    name: "idee"
}