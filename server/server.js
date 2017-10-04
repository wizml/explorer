const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet())

var dir = process.env.STATIC_DIR ? process.env.STATIC_DIR : "./public"
app.use(express.static(dir))


var port = process.env.PORT ? process.env.PORT : 80
app.listen(port)
