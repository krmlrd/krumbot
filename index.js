const TelegramBot = require('node-telegram-bot-api');

const bc = [
  'иди ты!',
  'а ты, случайно, не мой родственник?',
  'ой, йибааааааалысь дыкы гуууууси догорыыыыыы ногаааамы',
  'под пульт откашляй',
  'извините, но кто кого ебёть?',
  'до встречи в четверЬг!',
  'творческих узбеков!',
  'ну это ещё бабка надвое сказала',
  'чтоб у тебя хуй на пятке вырос!',
  'что ты выёбуешься, як кит на драбыни!',
  'у тебя рыльце-то в пушку!',
  'залупа петра великого!',
  'ух и дьявол)',
  'Тоша, ты же лулка!',
  'как по пизде ладошкой! *имитирует удары по пизде ладошкой*'
];

const tale = [
  '- себе не ври. ты сам по себе за все подряд хватаешься и тебе всегда нужен ктото кто будет тебя толкать. а я устала прости. 7 пытниц на неделе и ничего доведенного до ума-ни барабаны, ни вокал, а теперь еще и гитара. и похоже что ты не музыкант. ты скорее меломан или любитель. может так оказаться что и я меломан или любитель, но я работаю над тем что бы стать музыкантом. да ты прав, ничего не получится. я не хочу работать с человеком который не хочет работать и ребята тоже не хотят.',
];
// replace the value below with the Telegram token you receive from @BotFather
const token = '288763760:AAFOQ9Vk6GIOg2N3A7QSbmIhCJC3JnUQbcQ';

// Create a bot that uses 'polling' to fetch new updates (replaced by webhook)
const bot = new TelegramBot(token, {
  webHook: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
});
bot.setWebHook(`https://pure-refuge-34008.herokuapp.com/bot${token}`);

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, function (msg, match) {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message
//
//   var chatId = msg.chat.id;
//   var resp = match[1]; // the captured "whatever"
//
//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on('message', function (msg) {
//   var chatId = msg.chat.id;
//   var resp = bc[Math.floor(Math.random()*bc.length)];
//
//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, resp);
// });

bot.onText(/\/krumbot (.+)/, function (msg, match) {
  var chatId = msg.chat.id;
  var resp = match[1];
  if (match[1] == 'pasta') {
    resp = tale[Math.floor(Math.random()*tale.length)];
  }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/krumbot/, function (msg) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  var chatId = msg.chat.id;
  var resp = bc[Math.floor(Math.random()*bc.length)];

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});
