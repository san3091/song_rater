/**
 * Song.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'songs',

  attributes: {
    title: { type: 'string', required: true },
    lyrics: { type: 'longtext' },

    // Associations
    artist: { model: 'artist', columnName: 'artist_id', required: true }
  }
};

