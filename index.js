const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());

const chefs = require('./data/chef.json');

// const corsOptions = {
//     origin: 'http://localhost:5173/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.get('/' , (req , res) => {
    res.send('chef recipe hunter in running on server')
});


// app.get('/chefs' , cors(corsOptions) , (req , res) => {
//     res.send(chefs);
// });


app.get('/chefs' ,  (req , res) => {
    res.send(chefs);
});



app.listen(port , () => {
    console.log(`Server is running on Port : ${port} `);
});