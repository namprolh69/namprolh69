'use strict';

// [START gae_node_request_example]
const express = require('express');
const TeleBot = require('telebot');
const bot = new TeleBot({
  token: '1110781880:AAGZKCyatu7cQRkgL5PMULjshzeJd2Opujo',
  usePlugins: ['askUser']
});
// On every text message
// bot.on('text', msg => {
//   let id = msg.from.id;
//   let text = msg.text;
  
//   return bot.sendMessage(id, `Bạn nói: ${ text }, nghĩa là gì vậy?`);
// });

// On start command
bot.on('/hi', msg => {

  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, 'Bạn tên gì?', {ask: 'name'});
});
// On start command
bot.on('ask.name', msg => {

  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, 'OK cảm ơn bạn ', {ask: 'baonhieu'});

});
// On start command
bot.on('/baonhieu', msg => {

  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, `ban muon hoc khoa nao? 
  1. khóa học grapql
  2. khóa học cloneairbnb `, {ask: '1.2'});

});
// On start command
bot.on('ask.1.2', msg => {

  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, 'Bạn mua để làm gì ', {ask: 'ok'});
});
// On start command
bot.on('/giabaonhieu', msg => {
  
  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, `1. giá khóa học grapql 19$
  2. giá khóa học cloneairbnb 199$`, {ask: '1 2'});
});
// On start command
bot.on('ask.1 2', msg => {

  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, `bạn có muốn mua luôn không : 
  1. CÓ 
  2. KHÔNG 
  THANKS`, {ask: '2'});
});
// On start command
bot.on('ask.2', msg => {

  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, 'OK cảm ơn bạn ', {ask: 'OK'});

});

bot.on('/ok', msg => {

  const id = msg.from.id;
  const name = msg.text;
  // Ask user name
  return bot.sendMessage(id, 'HẾT RỒI ĐỪNG GÕ NỮA ', {ask: 'HAHA'});

});

// On start command
bot.on('ask.HAHA', msg => {

  const id = msg.from.id;
  
  // Ask user name
  return bot.sendMessage(id, `NAM ĐẸP TRAI NHẤT THANH ĐA :))
  GÕ NỮA TAO THẺO CU NHÉK :))`, {ask: 'price'});

});



// Ask name event
// bot.on('ask.price', msg => {

//   const id = msg.from.id;
//   const name = msg.text;

//   // Ask user age
//   return bot.sendMessage(id, `Rất vui được gặp bạn, ${ name }! Bạn bao nhiêu tuổi?`, {ask: 'age'});

// });

// // Ask age event
// bot.on('ask.age', msg => {

//   const id = msg.from.id;
//   const age = Number(msg.text);

//   if (!age) {

//       // If incorrect age, ask again
//       return bot.sendMessage(id, 'Nhập tuổi cha ơi! không phải nhập cái đó', {ask: 'age'});

//   } else {

//       // Last message (don't ask)
//       return bot.sendMessage(id, `Ồ, bạn đã ${ age } tuổi rồi. Ngon!`);

//   }

// });

bot.connect();

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
