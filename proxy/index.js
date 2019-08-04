const url = require('url');
const net = require('net');
const http = require('http');

function OProxy(callback) {
  const httpServer = http.createServer((req, res) => {
    // Non proxy request
    if (req.url.indexOf('http://') !== 0) {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      console.log(req.method, req.url);
      console.log();

      res.end(`O proxy :D`);
      return;
    }

    // Straight http proxy
    console.warn(`${req.method}(${req.url})`);
    // Build new request to send to target
    const outbound = http.request(
      req.url,
      {
        headers: req.headers,
        method: req.method
      },
      resp => {
        // Headers target => client
        res.writeHead(resp.statusCode, resp.headers);
        // Body target => client
        resp.pipe(res);
        // When finished piping body, end request to client
        resp.on('end', () => res.end());
      }
    );
    // Body client => target
    req.pipe(outbound);
    // Handle errors
    outbound.on('error', err => {
      console.error(`PROXY_ERR(${req.url}): ${err}`);
      res.writeHead(500);
      res.end(`Unknown Error:${err}`);
    });
  });

  // For proxied TCP & HTTPS connections
  httpServer.on('connect', (req, socket, head) => {
    const target = url.parse(`any://${req.url}`);
    const { port, hostname } = target;
    console.warn('target:', req.url);
    const data = {
      url: req.url,
      success: true,
      ...target,
    }
    callback(data);
    // Cleanup closes sockets
    const cleanup = () => {
      try {
        targetSocket.end();
        socket.end();
      } catch (err) {
        console.error('err', err);
      }
    };

    // onError prints errror then cleansup
    const onError = err => {
      console.error(`OProxy(${req.ip} => ${req.url}):`, err);
      console.error();
      cleanup();
    };

    const targetSocket = net.connect(Number(port), hostname, () => {
      console.warn(`CONNECTED to ${hostname}:${port}`);

      // Acknowledge that connection is established
      socket.write(
        [
          'HTTP/1.1 200 Connection Established\r\n',
          'Proxy-agent: jupiterdev-proxy\r\n',
          '\r\n'
        ].join('')
      );
      // Send head to target
      targetSocket.write(head);
      // Pipe data back and forth between client & target
      targetSocket.pipe(socket);
      socket.pipe(targetSocket);
    });

    // Error handlers
    socket.on('error', onError);
    targetSocket.on('error', onError);

    // On close
    socket.on('close', cleanup);
    targetSocket.on('close', cleanup);
  });

  return require('http-shutdown')(httpServer);
}

export default OProxy;
