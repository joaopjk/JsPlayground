import Mail from '@ioc:Adonis/Addons/Mail'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PasswordsController {
    public async forgotPassword({ request, response }: HttpContextContract) {
        const { email } = request.only(['email'])

        await Mail.send((message) => {
            message
                .from('no-reply@roleplay.com')
                .to(email)
                .subject('Roleplay: Recuperação de senha')
                .text('Clique no link abaixo para redefinir sua senha')
        })
        return response.noContent()
    }
}
