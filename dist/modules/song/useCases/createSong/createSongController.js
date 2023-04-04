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
exports.CreateSongController = void 0;
const tsyringe_1 = require("tsyringe");
const createSongUseCase_1 = require("./createSongUseCase");
class CreateSongController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createSongUseCase = tsyringe_1.container.resolve(createSongUseCase_1.CreateSongUseCase);
            const { name, artist, imageurl, notes, popularity } = request.body;
            yield createSongUseCase.execute({
                name,
                artist,
                imageurl,
                notes,
                popularity
            });
            return response.status(200).json({ message: 'Song created successfully' });
        });
    }
}
exports.CreateSongController = CreateSongController;
