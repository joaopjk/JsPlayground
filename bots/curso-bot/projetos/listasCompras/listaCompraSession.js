const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const Session = require('telegraf/session')

const botoes = lista => Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item, `delete ${item}`)),
        {columns: 3})
)

const bot = new Telegraf(env.token)
bot.use(Session())

bot.start(async ctx => {
    const name = ctx.update.message.from.first_name
    await ctx.reply(`Seja bem vindo, ${name}`)
    await ctx.reply('Escreva os itens que você deseja adicionar...')
    ctx.session.lista = []
})

bot.on('text', async ctx => {
    const item = ctx.update.message.text
    ctx.session.lista.push(item)
    ctx.reply(`${item} foi adicionado!`, botoes(ctx.session.lista))
})

bot.action(/delete (.+)/, async ctx => {
    ctx.session.lista = ctx.session.lista.filter(i => i !== ctx.match[1])
    ctx.reply(`${ctx.match[1]} foi deletado!`, botoes(ctx.session.lista))
})

bot.startPolling()