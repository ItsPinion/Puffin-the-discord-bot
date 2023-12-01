const { SlashCommandBuilder, avater } = require('discord.js');

module.exports = {
  cooldown: 5,
  data: new SlashCommandBuilder()
    .setName('ip')
    .setDescription('Provides IP addresses for the minecraft server!'),
  async execute(interaction) {
    await interaction.reply(`
    ### IP addresses for Danion MC:
    - danionmc.ddns.net:2445
    - 147.185.221.17:2445
    `);
  },
};