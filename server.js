const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
    name: 'mba-project',
    port: 3000,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('teste');
});

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
});