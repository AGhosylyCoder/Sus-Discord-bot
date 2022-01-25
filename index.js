const Discord = require("discord.js")
const generateImage = require("./generateImage")
require("dotenv").config()

const genereateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready",() => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi")
    {
        message.reply("Hello, World!")
    }
    if(message.content == "It's ALIVE!" || message.content == "its alive!")
    {
        message.reply("Yes, I am")
    }
})

const welcomeChannelId = "935413324835848202"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
    content: `<@${member.id}> Welcome to the server!`,
    files: [img]
})
    
})

client.login(process.env.TOKEN)