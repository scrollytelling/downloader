var Crawler = require("crawler");
var fs = require("fs");

var c = new Crawler({
  callback: function(err, res, done) {
    if (err) throw err;

    var req = res.request;
    console.log(req.href);

    fs.mkdir(req.host, function(err) {
      if (err) throw err;

      var $ = res.$;
      // write html file
    });

    done();
  }
});

c.queue("https://jaaroverzicht.radio1.nl/jaaroverzicht");
