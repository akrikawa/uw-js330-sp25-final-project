const request = require('supertest');
const server = require('./server');
describe('server', () => {
  describe('GET /hello', () => {
    it("should return 'Hello World'", async () => {
      const res = await request(server).get('/hello');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ text: 'Hello World!' });
    });
  });
});
