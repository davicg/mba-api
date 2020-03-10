/*
 * GET location logs listing.
 */

var Location = require('../models/location_model.js');

exports.list = function (req, res) {
  Location.find(function (err, location) {
    res.send(location);
  });
};

exports.newLog = function (body) {
  var locationLog = new Location({
    userId: body.userId,
    latitude: body.latitude,
    longitude: body.longitude
  });

  locationLog.save(function (err, newLocationLog) {
    if (err) return console.error(err);
    console.log(newLocationLog.userId + " inseriu um novo log de localizacao com sucesso!");
  });
};
