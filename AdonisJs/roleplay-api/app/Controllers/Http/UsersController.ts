import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BadRequestException from 'App/Exceptions/BadRequestException'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
    public async store({ request, response }: HttpContextContract) {
        const userPayload = await request.validate(CreateUserValidator)
        
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
