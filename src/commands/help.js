const { MessageFlags, ButtonStyle, ButtonBuilder, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName("help").setDescription("View all commands"),
    async execute(interaction) {
        // AUSGEFÜHRTER CODE

        const generalBtn = new ButtonBuilder()
            .setCustomId('general')
            .setLabel('🤖')
            .setStyle(ButtonStyle.Primary)

        const moderationBtn = new ButtonBuilder()
            .setCustomId('moderation')
            .setLabel('🛡️')
            .setStyle(ButtonStyle.Primary)

        const musicBtn = new ButtonBuilder()
            .setCustomId('music')
            .setLabel('🎵')
            .setStyle(ButtonStyle.Primary)

        const funBtn = new ButtonBuilder()
            .setCustomId('fun')
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
    }
}