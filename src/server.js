const app = require('./app');
const { env } = require('./config');

const PORT = env.port;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 