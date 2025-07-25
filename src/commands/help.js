const { MessageFlags, ButtonStyle, ButtonBuilder, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName("help").setDescription("View all commands"),
    async execute(interaction) {
        // AUSGEFÜHRTER CODE

        const generalBtn = new ButtonBuilder()
            .setCustomId('help_general')
            .setLabel('🤖')
            .setStyle(ButtonStyle.Primary)

        const moderationBtn = new ButtonBuilder()
            .setCustomId('help_moderation')
            .setLabel('🛡️')
            .setStyle(ButtonStyle.Primary)

        const musicBtn = new ButtonBuilder()
            .setCustomId('help_music')
            .setLabel('🎵')
            .setStyle(ButtonStyle.Primary)

        const funBtn = new ButtonBuilder()
            .setCustomId('help_fun')
            .setLabel('🎉')
            .setStyle(ButtonStyle.Primary)

        const btnRow = new ActionRowBuilder()
            .addComponents(generalBtn, moderationBtn, musicBtn, funBtn)

        const helpEmbed = new EmbedBuilder()
            .setColor(0x00FF0066)
            .setTitle(":gear: 〢 Menu")
            .setDescription("**Choose which commands you want to see:**")
            .addFields(
                { name: ":robot: 〢 General", value: "Commands in no category"},
                { name: ":shield: 〢 Moderation", value: "Commands related to server moderation"},
                { name: ":notes: 〢 Music", value: "Commands related to the music-bot part"},
                { name: ":tada: 〢 Fun", value: "Commands related to the fun part"}
            )
            .setTimestamp()
            .setFooter({text: "by @tiredmary"})

        await interaction.reply({
            embeds: [helpEmbed],
            components: [btnRow], 
            flags: MessageFlags.Ephemeral
        })

        const filter = i => i.customId.startsWith('help_') && i.user.id === interaction.user.id
        const collector = interaction.channel.createMessageComponentCollector({filter, time: 60000})

        collector.on('collect', async i => {
            const menuType = i.customId.replace('help_', '')

            const subMenuEmbed = new EmbedBuilder()
                .setColor(0x00FF0066)
                .setDescription('**Here are the ' + menuType + ' commands**')
                .setTimestamp()
                .setFooter({text: "by @tiredmary"})
                switch (menuType) {
                    case "general":
                        subMenuEmbed.addFields(
                            {name: "/github", value: "Visit my github page"},
                            {name: "/ping", value: "Get a test respond"},
                            {name: "/info", value: "Get a quick information page about this bot"}
                        )
                        break;
                    case "moderation":
                        subMenuEmbed.addFields(
                            {name: "/ban", value: "Ban a user for a few days"},
                            {name: "/kick", value: "Kick a user"},
                            {name: "/timeout", value: "Timeout (text/voice mute) a user"},
                            {name: "/clear", value: "Clear a specified amount of messages in the channel"}
                        )
                        break;
                    case "music":
                        subMenuEmbed.addFields(
                            {name: "/play", value: "Play a song"},
                            {name: "/stop", value: "Stop the music entirely"},
                            {name: "/pause", value: "Pause the music"},
                            {name: "/queue", value: "Queue a new song"},
                            {name: "/skip", value: "Skip to the next song in the queue"},
                            {name: "/volume", value: "Change the volume"}
                        )
                        break;
                    case "fun":
                        subMenuEmbed.addFields(
                            {name: "/rps", value: "Play rock paper scissors"},
                            {name: "/meme", value: "Get a random meme"},
                            {name: "/quote", value: "Get a random quote"},
                            {name: "/tictactoe", value: "Play tic tac toe"}
                        )
                        break;
                
                    default:
                        await i.update({ content: 'Unbekanntes Menü ausgewählt.', flags: MessageFlags.Ephemeral})
                        break;
                }
                await i.update({
                    embeds: [subMenuEmbed],
                    components: [btnRow],
                    flags: MessageFlags.Ephemeral
                })


        })

    }
}

