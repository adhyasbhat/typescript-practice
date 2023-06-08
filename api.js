"use strict";
// Create a basic api with get and post request. On sending get request it should give following meaasge - Hello how are you, use appropriate status codes. On making post request collect name an sage of the person and store the same in a json file
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var fs_1 = require("fs");
var app = (0, express_1.default)();
var jsonFilename = 'person_data.json';
// Middleware to parse request body
app.use(body_parser_1.default.json());
// GET request handler
app.get('/', function (req, res) {
    res.status(200).send('Hello, how are you?');
});
// POST request handler
app.post('/', function (req, res) {
    var _a = req.body, name = _a.name, age = _a.age;
    if (!name || !age) {
        res.status(400).send('Name and age are required');
        return;
    }
    var person = { name: name, age: age };
    var jsonData = JSON.stringify(person, null, 2);
    fs_1.default.writeFile(jsonFilename, jsonData, function (err) {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).send('Server error');
        }
        else {
            console.log('Person data written to', jsonFilename);
            res.status(201).send('Data saved successfully');
        }
    });
});
// Start the server
var port = 3000;
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
