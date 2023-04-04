"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCache = void 0;
const redis_1 = require("redis");
class RedisCache {
    constructor() {
        this.add = (key, value) => {
            this.cache.set(key, value);
        };
        this.get = (key) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.cache.get(key);
            return JSON.parse(data);
        });
        this.cache = (0, redis_1.createClient)({
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
    del(key) {
        this.cache.del(key);
    }
    flush() {
        this.cache.flushall();
    }
}
exports.RedisCache = RedisCache;
