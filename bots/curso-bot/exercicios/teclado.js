const env = require('../.env')
const Telegraf = require('telegraf')
const Markup = require('telegraf/markup')

const bot = new Telegraf(env.token)

const tecladoCarne = Markup.keyboard([
    ['ð· Porco', 'ð® Vaca', 'ð Carneiro'],
    ['ð Galinha', 'ð£ Eu como Ã© ovo'],
    ['ð Peixe', 'ð Frutos do mar'],
    ['ð Eu sou vegetariano']
]).resize().extra()

bot.start(async ctx => {
    const message = ctx.update.message

    await ctx.reply(`Seja bem vindo, ${message.from.first_name}!`)
    await ctx.reply('Qual bebida voce prefere?', Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())
})

bot.hears(['Coca', 'Pepsi'], async ctx => {
    await ctx.reply(`Nossa! Eu tambÃ©m gosto de ${ctx.match}`)
    await ctx.reply('Qual a sua carne predileta', tecladoCarne)
})

bot.hears('ð® Vaca', ctx => ctx.reply('A minha predileta tambÃ©m!'))
bot.hears('ð Eu sou vegetariano', ctx => ctx.reply('Parabens, mais eu gosto de carne!'))
bot.on('text', ctx => ctx.reply('Legal!'))

bot.startPolling()