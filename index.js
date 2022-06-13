const express = require('express');
const app = express();
app.use(express.static('public'));

app.listen(5000);
console.log("server läuft auf Port 5000");

app.get('/calculator', function(req, res){
    res.sendFile("/Users/hesatredzepi/Desktop/Taschenrechner Website/index.html");
});