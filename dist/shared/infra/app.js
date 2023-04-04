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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const sequelize_1 = __importDefault(require("../infra/database/sequelize"));
const express_1 = __importDefault(require("express"));
const songRoute_1 = require("./http/routes/songRoute");
class App {
    constructor() {
        this.server = (0, express_1.default)();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.database();
            this.middlewares();
            this.routes();
        });
    }
    database() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('[SERVER] DATABASE CONNECTING');
            yield sequelize_1.default.init();
        });
    }
    middlewares() {
        this.server.use(express_1.default.urlencoded({ extended: true }));
        this.server.use(express_1.default.json());
        console.log('[SERVER] MIDDLEWARES REGISTERED');
    }
    routes() {
        this.server.use('/api/music', songRoute_1.router);
        console.log('[SERVER] ROUTES REGISTERED');
    }
}
exports.App = App;
