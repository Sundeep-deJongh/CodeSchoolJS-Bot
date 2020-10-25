const Discord = require("discord.js");
const school = ("CodeSchool");

module.exports.run = (bot, message, args) => {

    let lead = message.guild.roles.get(`768901836883099678`)
    let accept = message.guild.channels.get('768908519226736670')

    const errorEmbed = new Discord.RichEmbed()
    .setDescription(":x: **Enkel <@&768901836883099678> kan aanmeldingen accepteren!**")
    .setColor("#08e9b4")

    if (!message.member.roles.has(lead.id)) return message.channel.send(errorEmbed)

    const errorEmbed1 = new Discord.RichEmbed()
    .setDescription(":x: **Gebruik !approve (@user)**")
    .setColor("#08e9b4")

    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let username = message.author.username;
    if(!user) return message.channel.send(errorEmbed1)

    let Embed1 = new Discord.RichEmbed()
    .setColor("#08e9b4")
    .setTitle("Procedure | Waiting")
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription(`Weetje zeker dat je ${user} wil accepteren?\n klik dan op de ✅ emoji.`)
    .setFooter("© CodeSchool - 2020")
    .setTimestamp();

    message.channel.send(Embed1)
    .then ((m => {
        m.react('✅');

        const filter = (reaction, user) => {
            return ['✅'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

    m.awaitReactions(filter, { max: 1, time: 20000, errors: ['time']})
    .then(collected => {
        const reaction = collected.first();

        accept.send(`${user}`)
  .then(msg => {
    msg.delete(1000)
  })

        let confirm1 = new Discord.RichEmbed()
        .setTitle(`Procedure | Goedgekeurd`)
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor("#0ceb48")
        .setDescription(`${user} Is geaccepteerd als leerling voor **${school}**, We versturen een bericht naar <#768908519226736670>.`)
        .setFooter("© CodeSchool - 2020")
        .setTimestamp();

        let confirm2 = new Discord.RichEmbed()
        .setColor("#0ceb48")
        .setDescription(`${user} Je bent toegelaten op **${school}**.`)

   user.addRole(message.guild.roles.find('name', '➜ Leerling'))

        if (reaction.emoji.name === '✅') {
            m.channel.send(confirm1)
            accept.send(confirm2)
            var interval = setInterval(function() {
                clearInterval(interval);
            }, 10 * 1000);
          }
      })
  }))
}

module.exports.help = {
    name: "approve"
}