const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "expulsar",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "membro",
            description: "Selecione o membro para expulsar",
            type: Discord.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "motivo",
            description: "Motivo para o expulsar",
            type: Discord.ApplicationCommandOptionType.String,
            required: false
        }
    ],
    run: async(client, interaction) => {
       
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.KickMembers)) {
            interaction.reply({ content: `Você não possui permissão para fazer isso.`, ephemeral: true})
        } else {
            const user = interaction.options.getUser("membro")
            const membro = interaction.guild.members.cache.get(user.id)
            const channel = client.channels.cache.get('1195859553871483011');

            let motivo = interaction.options.getString("motivo")
            if (!motivo) motivo = "Não informado"

            let embed = new Discord.EmbedBuilder()
            .setColor("Orange")
            .setDescription(`O usuário ${membro} foi expulso com sucesso!\n\n> Motivo: \`${motivo}\`.`);

            membro.kick(motivo).then( () => {
                channel.send({ embeds: [embed]})
                interaction.reply({ content: `Expulsão feita! Gerando Logs...`, ephemeral: true})
            }).catch(e => {
                interaction.reply("Erro")
            })
        }

    }
}