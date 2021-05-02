const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.cangokceaslan.com';
<<<<<<< HEAD
const express = require('express1234');
=======
const express = require('expresssss');
>>>>>>> conflict
var p = 1;
var port = 3000;
var app = express();
var wikiUrls1 = "";
var stash1 = false;
var stash2 = true;
var stash3 = "ayla";
var bugun = "";
var data = "bu olacak";

var ayla = "eklendi mi ki cakisma olacak mýAyla";

//aylakaraci branchine aittir.neden olmuyor
//pull request nasýl
rp(url)
  .then(function(html){
    //success!
    var wikiUrls = [];
    for (let i = 0; i < $('#menu-menu-1 > li > a', html).length ; i++) {
      wikiUrls.push($('#menu-menu-1 > li > a', html)[i].attribs.href.toString());
    }
    var sf_wikiUrls = "";
    sf_wikiUrls = wikiUrls.toString()
    console.log(sf_wikiUrls);
    wikiUrls1 = wikiUrls;
  })
  .catch(function(err){
    //handle error
  });
app.get('/',(req,res)=>{
  res.type('json');
  var json = {values:wikiUrls1};
  values = JSON.stringify(json);
  res.send(values);
});
app.listen(port,()=>{console.log("Listening the 3000. port")});
