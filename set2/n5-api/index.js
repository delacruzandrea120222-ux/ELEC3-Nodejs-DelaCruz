
/*
Name: Andrea G. Dela Cruz
Section: IV-BSIT-C
Activity: N5 - REST-style API
Date: November 24, 2026
*/

const http = require("http");

const PORT = 8001;

// Sample student records
let students = [
    { id: 1, name: "Andrea Dela Cruz", course: "BSIT", section: "IV-BSIT-C" },
    { id: 2, name: "Maria Santos", course: "BSIT", section: "IV-BSIT-C" },
    { id: 3, name: "Juan Cruz", course: "BSIT", section: "IV-BSIT-C" }
];

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    // Send JSON responses
    function sendJSON(statusCode, data) {
        res.writeHead(statusCode, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(data, null, 2));
    }

    // Read JSON request body
    function readBody(callback) {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                callback(null, JSON.parse(body));
            } catch (error) {
                callback(error);
            }
        });
    }

    // GET all students
    if (pathname === "/api/students" && req.method === "GET") {
        sendJSON(200, students);
    }

    // POST a new student
    else if (pathname === "/api/students" && req.method === "POST") {
        readBody((error, data) => {
            if (error) {
                return sendJSON(400, { message: "Invalid JSON request body." });
            }

            if (!data.name || !data.course || !data.section) {
                return sendJSON(400, {
                    message: "Name, course, and section are required."
                });
            }

            const newStudent = {
                id: students.length > 0
                    ? Math.max(...students.map(student => student.id)) + 1
                    : 1,
                name: data.name,
                course: data.course,
                section: data.section
            };

            students.push(newStudent);
            sendJSON(201, newStudent);
        });
    }

    // GET, PUT, or DELETE one student
    else if (pathname.startsWith("/api/students/")) {
        const id = Number(pathname.split("/")[3]);
        const studentIndex = students.findIndex(student => student.id === id);

        if (!Number.isInteger(id) || id <= 0 || studentIndex === -1) {
            return sendJSON(404, { message: "Student not found." });
        }

        // GET one student
        if (req.method === "GET") {
            sendJSON(200, students[studentIndex]);
        }

        // PUT update student
        else if (req.method === "PUT") {
            readBody((error, data) => {
                if (error) {
                    return sendJSON(400, { message: "Invalid JSON request body." });
                }

                if (!data.name || !data.course || !data.section) {
                    return sendJSON(400, {
                        message: "Name, course, and section are required."
                    });
                }

                students[studentIndex] = {
                    id,
                    name: data.name,
                    course: data.course,
                    section: data.section
                };

                sendJSON(200, students[studentIndex]);
            });
        }

        // DELETE student
        else if (req.method === "DELETE") {
            const deletedStudent = students.splice(studentIndex, 1)[0];

            sendJSON(200, {
                message: "Student deleted successfully.",
                student: deletedStudent
            });
        }

        else {
            sendJSON(405, { message: "Method not allowed." });
        }
    }

    // Unknown route
    else {
        sendJSON(404, { message: "Route not found." });
    }
});

server.listen(PORT, () => {
    console.log(`N5 Student API is running at http://localhost:${PORT}`);
});
