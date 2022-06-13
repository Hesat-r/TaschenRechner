const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');




app.get('/calc', (req, res) =>{
    res.render("/Users/hesatredzepi/Desktop/Taschenrechner Website/index.pug",{title:'Taschenrechner'
});
});



app.listen(5000);
console.log("server läuft auf Port 5000");
