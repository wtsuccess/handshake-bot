const TelegramBot = require("node-telegram-bot-api");

const token = "6775479012:AAEprmfeVKPl5NZuVGgykplVcZLwpGQnVHQ";
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Create Bet Channel",
            web_app: {
              url: `https://telegrambot-bet.netlify.app/create?username=${msg.chat.username}`,
            },
          },
          {
            text: "Bet Channels",
            web_app: {
              url: "https://telegrambot-bet.netlify.app/",
            },
          },
        ],
      ],
    },
  };

  bot.sendMessage(chatId, "Choose an option:", opts);
});
