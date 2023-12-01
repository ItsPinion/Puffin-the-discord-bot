const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Greets the user!"),
  async execute(interaction) {
    await interaction.reply(`Hello <@${interaction.user.id}>! How can I assist you today?`);
  },
};
