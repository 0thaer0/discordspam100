const Discord = require('bot.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('ready', async() => {
var server = "511551770657292299"; // ايدي السررفر
var channel = "511551770657292301";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(Ilovespam).channels.get(general).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , ')
    },305);
})

client.login("BOT_TOKEN");
