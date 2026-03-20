const express = require('express')
const app = express()
// console.log(app)
const port = 8080;
const ejs = require('ejs')
const ejsmate = require('ejs-mate')
app.engine("ejs", ejsmate)
const path = require('path')

app.use(express.static(path.join(__dirname,"/public/css")))
app.use(express.static(path.join(__dirname,"/public/js")))
app.use(express.static(path.join(__dirname,"/public/assets")))
app.use(express.json())

app.listen(port, () => {
    console.log(`API requests listening started on port ${port}`)
    console.log("server started")
})

// app.use()

app.get("/", (req, res) => {
    res.render("home.ejs")
})