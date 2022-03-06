import Song from '../models/Song';

const Redis = require('../config/redis');

class SongController {
  async index(req, res) {
    const song = await Song.findAll({
      attributes: ['id', 'name', 'artist', 'imageurl', 'notes', 'popularity'],
      order: ['id'],
    });
    res.json(song);
  }

  async store(req, res) {
    try {
      console.log('aaaa', req.body);
      const song = await Song.create(req.body);

      const {
        id, name, artist, imageurl, notes, popularity,
      } = song;

      if (id) {
        Redis.add(
          id,
          JSON.stringify([{
            name, artist, imageurl, notes, popularity,
          }]),
        );
      }

      return res.json(song);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      let song = '';

      if (!id) {
        return res.status(400).json({
          errors: ['ID missing'],
        });
      }

      song = await Redis.get(id);

      if (!song) {
        song = await Song.findByPk(id, {
          attributes: ['id', 'name', 'artist', 'imageurl', 'notes', 'popularity'],
        });
      }

      if (!song) {
        return res.status(400).json({
          errors: ['Song does not exist'],
        });
      }

      return res.json(song);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const {
        id, name, artist, imageurl, notes, popularity,
      } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID missing'],
        });
      }

      const song = await Song.findByPk(id);

      if (!song) {
        return res.status(400).json({
          errors: ['Song does not exist'],
        });
      }

      const songUpdated = await song.update(req.body);

      if (songUpdated) {
        Redis.remove(id);
        Redis.add(id, JSON.stringify([{
          name, artist, imageurl, notes, popularity,
        }]));
      }

      return res.json(songUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID missing'],
        });
      }

      const song = await Song.findByPk(id);

      if (!song) {
        return res.status(400).json({
          errors: ['Song does not exist'],
        });
      }

      await song.destroy();
      Redis.remove(id);

      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new SongController();
