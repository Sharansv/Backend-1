const http = require('http');

const server = http.createServer((req,res) => {
    // console.log(req);
    if(req.url === '/'){
        res.end('welcome to home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }

    res.end(   `
        <h1>Oooops!!!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/"> back Home </a>
   `)
    
    // res.write('Welcome to home page baby')
    // res.end()
})

server.listen(5000)