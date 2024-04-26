const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
const port = 3000;
var cors = require('cors');

app.use(cors())

app.post('/', (req, res) => {
    
    const requestData = req.body;

    res.status(200).json({ message: 'Data received successfully', data: requestData });
    console.log(requestData);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
