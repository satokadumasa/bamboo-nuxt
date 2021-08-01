module.exports = {
  apiBaseURL: process.env.BASE_URL || 'https://api.september-rain.com',
  port: process.env.LISTEN_PORT  || 3000,
  host: process.env.LISTEN_HOST  || 'localhost',
}
