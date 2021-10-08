const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
module.exports = class EnablegenCommand extends BaseCommand {
  constructor() {
    super('disablegen', 'modration', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have enough perms to use this cmd!")
    const channelId = "825338558603591700"
    const guild = client.guilds.cache.get("822455621315723285");
    const channel = guild.channels.cache.get(channelId);
    const role = message.guild.roles.cache.find(r => r.name === "Whitelisted-Premium")
    let embed = new Discord.MessageEmbed()
      .setTitle("Successfully Disabled Gen")
      .setDescription(`Gen Has Been Disabled. If You Use Gen Out Of #free-gen Channel You Get Blacklisted.`)
      .setTimestamp()
      .setColor("GREEN")
    channel.updateOverwrite(role, {
        SEND_MESSAGES: false
    })
    await channel.send(embed)

  }
}