const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.message.from
    if(from.id === 5584221616)
        ctx.reply('Ao seus dispor mestre!')
    else
        ctx.reply('Só falo com o meu mestre!')
})

bot.startPolling()