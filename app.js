// testing a github commit scrapper

const express = require('express');
const app = express();
const contributions = require('github-yearly-contributions');

var apicache = require('apicache');
var cache = apicache.middleware;

var commitNum;

contributions('jjspetz', function(err, amount){
  commitNum = amount;
});

app.get('/api', cache('1 day'), function(request, response) {
  response.json(
    {commits: commitNum}
  );
});

// server port
app.listen(8000, function() {
  console.log('listening on port 8000')
});
