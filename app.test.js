const request = require('supertest');

const app = require('./app')
describe('GET /users', () => {
    it('should run', (() => {
        return request(app)
        .get('/users').expect(200)

    }))

})
