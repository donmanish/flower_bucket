const express = require("express");

const app = express()

app.get(
    "/",
    (req,res) => {
        res.send("Hello backend")
    }
)

app.listen(
    5000,
    () => console.log("backend is running")
)