const settings = require("./settings.json");
const Discord = require("discord.js");
const fs = require("fs");
const school = ("CodeSchool");
const active = new Map();
const { GiveawaysManager } = require("discord-giveaways");
const readline = require('readline');
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
          return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} --> Ingeladen!`);
    bot.commands.set(props.help.name, props);
  });

});

const manager = new GiveawaysManager(bot, {
  storage: "./giveaways.json",
  updateCountdownEvery: 10000,
  default: {
      botsCanWin: false,
      exemptPermissions: ["ADMINISTRATOR"],
      embedColor: "#0080ff",
      reaction: "🎉"
  }
});

bot.giveawaysManager = manager

bot.on('ready', () => {

  console.log("==========================");
  console.log("Ik ben online.");
  console.log("Gebruik !run om te kijken of ik werk.")
  console.log("Voor problemen contacteer @Sundeep#0001.");
  console.log("==========================");

    bot.user.setStatus('dnd');
    setInterval(async ()=>{
        let textList = ['!help','CodeSchool','Les geven']
        var text = textList[Math.floor(Math.random() * textList.length)];
        bot.user.setActivity(text , { type: 'PLAYING' })
    },10000)

});


bot.on('guildMemberAdd', member => {

  var role = member.guild.roles.get('768938939540176937'); 
  member.addRole(role);

const channel = member.guild.channels.get("768907803598782555");

let joinMessage = new Discord.RichEmbed()
.setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
.setThumbnail(member.user.displayAvatarURL)
.setDescription(`Welkom <@${member.user.id}>,\nOp de **${school}** discord server, Hier geven wij les in allerlei soorten programmeertalen. Kijk snel in <#768908380030631937> om je aan te melden.\n\n**Met vriendelijk groet**,\nCodeSchool - Directie`)
.setColor("#08e9b4")
.setFooter("© CodeSchool - 2020")
.setTimestamp();


channel.send(joinMessage);

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = settings.prefix;
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  var options = {
    active: active
  
  }


  let commands = bot.commands.get(cmd.slice(prefix.length));
  if(commands) commands.run(bot,message,args,options);

  
});

bot.login(settings.token);  