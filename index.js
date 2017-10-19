const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == 'ping') {
        message.reply('pong');
    }
});

bot.login('MzcwMTY1MTg0Mjg0NzIxMTYz.DMjHXw.U4yQKkyO2y97bgGb4brX_D0f-JM');