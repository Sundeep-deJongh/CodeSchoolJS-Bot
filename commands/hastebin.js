const fetch = require('node-fetch');
const hastebin = ("https://hastebin.com");
const Discord = require("discord.js");
const settings = require("../settings.json");

module.exports.run = async (bot, message, args) => {

    message.delete();

	    let membersEmbed1 = new Discord.RichEmbed()
        .setDescription(`:x: **Ik kan geen lege hastebins aanmaken**`)
        .setColor("#08e9b4");
	
if (!args[0]) return message.channel.send(membersEmbed1);

const options = {
      method: 'POST',
         body: args.slice(0).join(' '), 
         headers: { 'Content-Type': 'application/json' } 
		 }

     let res  = await fetch(`${hastebin}/documents`, options);
     let json = await res.json();

     let membersEmbed = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: **Ik heb de hastebin aangemaakt URL: ${hastebin}/${json.key}**`)
    .setColor("#08e9b4")
  
   message.channel.send(membersEmbed);

}
module.exports.help = {
    name: "hastebin"
}