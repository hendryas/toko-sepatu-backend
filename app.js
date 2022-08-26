require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public')); // Menggunakan file css
app.use(express.static('public'));
app.use('/assets', express.static('assets'));

//use express static folder
app.use(express.static("./public"))

// body-parser middleware use
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))

// START SWAGGER
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// END SWAGGER

const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
})