const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const talkedRecently = new Set();

module.exports = class SteamCommand extends BaseCommand {
  constructor() {
    super('minecraft', 'accounts', []);
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
        "embrotitan@gmail.com:Hornets123!",
        "miko.domik28@gmail.com:MikoDomik2003",
        "davidzhen@live.com:Jelly4ever19!",
        "fudgumz13@gmail.com:Lokonlogan13!",
        "palusdamian@gmail.com:Cedecko1234!",
        "lean.mean.media.machine@gmail.com:Varunkal1!",
        "sillymarkayla@gmail.com:Saleena@02",
        "ijustturned5@hotmail.com:Cowgirl85",
        "pierre.lemon00@gmail.com:Pierrelemon00",
        "dlpdesigned@gmail.com:Patrick54!",
        "caleblobato1234@gmail.com:Caleb1281",
        "robin.truemper@web.de:Takamine1996!",
        "darkblade166@gmail.com:Abomination1!",
        "alyssamwt@gmail.com:Awesome129",
        "caabye@live.dk:Misima74",
        "dixo_oilers_rock@hotmail.com:Oilers123!",
        "mdeloach42@gmail.com:42Chickens!",
        "maximilian32@web.de:Lerokcoway32",
        "andreas1mitrovic@gmail.com:Andreassa344!",
        "mcorralm2001@gmail.com:Marcorox56!",
        "dissapointingunicorn.jk@gmail.com:Snatch19766!",
        "tobymaple@live.co.uk:Hobson99",
        "sam659568@gmail.com:Sceeter123",
        "carsoncooper@yahoo.com:Hewitt79!",
        "reed.bair@gmail.com:1Corinth123!",
        "Johannes.Bjondal@Outlook.com:Johannes2000!",
        "ryanm780022@gmail.com:Reve21345",
        "etentenier@gmail.com:Milo2846!",
        "jackbeanz124@gmail.com:Jackbean1!",
        "matthew.alpert@gmail.com:Bosco3123!",
        "jan.manten@gmx.net:Jm401071!",
        "seanjohn1247@yahoo.com:Pimpin17!",
        "lucasrox999_2@hotmail.com:Muffin1234",
        "nicoicon2013@icloud.com:Nico5122!",
        "optiplex725@gmail.com:Kelley23!",
        "adawghunter6@gmail.com:Adawg678",
        "dobbywoof123@gmail.com:Bobjoe123!",
        "shteyndaniel6@gmail.com:Thisroblox00",
        "fournierlou@hotmail.ca:Wapiti345!",
        "cauderlier95@gmail.com:Freebox35!",
        "timmcgann13@gmail.com:Giants13!",
        "zackzintak@hotmail.com:Zackzack258!",
        "erik_esqueda@yahoo.com:Coolkid17",
        "camronvargas@gmail.com:Jhcp94pl",
        "n.huettmann@outlook.de:Nino@25355",
        "medfelix23@hotmail.com:Plaintext23",
        "vincent.thoene@gmx.de:Joda13052001",
        "luckyyt306@gmail.com:Lucaeder03092002",
        "naybaka97@gmail.com:Pewdiepie!12",
        "jasminewehrbein@yahoo.com:Nicolette13!",
        "lg56d7@gmail.com:Luisgm11",
        "ffoliveira2005@gmail.com:Lipe1810",
        "ziegelsdorfdanny1997@hotmail.de:Paradox!!!45",
        "justincornell979@gmail.com:Kindmat66!",
        "stejnar.j@email.cz:Stejnys1001",
        "camicontardol@gmail.com:camila123ABC",
        "zhiend1234561@gmail.com:Binhlkvn1!",
        "mpsbiuro@wp.pl:Wiktor20!",
        "elijahtrice3@gmail.com:Elijah1106!",
        "hergenreterb01@gmail.com:Maridon70!",
        "fadrian725@gmail.com:Ivaneschido1$",
        "buzzboze954@gmail.com:Buzzboze753!",
        "emilioletalleres@gmail.com:Elfanduby1!",
        "mbomengen026@gmail.com:MatBom18!",
        "svendrozd2016@gmail.com:Sven1608!",
        "slaveydavon@gmail.com:Watergate11!",
        "chelsea_sm99@yahoo.com:Cheche4542!",
        "napredja@gmail.com:Krevet23!",
        "yosu1991@gmail.com:Leonidas300!",
        "alex13brodeur@gmail.com:Emma1969!",
        "angrybulls2211@icloud.com:Poit1234.",
        "nathanthomasf@yahoo.com:TenorGuy1!",
        "jaxval0324@gmail.com:Tpv090868!",
        "oscarb20034@gmail.com:ozcar123",
        "jaeger.dennis1@gmail.com:Lasvegas2!",
        "lilgamer561@gmail.com:Scolib17!",
        "siennaharding@me.com:Pineapple1!",
        "erickluizcascaeslopes@hotmail.com:bruna19101988",
        "jamesjpmess@gmail.com:BeeBoo16!",
        "twasson97@gmail.com:Wipeout1!",
        "guganogueira99@gmail.com:Skater666!",
        "niiqhthdx@hotmail.com:tomheuer2004",
        "birobence3bb@gmail.com:Kecske12",
        "aclavette32@gmail.com:Mysonis11$",
        "maayanmagal@gmail.com:Qaz24680!",
        "lillianbutler52402@yahoo.com:Horses15!",
        "mxmonster30@aol.com:Ovalle30",
        "jojomunson57@gmail.com:Dead4514",
        "johnnyhuckins94@gmail.com:John1394!",
        "masonmcguire2010@yahoo.com:Popers20!",
        "hugorycroft@icloud.com:B0Dger#2",
        "desnohd@gmail.com:Der_desno0011",
        "nathwilliams96@hotmail.com:Taarabt7!",
        "fabio.bott@web.de:5gk0yFabio",
        "stefvandam14@gmail.com:Microsoft23001",
        "TaliaColombo95@gmail.com:TaiTai827!",
        "dalvin.mapp@gmail.com:Blkchd30",
        "reganlee04@hotmail.com:Bolton04",
        "mdgibson2001@gmail.com:Predator102345",
        "tmoharrer20@gmail.com:TeryTery998!",
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
      }, 900000);
    }


  }
}