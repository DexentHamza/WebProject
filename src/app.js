const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");

// static file 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../Templates/views");
const partial_path = path.join(__dirname, "../Templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path))

// routing
app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error', {
        errormsg : "Oops! Page Not Found😌, Click here to go back"
    });
});

app.listen(port, (req, res) => {
    console.log(`Listining your port ${port}`);
})