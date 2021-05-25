module.exports = {
  apiBaseURL: process.env.BASE_URL || 'http://localhost:3001',
  port: process.env.LISTEN_PORT  || 3000,
  host: process.env.LISTEN_HOST  || 'localhost',
}
