import Mail from '@ioc:Adonis/Addons/Mail'
import Database from '@ioc:Adonis/Lucid/Database'
import { UserFactory } from 'Database/factories'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Password', (group) => {

    test.only('it should send and email with forgot password instructions', async (assert) => {
        const { email } = await UserFactory.create()

        Mail.trap((message) => {
            assert.equal(message.subject, 'Roleplay: Recuperação de senha')
        })
        
        await supertest(BASE_URL).post('/forgot-password')
            .send({
                email,
                resetPasswordUrl: 'https://www.google.com/gmail/'
            }).expect(204)

        Mail.restore();
    })

    group.beforeEach(async () => {
        await Database.beginGlobalTransaction()
    })
    group.afterEach(async () => {
        await Database.rollbackGlobalTransaction()
    })
})