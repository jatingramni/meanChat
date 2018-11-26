const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// set default page
app.use(express.static(__dirname+'public'));

// active logger for each activity
app.use(morgan('dev'));

// accept www form data and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// handel error request
app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// process error request
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            status: (error.status || 500)
        }
    });
});

// export module so get we import it on other module
module.exports = app;