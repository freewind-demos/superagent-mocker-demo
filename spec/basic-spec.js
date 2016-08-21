const request = require('superagent');
const mock = require('superagent-mocker')(request);

describe('superagent-mocker', () => {
  beforeEach(() => {
    mock.clearRoutes();
  });

  it('get', (done) => {
    mock.get('/users', (req) => {
      return {
        status: 201,
        statusCode: 201,
        text: 'all users',
        body: ['user1', 'user2']
      }
    });

    request.get('/users')
      .end((err, res) => {
        console.dir(res);

        expect(res.status).toEqual(200);
        expect(res.statusCode).toEqual(201);
        expect(res.text).toEqual('all users');
        expect(res.body).toEqual(['user1', 'user2']);
        done(err);
      });
  })
});