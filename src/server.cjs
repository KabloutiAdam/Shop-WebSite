const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());



app.use('/test', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.listen(3040, () => console.log('API is running on http://localhost:3040/login'));