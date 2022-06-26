const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')

const bot = new Telegraf(env.token)

const tecladoCarne = Markup.keyboard([
    ['🐷 Porco', '🐮 Vaca', '🐑 Carneiro'],
    ['🐔 Galinha', '🐣 Eu como é ovo'],
    ['🐟 Peixe', '🐙 Frutos do mar'],
    ['🍄 Eu sou vegetariano']
]).resize().extra()

bot.start(async ctx => {
    const message = ctx.update.message

    await ctx.reply(`Seja bem vindo, ${message.from.first_name}!`)
    await ctx.reply('Qual bebida voce prefere?', Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())
})

bot.hears(['Coca', 'Pepsi'], async ctx => {
    await ctx.reply(`Nossa! Eu também gosto de ${ctx.match}`)
    await ctx.reply('Qual a sua carne predileta', tecladoCarne)
})

bot.hears('🐮 Vaca', ctx => ctx.reply('A minha predileta também!'))
bot.hears('🍄 Eu sou vegetariano', ctx => ctx.reply('Parabens, mais eu gosto de carne!'))
bot.on('text', ctx => ctx.reply('Legal!'))

bot.startPolling()