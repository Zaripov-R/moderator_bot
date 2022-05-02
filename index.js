require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Welcome, ${ctx.message.from.first_name}`));
bot.on('message', async ctx => {
    if (ctx.message.text !== 'undefined') {
        const message = ctx.message.text.toLowerCase();
        const message_id = ctx.message.message_id;

        if (message.includes('key')) {
            ctx.deleteMessage(message_id);
            ctx.reply('Message deleted - forbidden words');
        }
    }
})

bot.launch();
console.log('Bot start');