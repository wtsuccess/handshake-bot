const TelegramBot = require("node-telegram-bot-api");
const {config} = require('dotenv');
config();
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Create Bet",
            web_app: {
              url: `https://telegrambot-bet.netlify.app/create?username=${msg.chat.username}`,
            },
          },
          {
            text: "Active Bets",
            web_app: {
              url: `https://telegrambot-bet.netlify.app?username=${msg.chat.username}`,
            },
          },
        ],
      ],
    },
  };

  bot.sendMessage(chatId, "Wanna Bet?", opts);
});
