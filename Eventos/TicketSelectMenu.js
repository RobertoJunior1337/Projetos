require('../index')

const Discord = require('discord.js')
const client = require('../index')

const { QuickDB } = require("quick.db")
const db = new QuickDB(); // npm i quick.db better-sqlite3

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
      if (interaction.customId === "painel_ticket") {
        let opc = interaction.values[0]
        if (opc === "opc1") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "1022660430394572860" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [
                    Discord.PermissionFlagsBits.ViewChannel
                  ]
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions
                  ]
                }
              ]
            }).then((ch) => {
              interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 1.`);
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );
  
              ch.send({ embeds: [embed], components: [botao] }).then(m => {
                m.pin()
              })
            })
          }
  
        } else if (opc === "opc2") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "1022660430394572860" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [
                    Discord.PermissionFlagsBits.ViewChannel
                  ]
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions
                  ]
                }
              ]
            }).then((ch) => {
              interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 2.`);
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );
  
              ch.send({ embeds: [embed], components: [botao] }).then(m => {
                m.pin()
              })
            })
          }
  
        } else if (opc === "opc3") {



          require('../index')

const Discord = require('discord.js')
const client = require('../index')
const { QuickDB } = require("quick.db")
const db = new QuickDB()
const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'complexo',
};

async function connectToDatabase() {
  return await mysql.createConnection(dbConfig);
}

client.on("interactionCreate", async(interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "formulario") {
        if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado.`, ephemeral: true })
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal")
        .setTitle("Formulário");
  
        const pergunta1 = new Discord.TextInputBuilder()
        .setCustomId("pergunta1") // Coloque o ID da pergunta
        .setLabel("ID") // Coloque a pergunta
        .setMaxLength(30) // Máximo de caracteres para a resposta
        .setMinLength(1) // Mínimo de caracteres para a respósta
        .setPlaceholder("Escreva sua Resposta 1 aqui!") // Mensagem que fica antes de escrever a resposta
        .setRequired(true) // Deixar para responder obrigatório (true | false)
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
  
        const pergunta2 = new Discord.TextInputBuilder()
        .setCustomId("pergunta2") // Coloque o ID da pergunta
        .setLabel("SteamHex") // Coloque a pergunta
        .setMaxLength(30) // Máximo de caracteres para a resposta
        .setPlaceholder("Escreva sua Resposta 2 aqui!") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
        .setRequired(false)
  
        const pergunta3 = new Discord.TextInputBuilder()
        .setCustomId("pergunta3") // Coloque o ID da pergunta
        .setLabel("Pergunta 3??") // Coloque a pergunta
        .setPlaceholder("Escreva sua Resposta 3 aqui!") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Paragraph) // Tipo de resposta (Short | Paragraph)
        .setRequired(false)

        const pergunta4 = new Discord.TextInputBuilder()
        .setCustomId("pergunta4")
        .setLabel("qual id")
        .setPlaceholder("Escreva sua resposta 4 aqui")
        .setStyle(Discord.TextInputStyle.Paragraph)
        .setRequired(true)
  
        modal.addComponents(
          new Discord.ActionRowBuilder().addComponents(pergunta2)
        )
  
        await interaction.showModal(modal)
      }
    } else if (interaction.isModalSubmit()) {
      if (interaction.customId === "modal") {
       // let resposta1 = interaction.fields.getTextInputValue("pergunta1")
        let resposta2 = interaction.fields.getTextInputValue("pergunta2")

        const conenction = await connectToDatabase();

        try {

          // comandos para fazer sistema de whitelist

          const [rows] = await conenction.execute('SELECT * FROM summerz_accounts WHERE steam = ?', [resposta2]);

          if(rows.lenght === 0){
           console.log("nada encontrado!")
            return;
         }

          await conenction.execute('UPDATE summerz_accounts SET whitelist = 1 WHERE steam = ?', [resposta2]);
          // Inserir a resposta da pergunta 1 na tabela respostas
       //   await conenction.execute('UPDATE results (r1, r2, r3) VALUES (?, ?, ?)', [
          //   resposta1,
          //   resposta2,
          //   resposta3
      //    ]);
  
     //   if (!resposta1) resposta1 = "Não informado."
     //   if (!resposta2) resposta2 = "Não informado."
//if (!resposta3) resposta3 = "Não informado."
  
        let embed = new Discord.EmbedBuilder()
        .setColor("Green")
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`O usuário ${interaction.user} enviou o formulário abaixo:`)
        .addFields(
         // {
         //   name: `Pergunta 1:`,
         //   value: `*Resposta 1:* \`${resposta1}\``,
         //   inline: false
         // },
          {
            name: `Pergunta 2:`,
            value: `*Resposta 2:* \`${resposta2}\``,
            inline: false
          }
        //  {
        //    name: `Pergunta 3:`,
        //    value: `*Resposta 3:* \`${resposta3}\``,
        //    inline: false
        //  }
        );
  
        interaction.reply({ content: `Olá **${interaction.user.username}**, Whitelist Aproada!!`, ephemeral: true})
        await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })
      } catch (error) {
        console.error("erro", error)
      } finally {
        await conenction.end();
      }
    }
}
});

  
          //////////////////////////
          
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "1022660430394572860" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
              name: nome,
              type: Discord.ChannelType.GuildText,
              parent: categoria,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: [
                    Discord.PermissionFlagsBits.ViewChannel
                  ]
                },
                {
                  id: interaction.user.id,
                  allow: [
                    Discord.PermissionFlagsBits.ViewChannel,
                    Discord.PermissionFlagsBits.SendMessages,
                    Discord.PermissionFlagsBits.AttachFiles,
                    Discord.PermissionFlagsBits.EmbedLinks,
                    Discord.PermissionFlagsBits.AddReactions
                  ]
                }
              ]
            }).then((ch) => {
              interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
              let embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 3.`);
              let botao = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                  .setCustomId("fechar_ticket")
                  .setEmoji("🔒")
                  .setStyle(Discord.ButtonStyle.Danger)
              );
  
              ch.send({ embeds: [embed], components: [botao] }).then(m => {
                m.pin()
              })
            })
          }
  
        }
      }
    } else if (interaction.isButton()) {
      if (interaction.customId === "fechar_ticket") {
        interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos...`)
        setTimeout(() => {
          try {
            interaction.channel.delete()
          } catch (e) {
            return;
          }
        }, 5000)
      }
    }
  })