const commando = require('discord.js-commando');
const bot = new commando.Client();


bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")


bot.login('MzcwMTY1MTg0Mjg0NzIxMTYz.DMjHXw.U4yQKkyO2y97bgGb4brX_D0f-JM');