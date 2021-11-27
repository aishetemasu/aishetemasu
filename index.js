"scripts"; {
    "start";
    "node app.js"
};

const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();

client.on('message', message => {
    if (message.content.includes("oui")) return message.reply("stiti")
});


client.on('message', message => {
    if (message.content.includes("mais")) return message.reply("son")
});

function random(min, max) {
    min = Math.ceil(0);
    max = Math.floor(10);
    randnum = Math.floor(Math.random() * (max - min + 1) + min);
}

client.on('message', (message) => {
    if (message.content === `,daronne`) {
        random()
        if (randnum == 1) {
            message.reply("la daronne désigné est : **__rizlane__** <@810969690407043093> ");
            console.log(randnum);
        }

        if (randnum == 2) {
            message.reply("la daronne désigné est : **__laure__** <@856256731378221126> ");
            console.log(randnum);
        }

        if (randnum == 3) {
            message.reply("la daronne désigné est : **__rachida__** <@629565800163966986> ");
            console.log(randnum);
        }

        if (randnum == 4) {
            message.reply("la daronne désigné est : **__dalila__** <@452841805713506334> ");
            console.log(randnum);
        }

        if (randnum == 5) {
            message.reply("la daronne désigné est : **__mimomza__** <@722264853926117476> ");
            console.log(randnum);
        }

        if (randnum == 6) {
            message.reply("la daronne désigné est : **__anabelle__** <@605422294109519878> ");
            console.log(randnum);
        }

        if (randnum == 7) {
            message.reply("la daronne désigné est : **__natalie__** <@536990642589401121> ");
            console.log(randnum);
        }

        if (randnum == 8) {
            message.reply("la daronne désigné est : **__mireille__** <@563809132889767936> ");
            console.log(randnum);
        }

        if (randnum == 9) {
            message.reply("la daronne désigné est : **__nadia__** <@742015001442779138> ");
            console.log(randnum);
        }

        if (randnum == 10) {
            message.reply("la daronne désigné est : **__zita__** <@432937469554720779> ")
        }
    }
})


client.on('message', message => {
    if (message.content.includes("qui")) return message.reply("wi")
});


client.on('message', message => {
    if (message.content.includes("quoi")) return message.reply("feur")
});

client.build();

module.exports = client; //;-;