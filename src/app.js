import http from 'http'

/**
 * @type { import('http').RequestListener }
 */
async function dispatch(req, res) {
  req.setTimeout(100)

  const server = http.createServer((req, res) => {

    // RES
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8')

    res.write('message : Server is running')
 
    res.statusCode = 200

    const data = {message : 'Hello world'}
    res.end(JSON.stringify(data))
 
    // REQ 

    req.setTimeout(100)
 
    if (req.method === 'GET') {
     if (req.url === '/hello') sayHello(req, res)
    }
    export function sayHello(req, res) {
     req.end('Hello')
    }      
 
 
    // ROUTES
    
    
   })

   server.listen("5001")
}

export default http.createServer(dispatch)
