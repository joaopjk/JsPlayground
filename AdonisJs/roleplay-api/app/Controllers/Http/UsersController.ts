import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from 'App/Exceptions/BadRequestException'
import User from 'App/Models/User'

export default class UsersController {
    public async store({ request, response }: HttpContextContract) {
        const userPayload = request.only(['email', 'username', 'password', 'avatar'])

        if (!userPayload.email || !userPayload.password || !userPayload.username)
            throw new BadRequestException('provide require data', 422)

        const userByUserName = await User.findBy('username', userPayload.username)
        if (userByUserName)
            throw new BadRequestException('username already in use', 409)

        const userByEmail = await User.findBy('email', userPayload.email)
        if (userByEmail)
            throw new BadRequestException('email already in use', 409)

        const user = await User.create(userPayload)
        return response.created({ user })
    }
}
