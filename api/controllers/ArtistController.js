/**
 * ArtistController
 *
 * @description :: Server-side logic for managing artists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  create: function (req, res) {
    let name = req.param('name')

    if (!name) {
      return res.badRequest({ err: 'Invalid name' })
    }    
    
    Artist.create({
      name: name 
    })
    .then(_artist => {
      if (!_artist) return res.serverError({ err: 'Unable to create artist' }) 

      return res.ok(_artist)
    })
    .catch(err => res.serverError(err.message))
  }
};

