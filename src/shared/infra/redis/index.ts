import { createClient } from 'redis';

class RedisCache {
  private readonly cache: any;

   constructor() {
    this.cache = createClient({
      url:'redis://redis_server:6379'
    });

    this.cache.on("connect", () => { console.log(`Redis connection established`); });

    this.cache.on("error", (error) => { console.error(`Redis error, service degraded: ${error}`); });

    this.cache.connect();
  }

  async get(key: string | number) {
    return this.cache.get(key);
  }

  async add(key: string | number, value) {
    this.cache.set(key, JSON.stringify(value));
  }

  async del(key: string | number){
    this.cache.del(key);
  }

  async flush(){
    this.cache.flush(); 
  }
} 

export default new RedisCache();