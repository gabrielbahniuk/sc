const express = require('express')
const app = express()
const root = `${__dirname}/dist`
app.use(express.static(root))
app.listen(process.env.PORT || 3000)
