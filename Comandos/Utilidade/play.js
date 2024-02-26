const Discord = require('discord.js')
const distube = require('distube')
module.exports = {
  name: "play",
  description: "musica",
  type: Discord.ApplicationCommandType.ChatInput,
  required: [
    {
      name: "nome",
      description: "nome da musica",
      type: Discord.ApplicationCommandOptionType.String,
      required: true
    }
  ],
  run: async(client, interaction) => {
    let musica = interaction.options.getString("nome")

    distube.play(client, musica)
  }
}