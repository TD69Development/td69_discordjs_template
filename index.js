const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`td69development.com`);
});


client.on('message', msg => {
    if (msg.content === 'test') { // COMMAND TO TRIGGER
      msg.reply('Command'); // REPLIED MESSAGE
      msg.react('🖕'); // REACT TO MESSAGE
    }
  });
client.login('token');