const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));
//----------------------------------------//
const Discord = require("discord.js");
const { Client, MessageEmbed, MessageAttachment } = require("discord.js");
const client = new Discord.Client();
const Token = process.env['Token']
const general = process.env['General']
const facebook = "https://www.facebook.com/GAMINGMFK";
const tiktok = "https://vm.tiktok.com/ZM8vjyUxu/";
client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith(">say")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let texto = message.content.slice(4);
      client.channels.resolve(general).send(texto);
    } else {
      return message.channel.send("No tienes permisos para usar este comando");
    }
  }

  if (message.content.startsWith(">facebook")) {
    client.channels.resolve(general).send(facebook);
  }

  if (message.content.startsWith(">tiktok")) {
    client.channels.resolve(general).send(tiktok);
  }

});

client.login(Token);

