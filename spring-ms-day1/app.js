const express = require('express');
const app = express();
const favicon = require('serve-favicon');
const path = require('path');

const appName = "CloudThat Labs"
const programName = "Deloitte Platform Integration"
const technologyName = "Full Stack Labs"


// Serve favicon
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));

// app.set('views', './views'); // Assuming views directory is in the same directory as your app
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

//Rendering index.ejs 
app.get('/', (req, res) => {
    res.render('index', { appName, programName, technologyName });
});

// app.get('/home', (req, res) => {
//     res.render('home', { name: 'CloudThat Labs' });
// });

app.get('*', (req, res) => {
    const path = req.path.replace(/^\//, '');
    console.log(path);

    res.render(`${path}.ejs`, { name: 'CloudThat Labs' }); // Assuming your templates are in the same directory as the app
});


app.listen(5000, () => {
    console.log(`App listening at port 5000`);
})