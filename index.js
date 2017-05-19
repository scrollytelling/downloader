var Crawler = require("crawler");
var fs = require("fs");

var c = new Crawler({
  callback: function(error, res, done) {
    if(error) {
      console.log(error);
    } else {
      var req = res.request;
      console.log(req.href);

      fs.mkdir(req.host, function(err) {
        if (err) {
          console.log(err);
        } else {
          var $ = res.$;
          // write html file
        }
      });
    }
    done();
  }
});

c.queue("https://jaaroverzicht.radio1.nl/jaaroverzicht");
