const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports = class SteamCommand extends BaseCommand {
  constructor() {
    super('steam', 'accounts', []);
  }

  async run(client, message, args) {

    const wrong = new Discord.MessageEmbed()
      .setTitle("Success!")
      .setDescription(`**Hey** ${message.author.username}, I Sent You The Account Check Your Dm!`)
      .setFooter("Onyx gen")
      .setColor("GREEN")


    const timer = new Discord.MessageEmbed()
      .setTitle("COOLDOWN IS ON PROGRESS!")
      .setDescription(`**Hey** ${message.author.username}, Please wait __**15**__ minutes before trying Again.`)
      .setFooter("Buy Premium For 5 Minutes Cooldown")
      .setColor("RED")


     


    if (talkedRecently.has(message.author.id)) {
      message.channel.send(timer);
    } else {



      // the user can type the command ... your command code goes here :)


      
      //steam
     

      const choices = [
        "**Out Of Stock**"
      ];
      const response = choices[Math.floor(Math.random() * choices.length)];

      const non = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription("You Can Not Generate, You Have To BE Whitelisted Dm A Admin!")
      .setFooter("Onyx Gen")
      .setColor("RED")
     

      const done = new Discord.MessageEmbed()
      .setTitle("Heres Your Account!")
      .setDescription(response + " You can Regenerate After 15 Minutes!")
      .setFooter("Buy Premium For 5 Minutes Cooldown")
      .setColor("GREEN")


      if (!message.member.roles.cache.find(r => r.name === "Whitelisted")) return message.channel.send(non);
      if (message.member.roles.cache.find(r => r.name === "Whitelisted"))
      message.author.send(done);
      message.channel.send(wrong);


      // Adds the user to the set so that they can't talk for a minute
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 10);
    }


  }
}