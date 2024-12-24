const express = require('express')
const app = express()
const port = 8000

app.get("/", (req, res)=>{
    res.send("Welcome to Express.")
})

app.get("/about", (req, res)=>{
    res.send("About Us it is.")
})

app.listen(port, ()=> {console.log(`Server started on port: ${port}`)})

