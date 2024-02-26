const Discord = require('discord.js')

module.exports = {
    name: "setnick",
    description: "alterar nome do usuario",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Selecione o usuario",
            type: Discord.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "nick",
            description: "Qual nick deseja por",
            type: Discord.ApplicationCommandOptionType.String,
            required: false
        }
    ],

    run: async(client,interaction) => {
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ChangeNickname)){
            interaction.reply({content: `Não possui permissão para este tipo de comando`, ephemeral: true})
        } else {
            let user = interaction.options.getUser("membro")
            let membro = interaction.guild.members.cache.get(user.id)
            const nick = interaction.options.getString("nick")

            membro.setNickname(`${nick}`).then( () => {
                interaction.reply({ content:  `o membro ${membro} teve seu nick alterado para: ${nick}`})
            })
        }
    }
}