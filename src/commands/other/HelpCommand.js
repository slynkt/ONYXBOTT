const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const pagination = require('discord.js-pagination');


module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'other', []);
  }

  async run(client, message, args) {

    const moderation = new Discord.MessageEmbed()
      .setTitle('Moderation')
      .addField('`o!whitelist`', 'Whitelist a member via mention or ID', true)
      .addField('`o!blacklist`', 'Blacklist a member via mention or ID', true)
      .addField('`o!enablegen`', 'Enables The Gen', true)
      .addField('`o!disablegen`', 'Disables The Gen', true)
      .setTimestamp()
      .setFooter(`Onyx Gen | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

  

      const gamingGenerator = new Discord.MessageEmbed()
      .setTitle('Gaming Account Generator')
      .addField('`o!steam`', 'Generates a Steam Account!')
      .addField('`o!minecraft`', 'Generates a Minecraft Account!')
      .addField('`o!uplay`', 'Generates a Uplay Account!')
      .setTimestamp()
      .setFooter(`Onyx Gen | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

      const moviesGenerator = new Discord.MessageEmbed()
      .setTitle('Movies Account Generator')
      .addField('`o!netflix`', 'Generates a Netflix Account!')
      .addField('`o!disney`', 'Generates a Disney+ Account!')
      .setTimestamp()
      .setFooter(`Onyx Gen | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

      const musicGenerator = new Discord.MessageEmbed()
      .setTitle('Music Account Generator')
      .addField('`o!spotify`', 'Generates a Spotify Account!')
      .addField('`o!unknown`', 'Generates a unknown Account!')
      .addField('`o!unknown`', 'Generates a unknown Account!')
      .setTimestamp()
      .setFooter(`Onyx Gen | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)

      const vpnGenerator = new Discord.MessageEmbed()
      .setTitle('VPN Account Generator')
      .addField('```o!nordvpn```', 'Generates a Spotify Account!')
      .addField('`o!unknown`', 'Generates a unknown Account!')
      .addField('`o!unknown`', 'Generates a unknown Account!')
      .setTimestamp()
      .setFooter(`Onyx Gen | Help Command | Need Help? Join Our Discord Server https://discord.gg/pnZVuWKcfv`)



    const pages = [
      moderation,
      moviesGenerator,
      gamingGenerator,
      musicGenerator,
      vpnGenerator,
      
      
     
    ]

    const emojiList = ["⏪", "⏩"];

    const timeout = '1200000';

    pagination(message, pages, emojiList, timeout)
  }
}