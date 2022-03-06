const redis = require('redis');

try {
  const client = redis.createClient({
    // url: 'redis://redis_server:6379',
    url: 'redis://localhost:6379',
  });
  client.connect();

  const add = (key, value) => {
    client.set(key, value);
  };
  const remove = (key) => {
    client.del(key);
  };

  const get = async (key) => {
    const data = await client.get(key);
    return JSON.parse(data);
  };

  module.exports = { add, remove, get };
} catch (error) {
  throw 'Falha ao iniciar cache';
}
