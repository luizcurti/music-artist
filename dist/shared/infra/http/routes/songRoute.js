"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createSongController_1 = require("../../../../modules/song/useCases/createSong/createSongController");
const deleteSongController_1 = require("../../../../modules/song/useCases/deleteSong/deleteSongController");
const editSongController_1 = require("../../../../modules/song/useCases/editSong/editSongController");
const listAllSongController_1 = require("../../../../modules/song/useCases/listAllSong/listAllSongController");
const listSongByIdController_1 = require("../../../../modules/song/useCases/listSongById/listSongByIdController");
const router = (0, express_1.Router)();
exports.router = router;
const listAllSongController = new listAllSongController_1.ListAllSongController();
const listSongByIdController = new listSongByIdController_1.ListSongByIdController();
const createSongController = new createSongController_1.CreateSongController();
const editSongController = new editSongController_1.EditSongController();
const deleteSongController = new deleteSongController_1.DeleteSongController();
router.get('/', listAllSongController.handle);
router.get('/:id', listSongByIdController.handle);
router.post('/', createSongController.handle);
router.put('/:id', editSongController.handle);
router.delete('/:id', deleteSongController.handle);
