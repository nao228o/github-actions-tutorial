const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from GitHub Actions CI/CD Pipeline!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// テスト環境ではポート3000、本番環境では環境変数のPORTを使用
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;