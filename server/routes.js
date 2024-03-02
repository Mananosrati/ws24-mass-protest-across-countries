const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// Define directory where static files will be located:
app.use("/static", express.static(path.join(__dirname, "public")));

// GET 'index.html'-Homepage from dir 'templates':
app.get("/", (req, res) => {
    const filePath = path.join(".", "test-views", "index.html")
        fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

// GET 'protests.html'-actual/past protests list page from dir 'views':
app.get("/protests", (req, res) => {
        const filePath = path.join(".", "test-views", "protests.html")
        fs.readFile(filePath, 'utf8',
            function(err, data) {   
                res.send(data)
        });
})

// GET 'contact.html'-contact page from dir 'views':
app.get("/contact", (req, res) => {
    const filePath = path.join(".", "test-views", "contact.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

// GET 'about.html'-About Us page from dir 'views':
app.get("/about", (req, res) => {
    const filePath = path.join(".", "test-views", "about.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

// GET 'help.html'-contact page from dir 'views':
app.get("/help", (req, res) => {
    const filePath = path.join(".", "test-views", "help.html")
    fs.readFile(filePath, 'utf8',
        function(err, data) {   
            res.send(data)
    });
})

app.listen(3001, () => {
    console.log("SandBox on port 3001")
})