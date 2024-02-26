const Discord = require('discord.js');

module.exports = {
    name: "anunciar",
    description: "fazer um anuncio",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "titulo",
            description: "titulo do anuncio",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "descrisao",
            description: "descrisao do anuncio",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "canal",
            description: "Selecione um canal para anunciar",
            type: Discord.ApplicationCommandOptionType.Channel,
            required: true
        },
        {
            name: "cor",
            description: "Selecione a cor do anuncio em hexadecimal",
            type: Discord.ApplicationCommandOptionType.String,
            required: false
        }
    ],

    run: async(client, interaction) => {
        if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `Erro você não possui permissão para este tipo de comando`, ephemeral: true})
        } else {
            let titulo = interaction.options.getString("titulo")
            let desc = interaction.options.getString("descrisao")
            let canal = interaction.options.getChannel("canal")
            let cor = interaction.options.getString("cor")
            if(!cor) cor = "Random"
            if(Discord.ChannelType.GuildText !== canal.type) return interaction.reply({ content: `Erro esse canal não é canal de texto`, ephemeral: true})


            let embed = new Discord.EmbedBuilder()
            .setTitle(titulo)
            .setDescription(desc)
            .setColor(cor)

            canal.send({ embeds: [embed]}).then( () => {
                interaction.reply(`✅ Seu anúncio foi enviado em ${canal} com sucesso.`)
            }).catch( (e) => {
                interaction.reply(`❌ Algo deu errado.`, e)
            }
        )}
    }
}