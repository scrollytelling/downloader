var Crawler = require("crawler");
var fs = require("fs");
var path = require("path");
var mkdirp = require('mkdirp');
var request = require("request");

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
        res.$("script[src^='https://scrollytelling.link']").each(function(i, element) {
          var resource = $(this).attr('src');
          var localResource = resource.replace('https://', '');

          mkdirp(path.dirname(localResource), function(err) {
            if (err) throw err;

            request(resource).pipe(fs.createWriteStream(localResource));
          });
        });
      });
    });

    done();
  }
});

c.queue("https://jaaroverzicht.radio1.nl/jaaroverzicht");
