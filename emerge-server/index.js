// index.js -> entry point for the server

const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

// initialize express
const app = express();
app.use('/', router);

const PORT = process.env.LOCAL_PORT || 5000;

/* 
const db = mysql.createConnection({
    host: process.env.DB_HOST_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// connect to the database
db.connect((err) => {
    if (err) console.warn(err);
    else console.log('MySQL connected!');
});
*/

// enable CORS
var cors = require('cors');
router.use(cors());

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, GET');
        return res.status(200).json({});
    }
    next();
});

// Log incoming requests 
router.use(morgan('dev'));


// Get Google Maps API Key
router.get('/getmapkey', (req, res) => {
    const key = process.env.MAP_API_KEY;
    
    if (key) res.send(key);
    else console.warn(err);
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));