const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let lead = message.guild.roles.get(`768901836883099678`);

  const ErrorEmbed = new Discord.RichEmbed()
  .setDescription(`:x: | **Enkel** <@&768901836883099678> **of hoger kan dit command uitvoeren!**`)
  .setColor('#08e9b4');

  if (!message.member.roles.has(lead.id)) return message.channel.send(ErrorEmbed);

  const ErrorEmbed1 = new Discord.RichEmbed()
  .setDescription(`:x: **geef een aantal op! (NIET MEER ALS 100)!**`)
  .setColor('#08e9b4');

  if(!args[0]) return message.channel.send(ErrorEmbed1);
  message.channel.bulkDelete(args[0]).then(() => {

    let embed = new Discord.RichEmbed()
    .setDescription(`:pencil2: **${args[0]} berichten verwijderd.**`)
    .setColor("#08e9b4")


    message.channel.send(embed)
    .then(msg => {
      msg.delete(2000)
    })
  })

}

module.exports.help = {
  name: "clear"
}
