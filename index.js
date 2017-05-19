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
      fs.writeFile(req.host + "/" + req.path + ".html", res.body, function(err) {
        if (err) throw err;

        // download moar files
      });
    });

    done();
  }
});

c.queue("https://jaaroverzicht.radio1.nl/jaaroverzicht");
