const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(require("./routes"))

mongoose.connect("mongodb+srv://into:code@cluster0.ahbau2g.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('connected')
        app.listen(3000, () => {
            console.log(`server has been started http://localhost:3000`)
        })
    })