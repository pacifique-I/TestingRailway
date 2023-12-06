const { log } = require('console')
const http = require('http')
require('dotenv').config()

const PORT = 3000 || process.env.PORT

const server = http.createServer((req,res)=>{
    res.end('Hello world!')
})

server.listen(PORT ,()=>{
    log('server started listening ...')
})