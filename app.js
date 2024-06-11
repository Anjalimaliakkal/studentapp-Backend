const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const student = require("./models/student")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send("add students")
})

app.get("/search", (req, res) => {
    res.send("search students")
})

app.post("/delete", (req, res) => {
    res.send("delete students")
})

app.post("/ViewAll", (req, res) => {
    res.send("view all")
})

app.listen(8081, () => {
    console.log("server started")
})