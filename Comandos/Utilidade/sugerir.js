const Discord = require('discord.js');

module.exports = {
    name: "sugerir",
    description: "Faca uma sugestao",
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "sugestao",
            description: "digite aqui sugestao",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async(client, interaction) => {
        let canal = interaction.guild.channels.cache.get("1183623158805319683")
        const emojis = ['✅', '❌']
        if(!canal) {
            interaction.reply({ content: `Canal de sugestão não foi selecionado na base do bot`, ephemeral: true})
        } else {
            let sugestao = interaction.options.getString("sugestao");
            let embed = new Discord.EmbedBuilder()
            .setColor("Green")
            .setAuthor({ name: interaction.user.username, iconURL: interaction.user.displayAvatarURL({ dynamic: true}) })
            .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setTitle("Nova sugestao")
            .setDescription(`**Sugestão de ${interaction.user}:**\n${sugestao}`)

            interaction.reply({ content: `Sugestao Criada!`, ephemeral: true})
            canal.send({embeds: [embed]}).then( (msgg) => {
                msgg.pin()
                emojis.forEach(emoji => {
                    msgg.react(emoji)
                })
            })

        }
    }
}