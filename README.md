# Nodejs Chat

I am going to make a chat app to learn the basics of nodejs.

Sources I used to learn:
<https://levelup.gitconnected.com/set-up-and-run-a-simple-node-server-project-38b403a3dc09>,
<https://nodejs.org/en/learn/getting-started/introduction-to-nodejs>,
<https://medium.com/@joekarlsson/complete-guide-to-node-client-server-communication-b156440c029>,
<https://www.npmjs.com/package/ws?activeTab=readme>,
<https://www3.ntu.edu.sg/home/ehchua/programming/webprogramming/NodeJS_Basics.html>,
<https://www.youtube.com/watch?v=wV-fDdHhGqs>

Usually, I would be logging (aka yapping) much more, but since all this info about Nodejs and backend web stuff was so new to me, I made an exception and only logged the big sources I used.

I tried not to look at any other Nodejs chat apps, because I didn't want to copy them, but <https://www.youtube.com/watch?v=wV-fDdHhGqs> is the closest I got to an actual chatting app.

For a bidirectional connection bt the server and client, I am using websockets.

The code now is very simple.
First, run `node server.js`.
Then, on a browser with the same computer, go to `localhost:8080`.

You should see a button, but that doesn't actually do anything.
To send messages, go to inspect and then console on the webpage, then run `const socket = new WebSocket('ws://localhost:8080');` and then `socket.send("Hi guys")`.

You should see `received: Hi guys` on the CLI where you ran `node server.js`.

I am going to commit now so ppl can see this version.

---

I added some new features:

- Sending json instead of the bare messages
- Adding email which is equivalent to usernames
- Server stores chatlog (as a local string variable, not as a file yet). Client can request and display chatlog

I will commit this to save the changes.
The client UI is pretty self explanatory.

If you are running the server, you can't actually do anything; just watch what happens.

I didn't intend for this, but having multiple clients at once actually works, the chats don't show up on the messages recieved section, but you can see it in the chatlog.
