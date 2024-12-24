const http = require('http')
const PORT= 8000

const server = http.createServer((req:any, res:any)=> {
    res.end(JSON.stringify({"name": "jatin", "job": "CS Engineer", "emp_id": "1898544"}))
})

server.listen(PORT, () => {console.log(`Server listening in port : ${PORT}`)})
