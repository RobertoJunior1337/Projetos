require('../index')

const Discord = require('discord.js');
const client = require('../index');
var colors = require('colors');

//client.on("ready", () => {
 //   console.log(`Servidor onde estou:\n`.cyan,client.guilds.cache.map((guild) => guild.name).join('\n').brightCyan)
//})

client.on(`ready`, () => {
    console.clear() 
    console.log(`👻  | Bot logado com sucesso em ` + client.user.username + `
👻  | Bot conectado a DataBase
👻  | Desenvolvido por Rbzn`);
  });

  client.on("ready", () => {
    const messages = [
        `.gg/luckscommunity ❤️‍🔥`,
        `.gg/luckscommunity 🥏`,
        `.gg/luckscommunity 💸`,
    ]

    var position = 0;

        setInterval(() => client.user.setPresence({
            activities: [{
                name: `${messages[position++ % messages.length]}`,
                type: Discord.ActivityType.Streaming,
                url: 'https://www.twitch.tv/'
            }]
        }), 1000 * 10);
    
        client.user.setStatus("dnd");
    });