const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports = class SteamCommand extends BaseCommand {
  constructor() {
    super('netflix', 'movies', []);
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



      const choices = [
        "cameron.quirozs@yahoo.com:Dallas#11 | Disney Plus Yearly",
        "caitlin.howex@icloud.com:logan989 | Disney Plus Monthly - UK ",
        "brendan.rose32223@gmail.com:F1y1ngmidget | Disney Plus Monthly with 7 Day ",
        "c.bolting5@gmail.com:343guiltyspark | Disney Plus Monthly - US - XBox",
        "buffington.drew@gmail.com:Cookie@3 | Disney Plus Monthly - US ",
        "briannaf225@gmail.com:Cities2012 | Disney+, Hulu, and ESPN+ - Hulu Sold w/ No Ads",
        "brutishmadex@hotmail.com:Hilson117! | Disney Plus Monthly - AUS - PS4",
        "brentcarlson21@hotmail.com:Car93320 | Disney Plus - US - V",
        "breanna_21@hotmail.com:kronos21 | Disney Plus Monthly - US ",
        "cameron_laroche@live.ca:Ontario553 | Disney Plus Monthly - CAN ",
        "cdjames85@gmail.com:James1780 | Disney Plus Monthly",
        "brenzellpannell@ymail.com:Kparker91 | Disney Plus Monthly",
        "brandongraham222@gmail.com:Deyondaime2 | Disney Plus Monthly - US ",
        "catwomanxp@hotmail.com:Leopard02 | Disney Plus Monthly",
        "chancesmith9898@gmail.com:baconburger98 | Disney Plus Non-Recurring - US - Verizon",
        "busywith3boys@gmail.com:1Saddas1 | Disney Plus Monthly Pre-Sales - US ",
        "callipsn@web.de:cosmi123 | Disney Plus Monthly - DE",
        "carlieacurato1@gmail.com:deeamberanna3 | Disney Plus - US - Verizon - Standalone",
        "breanna.halsey@gmail.com:Nugget19! | Disney Plus Monthly with 7 Day ",
        "bravo.eddie10@gmail.com:Bronco10 | Disney Plus Monthly",
        "bruno_ferreira@verizon.net:Bf141849468$ | Disney Plus Monthly - US ",
        "bs2481@hotmail.com:lips4me | Disney Plus Monthly - US ",
        "brian.urlik@icloud.com:1992jeep | Disney Plus Monthly with 7 Day ",
        "brandonkunz1508@yahoo.com:Notredame1 | Disney+, Hulu, and ESPN+",
        "certa7@gmail.com:earthbound4477 | Disney Plus Monthly - US ",
        "cforsyth27@blueyonder.co.uk:Wallace123 | Disney Plus Non-Recurring - GB - O2 ",
        "brianiscool@y7mail.com:begbb33 | Disney Plus Monthly with 7 Day ",
        "cat6648@gmail.com:Soccer34! | Disney Plus Monthly with 7 Day ",
        "cardall181@yahoo.com:04Kiddos! | Disney Plus Non-Recurring - US - Verizon",
        "breedenjosh@hotmail.com:Ilovemybaby13$ | Disney Plus Monthly with 7 Day ",
        "captjon1@aol.com:1860cccc | Disney Plus Yearly - US ",
        "candacebrownfield@gmail.com:Softball4318",
        "carinagonzalezgarcia@hotmail.com:Fatima20 | Disney Plus Monthly - US ",
        "brandonmtroll@gmail.com:hydra2099 | Disney Plus Monthly with 7 Day ",
        "calvert.williams@gmail.com:3edcCDE# | Disney Plus Monthly with 7 Day ",
        "caleb_scherer@yahoo.com:Unctarheels5 | Disney Plus Monthly Pre-Sales - US ",
        "careytapia14@yahoo.com:Purple2180 | Disney+, Hulu, and ESPN",
        "brooke-moore123456@hotmail.com:brooke94 | Disney Plus Monthly - AUS - LG",
        "celina.wittig@freenet.de:Kira1603 | Disney Plus Monthly - DE ",
        "byerskay@hotmail.com:Kiera0624! | Disney Plus Monthly - US ",
        "cesar_arturo13@live.com:Mexican13 | Disney Plus Yearly with 7 Day ",
        "briantorres711@gmail.com:A7e36151 | Disney Plus Non-Recurring - US - Verizon",
        "cafussy11@gmail.com:Amanda22 | Disney Plus Non-Recurring - US - Verizon",
        "c.quartisha@yahoo.com:abadbitch1 | Disney Plus Monthly",
        "ch.mika@gmx.at:widder1616 | Disney Plus Monthly",
        "capello.val@gmail.com:val261995 | Disney Plus Monthly - FR ",
        "charles_9_7@hotmail.fr:Sylvie1972 | Disney Plus Monthly",
        "cbooth1@roadrunner.com:Boonedog1 | Disney Plus - US - Verizon - Standalone",
        "brieanna_johnson@hotmail.com:Please12! | Disney Plus - US - Verizon - Standalone",
        "cassius.marine@orange.fr:LOve7914 | Disney Plus Monthly - FR ",
        "brit-michelle@hotmail.com:Bailey08! | Disney Plus - US - Verizon - Standalone",
        "carolinkreuder@web.de:park1998 | Disney Plus Monthly with 7 Day ",
        "bull3tdodg3r@hotmail.com:Vegeta13 | Disney Plus - US - Verizon ",
        "c.thiebaut974@laposte.net:Kerryjames1 | Disney Plus Non-Recurring - FR - Canal Plus ",
        "camilleallais@hotmail.fr:Anouke.56 | Disney Plus Monthly - FR ",
        "champ0305@gmail.com:Aaliyah23 | Disney Plus - US - Verizon ",
        "carloherrera1998@gmail.com:Nissanr32 | Disney Plus Monthly - AUS ",
        "cameronbell54@yahoo.com:Cameronbell1 | Disney Plus Monthly - US ",
        "caileechristian16@gmail.com:Cadetc2019 | Disney Plus Monthly with 7 Day ",
        "brofist5401@gmail.com:Gadegaard1 | Disney Plus Monthly",
        "brock.michael@gmail.com:Grady1940 | Disney Plus Monthly",
        "casperprovo@sbcglobal.net:Mmouse11 | Disney Plus Monthly with 7 Day ",
        "brunnoalencar9@gmail.com:flamengo12345 | Disney Plus Monthly - BR ",
        "briannarico15@gmail.com:Rocket911! | Disney Plus Monthly - US ",
        "bryangonzalez3309@gmail.com:Mason702650 | Disney Plus Monthly with 7 Day ",
        "chareasejackson@gmail.com:Shylas#1 | Disney Plus Monthly with 7 day ",
        "bsoriano@gmail.com:BaLi1620@ | Disney Plus Monthly with 7 Day ",
        "casey_baughman@yahoo.com:cebceb2020 | Disney Plus Monthly - US ",
        "camillejosseeugenie@gmail.com:Amarante1999! | Disney Plus Monthly",
        "briperry28@gmail.com:September13 | Disney Plus - US - Verizon - Standalone",
        "caramariesandoval@gmail.com:cara4636 | Disney Plus Monthly",
        "brittneyboeder@live.com:Bb10491359! | Disney Plus Non-Recurring - US - Verizon",
        "c.c.bukowski@gmail.com:Minor149 | Disney Plus Monthly with 7 Day ",
        "cameronstraatmann@yahoo.com:Happysac2 | Disney Plus Monthly - US ",
        "chara0229@gmail.com:chara2004 | Disney Plus Monthly with 7 Day ",
        "carsonk22@hotmail.com:Carcar22! | Disney Plus Monthly - US ",
        "ceclanmarian@gmail.com:ceclan_1992 | Disney Plus Monthly - ES ",
        "bsher63@gmail.com:63giantlb | Disney Plus Yearly",
        "brendanadia77@yahoo.com:fortress1 | Disney Plus - US - Verizon - Standalone",
        "brooke.campbell71@gmail.com:31171Cats | Disney Plus Monthly with 7 Day ",
        "catsrulerebecca@gmail.com:4541665p | Disney Plus Monthly - US",
        "cannonball232323@yahoo.com:boozer1971 | Disney Plus Non-Recurring - US - Verizon",
        "brandondelprado@yahoo.com:Tyson315 | Disney Plus Monthly with 7 Day ",
        "carlotula_26_96@hotmail.com:Carlota26 | Disney Plus Monthly with 7 Day ",
        "c_duncan97@live.com:Banana97 | Disney Plus Non-Recurring - GB - O2 ",
        "cam2000@live.com.au:Zuse1590 | Disney Plus Monthly - AUS ",
        "camwiegman22@gmail.com:Pointers22 | Disney Plus Monthly - US",

      ];
      const response = choices[Math.floor(Math.random() * choices.length)];

      const non = new Discord.MessageEmbed()
        .setTitle("Something Went Wrong")
        .setDescription("You Can Not Generate, You Have To **BE** Whitelisted, Dm A Admin!")
        .setFooter("Onyx Gen")
        .setColor("RED")


      const done = new Discord.MessageEmbed()
        .setTitle("Heres Your Account!")
        .setDescription(response + " You can Regenerate After 15 Minutes!")
        .setFooter("Buy Premium For 5 Minutes Cooldown")
        .setColor("GREEN")


      if (!message.member.roles.cache.find(r => r.name === "Whitelisted")) return message.channel.send(non);
      if (message.member.roles.cache.find(r => r.name === "Whitelisted"))
      message.channel.send(wrong);
      message.author.send(done);



      // Adds the user to the set so that they can't talk for a minute
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 900000);
    }


  }
}