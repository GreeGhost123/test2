const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535494010656129044")
setInterval(function() {
channel.send(`sorry kandire spam bache itzad lia credits berojola matmss7eche had channel`);
}, 30)
})

client.login(process.env.BOT_TOKEN);