import Mail from '@ioc:Adonis/Addons/Mail'
import Database from '@ioc:Adonis/Lucid/Database'
import { UserFactory } from 'Database/factories'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Password', (group) => {

    test('it should send and email with forgot password instructions', async (assert) => {
        const user = await UserFactory.create()

        Mail.trap((message) => {
            assert.equal(message.subject, 'Roleplay: Recuperação de senha')
            assert.deepEqual(message.to, [
                {
                    address: user.email
                }
            ])
            assert.deepEqual(message.from, {
                address: 'no-reply@roleplay.com'
            })
            assert.include(message.html!, user.username)
        })

        await supertest(BASE_URL).post('/forgot-password')
            .send({
                email: user.email,
                resetPasswordUrl: 'https://www.google.com/gmail/'
            }).expect(204)

        Mail.restore();
    })

    test.only('it should create a reset password token', async (assert) => {
        const user = await UserFactory.create()
        await supertest(BASE_URL).post('/forgot-password')
            .send({
                email: user.email,
                resetPasswordUrl: 'https://www.google.com/gmail/'
            }).expect(204)

        const tokens = await user.related('tokens').query()
        console.log({ tokens })
        assert.isNotEmpty(tokens)
    })

    group.beforeEach(async () => {
        await Database.beginGlobalTransaction()
    })
    group.afterEach(async () => {
        await Database.rollbackGlobalTransaction()
    })
})