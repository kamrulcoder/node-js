const http = require('http')

const server = http.createServer((req, res)=> {
    console.log(req.url)
    res.end('Node js very beatiful')
})

server.listen(3000, ()=> {
    console.log("server is Running  on PORT is 3000");
})