const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/'))

const router = express.Router();
require('./server/router.js')(router)
app.use('/api/', router);

// Handles all routes so you do not get a not found error
app.get('/*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)
