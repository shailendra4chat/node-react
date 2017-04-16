const request = require('request').defaults({
    baseUrl: 'http://localhost:3000'
});

module.exports = function (router) {
 
    // JSON API
    router.get('/allusers', function (req, res){
        request('/data/data.json', (error, response, body) => {
            if (!error && response.statusCode == 200) {
                res.send(body)
            } else {
                res.send(error)
            }
        })
    })
}