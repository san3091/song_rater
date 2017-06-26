/**
 * SongController
 *
 * @description :: Server-side logic for managing songs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  create: function (req, res) {
    let title = req.param('title'),
        lyrics = req.param('lyrics'),
        artist = req.param('id')

    if (!title) return res.badRequest({ err: 'Invalid song title field' })
    if (!artist) return res.badRequest({ err: 'Invalid artist field' })

    Song.create({
      title: title,
      lyrics: lyrics,
      artist: artist
    })
    .then(_song => {
      if (!_song) return res.badRequest({ err: 'Unable to create song' })
      return res.json({ song: _song })
    })
    .catch( err => res.serverError(err.message))
  },

  index: function (req, res) {
    Song.find().exec( (err, _songs) => {
      if (err) return res.serverError(err.message)
      return res.json({ songs: _songs })
    })
  }

};

