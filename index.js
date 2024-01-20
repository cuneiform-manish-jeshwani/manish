const express = require('express')

const app = express()

const port = 3000;


app.set('view engine', 'hbs')


app.get('/customer', (req, res)=>{

    const user = {
    
        name:"manish",
        email:"manishtest@gmail.com",
        city:"ahmedabad"
    }
    res.render('customer', {user})   // in this parenthesis we need to write our ejs file name
    })


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });