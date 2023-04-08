import { createClient } from "redis";

class RedisCache {
  private readonly cache;

  constructor() {
    this.cache = createClient({
      url: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
    });

    this.cache.on("connect", () => {
      console.log(`Redis connection established`);
    });

    this.cache.on("error", (error) => {
      console.error(`Redis error, service degraded: ${error}`);
    });
  }

  add = (key, value) => {
    this.cache.set(key, value);
  };

  get = async (key) => {
    const data = await this.cache.get(key);
    return JSON.parse(data);
  };

  del(key: string) {
    this.cache.del(key);
  }

  flush() {
    this.cache.flushall();
  }
}

export { RedisCache }
