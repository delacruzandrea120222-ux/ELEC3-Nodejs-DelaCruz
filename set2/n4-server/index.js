
// Name: Andrea G. Dela Cruz
// Section: IV-BSIT-C
// Activity: N4 - HTTP Server
// Date: November 24, 2026

const http = require("http");

const PORT = 8000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (url.pathname === "/") {
        res.writeHead(200);
        res.end(`
            <h1>Welcome to My Home Page</h1>
            <p>Name: Andrea G. Dela Cruz</p>
            <p>Section: IV-BSIT-C</p>
        `);
    } else if (url.pathname === "/about") {
        res.writeHead(200);
        res.end(`
            <h1>About Me</h1>
            <p>I am a BSIT student learning Node.js and web development.</p>
        `);
    } else if (url.pathname === "/contact") {
        res.writeHead(200);
        res.end(`
            <h1>Contact Page</h1>
            <p>You can contact me through my school communication channels.</p>
        `);
    } else {
        res.writeHead(404);
        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
