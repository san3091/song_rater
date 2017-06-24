/**
 * Artist.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'artists',

  attributes: {
    name: { type: 'string', required: true },

    // Associations
    songs: {
      collection: 'song',
      via: 'artist'
    }
  }
};

