const { ButtonBuilder, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder } = require("@discordjs/builders")
const { ButtonStyle } = require("discord-api-types/v9")
const { MessageFlags } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder().setName("coinflip").setDescription("Flip a coin"),
    async execute(interaction) {
        // AUSGEFÜHRTER CODE
        var rnd = Math.floor(Math.random() * 2 + 1)
        if (rnd == 1) {
            await interaction.reply({content: 'It\'s heads!', flags: MessageFlags.Ephemeral});
        } else {
            await interaction.reply({content: 'It\'s tails!', flags: MessageFlags.Ephemeral});
        } 
        
    }
}