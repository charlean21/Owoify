let util = require('util');
let http = require('http');
let Bot = require('@kikinteractive/kik');

let bot = new Bot({
    username: 'owoify',
    apiKey: 'dd2fac96-59d8-4df5-80a0-69e10f6edb62',
    baseUrl: 'https://e59e7632.ngrok.io/incoming'
});

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
    var input = message.body;
    var inputArray = [];

    var num = Math.floor((Math.random() * 8) + 0);
    var prefix = ["OwO", "UwU", "x3", "^w^", ">w<", "^.^", "~", "*", "!"];
    inputArray.push(prefix[num] + " ");

    for (var i = 0; i < input.length; i++) {
        if (input.charAt(i) == 'l' || input.charAt(i) == 'r') {
            inputArray.push('w')
        } else if (input.charAt(i) == 'L' || input.charAt(i) == 'R') {
            inputArray.push('W')
        } else if (input.charAt(i) == '!') {
            inputArray.push('!!')
        } else if (input.charAt(i) == '?') {
            inputArray.push('??')
        } else {
            inputArray.push(input.charAt(i))
        }
    }
    var num = Math.floor((Math.random() * 5) + 0);
    var suffix = ["OwO", "UwU", "x3", "^w^", ">w<", "^.^"]
    inputArray.push("! " + suffix[num]);
    var output = inputArray.join("");

    message.reply(output);

    console.log(message.from + ": " + input);
    console.log("");
    console.log("OWOIFY: " + output);
    console.log("");
});

let server = http
    .createServer(bot.incoming())
    .listen(8080, (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }
        console.log('\033[2J');
        console.log(`OwO is active`);
        console.log("");
    });
