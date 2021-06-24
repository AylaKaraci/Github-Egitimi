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
//bakal�m nas�l olacak.
var aylabranch = "ayla branc�nda olacak belli bir s�re.24.06.2021 18:20";

var ayla = "eklendi mi ki cakisma olacak m�Ayla";

var stash = "stash olacak mı?, bakalım ne olacak? saat 19:33, 19:40 oldu"

var a = "";
var stash = "stash olacak mı?, bakalım ne olacak? saat 19:33, 19:40 oldu"
var yeniSaat2041 = "sanırım anlamaya başladım mı acaba";
var t = "";



var yeniSaat2038 = "san�r�m anlamaya ba�lad�m"
//aylakaraci branchine aittir.neden olmuyor
//pull request nas�l
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
