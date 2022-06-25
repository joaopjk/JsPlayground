const env = require('../.env')
const Telegraf = require('telegraf')

const bot = new Telegraf(env.token)

bot.start(async ctx => {
    const message = ctx.update.message
    await ctx.reply(`Seja bem vindo ${message.from.first_name} 😇 !`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b> <i>de vários</i> 
                            <code>formas</code> <pre>possíveis</pre> <a href="https://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown* _de várias_' +
        '``` formas``` [Google](https://www.google.com)')
    await ctx.replyWithPhoto({source: `${__dirname}/cat.jpg`})
    await ctx.replyWithPhoto('https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg',
        {caption: 'Olha que gato lindo !'})
    await ctx.replyWithPhoto({url: 'https://www.petz.com.br/blog/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg'})
    await ctx.replyWithLocation(29.9773008, 31.1303068)
    //await ctx.replyWithVideo()
})

bot.startPolling()