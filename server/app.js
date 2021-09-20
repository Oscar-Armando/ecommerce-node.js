const express = require('express');
const app = express();

app.get('/', (req, res) => res.json({message: 'Welcome to API' })); 

app.use(function (req, res, next) {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

const server = app.listen(process.env.PORT || 3001, function () {
    console.log(`App running. Listening on port ${server.address().port}`)
});