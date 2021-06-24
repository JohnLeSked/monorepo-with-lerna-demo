const express = require("express")
const common = require("@johnle/common")
const PORT = 1235

const app = express()

app.get("/", (_, res) => {
    res.send("a + b" + common.add(1,3))
})

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`)
})