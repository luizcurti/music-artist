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
exports.ListSongByIdUseCase = void 0;
const redis_1 = require("../../../../shared/infra/redis");
const Song_1 = require("../../infra/entities/Song");
const redisCache = new redis_1.RedisCache();
class ListSongByIdUseCase {
    execute({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            let song = yield redisCache.get(id);
            if (!song)
                song = yield Song_1.Song.findByPk(id);
            if (!song)
                throw new Error('Song does not exist');
            return song;
        });
    }
}
exports.ListSongByIdUseCase = ListSongByIdUseCase;
