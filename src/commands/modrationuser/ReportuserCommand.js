const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class ReportuserCommand extends BaseCommand {
  constructor() {
    super('reportuser', 'modrationuser', []);
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
    .setDescription('You Need To **State** a Reason ```o!report @user reason```')
    .setColor("RED")
    
  const Notin = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('Please Type The Account Info that You Want To Report ```op!report onyxtest@gmail.com:password reason```')
    .setColor("RED")
  const nonick = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription(`User Is Not Whitelisted!`)
    .setColor("RED")

    message.delete();

    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

    if(rMember.hasPermission("BAN_MEMBERS")) return message.channel.send(permisionembed);

    
    if(!args[1]) return message.channel.send(embedd)

    const guild = client.guilds.cache.get("822455621315723285");
    const channelId = "826485823863259187"
    const channel = guild.channels.cache.get(channelId);

    

    const reportEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTimestamp()
    .setFooter("Onyx Gen", message.guild.iconURL)
    .setAuthor("A User Has Been Reported", rMember.user.iconURL)
    .addField("> Reported User", `${rMember}`)
    .addField("> Reported User ID", ` ${rMember.id}`, true)
    .addField("> Reported By", `${message.member}`)
    .addField("> Reported By UserID", `${message.member.id}`, true)
    .addField("> Reason", `${args.slice(1).join(" ")}`);

    channel.send(reportEmbed);
  }
}