This is an app based on Node js for wellness reminders.
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
Then I scheduled to push the message every 5th minute so it is easier to check.

```javascript
function sendWellnessMessage() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex].message;
  console.log(message + 'printing!')
  // Send Pushover notification
  push.send("Wellness Reminder", message, handlePushoverResponse);
}
```

Every time ``sendWellnessMessage`` is called, it generates a random number, picking a random message from the messages.json dump.

At first try, I couldn't detect if the message was being sent or not.
<img width="572" alt="first issue" src="https://github.com/JXINN1/06_assignment/assets/146362069/c6d9dceb-6e29-4c24-8b38-51cca3dfa7fb">

So I added the log message whenever a message is being pushed.
<img width="564" alt="second issue" src="https://github.com/JXINN1/06_assignment/assets/146362069/8fc987e1-e92d-4af1-8840-c04f625d117b">

Also, I added the function regardless of the cron scheduled message at the beginning of the message reminding there will be messages generated every 5th minute.

```javascript
push.send("Wellness Reminder", "Hi this is your Wellness Reminder. I will be sending you wellness reminders every 5th min!", handlePushoverResponse);
```

<img width="1009" alt="third issue" src="https://github.com/JXINN1/06_assignment/assets/146362069/7c5d0991-5fb8-4636-b4b2-928427b7f54c">

As you can see, ``pm2 log`` shows all the messages that are pushed.
<img width="1208" alt="pm2 run2" src="https://github.com/JXINN1/06_assignment/assets/146362069/b2a3a590-9a41-4537-9212-e47d8ab35ab0">

Finally, this is the messages that are sent to my phone:

![Image (1)-1](https://github.com/JXINN1/06_assignment/assets/146362069/18a28f9a-34d9-4025-bbae-c8aa5d9e1bc5)
