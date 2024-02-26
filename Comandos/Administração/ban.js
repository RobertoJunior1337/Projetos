const Discord = require('discord.js')

module.exports = {
  name: "ban",
  description: "banir usuario",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
      name: "usuario",
      description: "selecione um usuario",
      type: Discord.ApplicationCommandOptionType.User,
      required: true
    },
    {
      name: "motivo",
      description: "Motivo a ser banido",
      type: Discord.ApplicationCommandOptionType.String,
    }
  ],

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)){
      interaction.reply({content: `Erro você não possui permissão para este comando!`, ephemeral: true})
    } else {
      let motivo = interaction.options.getString("motivo")
      let bmember = interaction.options.getUser("usuario")
      interaction.reply(`${motivo}`)
      bmember.ban(motivo).then( () => {
        interaction.reply("Banido!")
      })
    }
  }
}