const express = require('express')
const app =  express()

app.use(express.static('public'))

var port = 2222
app.listen(port, () => console.log(`Server run on port ${port}`))