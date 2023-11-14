## Introduction
This is an app based on Node js for wellness reminders.
It is desgined to send to people's phone messages every 5th minute by sending them and remind the well-being.
First I generated different messages I wanted to send out to people and stored them in the messages.json file so it is easier to retrieve.

```javascript
[
    {
      "message": "🌿 Time for a breather! Take a short break, stand up, and stretch those limbs. Your body will thank you! 💆‍♂️ #SelfCareBreak"
    },
    {
      "message": "🌟 Wellness reminder: Small breaks make a big difference! Stand up, stretch, and recharge for a more productive you. 💪 #SelfCare #WellnessWednesday"
    },
    {
      "message": "⏰ Break time! Give yourself a moment to stretch and reset. Your body and mind will thank you for this little act of self-care. 🧘‍♀️ #WellnessReminder"
    },
    {
      "message": "🌈 Boost your well-being: Take a break, stretch it out, and breathe in positivity. Your mind deserves a little vacation too! 🌬️ #WellnessFirst"
    },
    {
      "message": "🚶‍♂️ Step away from the screen, stretch it out, and take a moment for yourself. Your body and mind will thank you for this act of self-love. 💖 #WellnessBreak"
    },
    {
      "message": "🌼 Wellness alert: Stand tall, stretch it out, and take a moment to breathe. Your body deserves a break, and so do you! 🌬️ #SelfCare"
    },
    {
      "message": "⚠️ Friendly reminder to pause, stretch, and breathe. Your well-being matters. Take a moment for yourself. 🌿 #WellnessMatters"
    },
    {
      "message": "🌞 Midday recharge: Stand up, stretch, and take a deep breath. A little self-care goes a long way! 💆‍♀️ #WellnessWednesday"
    },
    {
      "message": "🌱 Quick wellness break: Stretch those muscles, take a deep breath, and let go of any tension. Your body deserves this mini-vacation. 🧘‍♂️ #SelfCareReminder"
    },
    {
      "message": "🌺 Give yourself the gift of a break! Stand up, stretch, and take a mindful moment to reset. Your well-being is a priority. 💖 #WellnessPause"
    }
  ]
  
```
My Tokens are stored in .env files so its protected and is not published on Github. 

Then I scheduled to push the message every 5th minute so it is easier to check.

## Scedule using cron

```javascript
cron.schedule('*/5 * * * *', sendWellnessMessage)
```
Every time ``sendWellnessMessage`` is called, it generates a random number, picking a random message from the messages.json dump.

```javascript
function sendWellnessMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex].message;
  console.log(message + 'printing!')
  // Send Pushover notification
  push.send("Wellness Reminder", message, handlePushoverResponse);
}
```
## problems
At first try, I couldn't detect if the message was being sent or not. The "Wellness notifier started. Waiting for scheduled messages.." console log let me to detect if the app runs the way i desire.  

Also I added the log message whenever a message is being pushed. 
``pm2 log`` showed all the messages that are pushed.


![pm2_start](https://github.com/JXINN1/06_assignment/assets/146362069/eb794840-5cea-4534-97c6-08d64838ebfe)

Digital Ocean droplet and pm2 let me to run the project continuously, and I constantly checked with the monitor.

![pm2_stop](https://github.com/JXINN1/06_assignment/assets/146362069/cdedaede-dcdc-4f62-9870-fb032ebcd2a0)


Also, I added the function regardless of the cron scheduled message at the beginning of the message reminding there will be messages generated every 5th minute.
It is for introducing the purpose of the app as well as checking and reminding the schedule.

```javascript
push.send("Wellness Reminder", "Hi this is your Wellness Reminder. I will be sending you wellness reminders every 5th min!", handlePushoverResponse);
```

Finally, this is the messages that are sent to my phone:

![Image (1)-1](https://github.com/JXINN1/06_assignment/assets/146362069/0c5cefc6-a48a-4e52-aa43-66f66596d9ad)

