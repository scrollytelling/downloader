var Crawler = require("crawler");

var c = new Crawler({
  callback: function(error, res, done) {
    if(error) {
      console.log(error);
    } else {
      console.log(res.request.href);
      var $ = res.$;
    }
    done();
  }
});

c.queue("https://jaaroverzicht.radio1.nl/jaaroverzicht");
