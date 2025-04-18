const request = require('supertest');
const app = require('../app');

describe('API Endpoints', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello from GitHub Actions CI/CD Pipeline!');
  });

  test('GET /api/status should return status information', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body.status).toBe('OK');
  });
});