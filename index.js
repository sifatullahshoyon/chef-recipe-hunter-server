const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());

app.get('/' , (req , res) => {
    res.send('chef recipe hunter in running on server')
});

app.listen(port , () => {
    console.log(`Server is running on Port : ${port} `);
});