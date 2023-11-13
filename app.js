require('dotenv').config()
var cron = require('node-cron')
var Pushover = require('node-pushover');
const messages = require('./messages.json');

var push = new Pushover({
  token: process.env.APP_TOKEN,
  user: process.env.USERKEY
});
var fs = require('fs');
var message = JSON.parse(fs.readFileSync('./messages.json','utf8'));



cron.schedule('*/5 * * * *', sendWellnessMessage)

// Function to send a random wellness message
function sendWellnessMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex].message;
  console.log(message + 'printing!')
  // Send Pushover notification
  push.send("Wellness Reminder", message, handlePushoverResponse);
}

// Handle Pushover response (including errors)
function handlePushoverResponse(error, result) {
    if(error) console.log('error:', error)
    console.log(result)
}


console.log('Wellness notifier started. Waiting for scheduled messages...');

push.send("Wellness Reminder", "Hi this is your Wellness Reminder. I will be sending you wellness reminders every 5th min!", handlePushoverResponse);
