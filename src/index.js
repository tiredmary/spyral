require("dotenv").config()
const fs = require("fs")

const { Client, Collection, ActivityType, GatewayIntentBits } = require("discord.js")

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages]})
client.commands = new Collection()

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})

client.once("ready", () => {
    console.log(`Ready! Logged in as ${client.user.tag}! I'm on ${client.guilds.cache.size} guild(s)!`)
    client.user.setActivity({name: "mit Wumpus", type: ActivityType.Playing})
})

client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return

    const command = client.commands.get(interaction.commandName)

    if(command) {
        try {
            await command.execute(interaction)
        } catch(error) {
            console.error(error)

            if(interaction.deffered || interaction.replied) {
                interaction.editReply("Es ist ein Fehler beim ausführen aufgetreten!")
            } else  {
                interaction.reply("Es ist ein Fehler beim ausführen aufgetreten!")
            }
        }
    }
})


client.login(process.env.DISCORD_BOT_TOKEN)