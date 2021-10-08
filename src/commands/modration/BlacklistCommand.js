const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class WhitelistCommand extends BaseCommand {
  constructor() {
    super('blacklist', 'modration', []);
  }

  async run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('You Dont Have **Permission** To Do that')
      .setImage(`https://media.giphy.com/media/Wrh8aL75aj4uZwuqta/giphy.gif`)
      .setColor("RED")
    const embedwrong = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('I Dont Have **Permission** To Do that')
      .setColor("RED")
    const embedd = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('You Need To **State** a User To Ban.')
      .setColor("RED")
    const Notin = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('The User Stated Is **Not** In The Server.')
      .setColor("RED")
    const nonick = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription(`User Is Already Blacklisted!`)
      .setColor("RED")
    const went = new Discord.MessageEmbed()
      .setTitle("Something Went Wrong")
      .setDescription('Something Went Wrong')
      .setColor("RED")
    var role = message.guild.roles.cache.find(r => r.name === "Whitelisted");
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permisionembed);
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(embedwrong);
    if (!message.member.roles.cache.find(r => r.name === "Whitelisted")) return message.channel.send(nonick);

    const MentionedMember = message.mentions.members.first();


    if (!MentionedMember) return message.channel.send(Notin);

    const done = new Discord.MessageEmbed()
      .setTitle(`You Have Been **Blacklisted** On ${message.guild.name}`)
      .setTimestamp();

    const Successfully = new Discord.MessageEmbed()
      .setTitle(`Successfully Blacklisted ${MentionedMember}`)
      .setTimestamp();
    await message.channel.send(Successfully);
    await MentionedMember.send(done).catch(err => console.log(err));
    MentionedMember.roles.remove(role);
  }
}