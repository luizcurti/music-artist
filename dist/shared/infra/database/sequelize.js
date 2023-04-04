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
const sequelize_typescript_1 = require("sequelize-typescript");
const Song_1 = require("../../../modules/song/infra/entities/Song");
class TypedDatabase {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = new sequelize_typescript_1.Sequelize({
                    username: process.env.DATABASE_USERNAME,
                    password: process.env.DATABASE_PASSWORD,
                    database: process.env.DATABASE,
                    dialect: "mysql",
                    host: process.env.DATABASE_HOST,
                    port: parseInt(process.env.DATABASE_PORT)
                });
                yield connection.addModels([Song_1.Song]);
                console.log(`[DATABASE] CONNECTED`);
            }
            catch (error) {
                console.log(`[DATABASE] ERROR`, error);
            }
        });
    }
}
exports.default = new TypedDatabase();
