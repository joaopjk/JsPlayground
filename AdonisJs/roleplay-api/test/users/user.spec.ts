import Database from '@ioc:Adonis/Lucid/Database'
import { UserFactory } from 'Database/factories'
import test from 'japa'
import supertest from 'supertest'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group("User", (group) => {
    test('it should create an user', async (assert) => {
        const userPayload = { email: 'teste@teste.com', username: 'test', password: 'test', avatar: 'urlqualquer' }
        const { body } = await supertest(BASE_URL).post('/users').send(userPayload).expect(201)
        assert.exists(body.user, 'User undefined')
        assert.exists(body.user.id, 'Id undefined')
        assert.equal(body.user.email, userPayload.email)
        assert.equal(body.user.username, userPayload.username)
        assert.notExists(body.user.password, 'Password defined')
        assert.equal(body.user.avatar, userPayload.avatar)
    })

    test('it should return 409 when email is already in use', async (assert) => {
        const { email } = await UserFactory.create()
        const { body } = await supertest(BASE_URL).post('/users').send({
            email,
            username: 'test',
            password: 'test',
            avatar: 'urlqualquer'
        }).expect(409)

        assert.include(body.message, 'email')
        assert.equal(body.code, 'BAD_REQUEST')
        assert.equal(body.status, 409)
    })

    // test('it should return 409 when username is already in use', async (assert) => {
    //     const { username } = await UserFactory.create()
    //     const { body } = await supertest(BASE_URL).post('/users').send({
    //         email: ' joao.carlos@gmail.com',
    //         username: username,
    //         password: 'test',
    //         avatar: 'urlqualquer'
    //     }).expect(409)

    //     assert.include(body.message, 'username')
    //     assert.equal(body.code, 'BAD_REQUEST')
    //     assert.equal(body.status, 409)
    // })

    test('it should return 422 when required data is not provided', async (assert) => {
        const { body } = await supertest(BASE_URL).post('/users').send({}).expect(422)
        assert.equal(body.code, 'BAD_REQUEST')
        assert.equal(body.status, 422)
    })

    test('it should 422 when providing an invalid email', async (assert) => {
        const { body } = await supertest(BASE_URL).post('/users').send({
            email: ' joao.carlos@',
            username: 'calopstisa',
            password: 'test',
            avatar: 'urlqualquer'
        }).expect(422)
        assert.equal(body.code, 'BAD_REQUEST')
        assert.equal(body.status, 422)
    })


    test('it should 422 when providing an invalid password', async (assert) => {
        const { body } = await supertest(BASE_URL).post('/users').send({
            email: ' joao.carlos@',
            username: 'calopstisa',
            password: 'tes',
            avatar: 'urlqualquer'
        }).expect(422)
        assert.equal(body.code, 'BAD_REQUEST')
        assert.equal(body.status, 422)
    })

    test.only('it should update an user', async (assert) => {
        const { id, password } = await UserFactory.create()
        const email = 'teste@test.com'
        const avatar = 'urlQualquer'
        const { body } = await supertest(BASE_URL).put(`/users/${id}`)
            .send({
                email,
                avatar,
                password
            }).expect(200)

        assert.exists(body.user, 'User undefined')
        assert.equal(body.user.email, email)
        assert.equal(body.user.avatar, avatar)
        assert.equal(body.user.id, id)
    })

    group.beforeEach(async () => {
        await Database.beginGlobalTransaction()
    })

    group.afterEach(async () => {
        await Database.rollbackGlobalTransaction()
    })
})