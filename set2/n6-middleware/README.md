
# N6 - Middleware and API Testing

## Description

This activity extends the N5 Student API by adding two middleware functions: a Logger Middleware and a JSON Middleware.

The Logger Middleware records the HTTP method, URL, and date and time of every incoming request. The JSON Middleware sets the Content-Type header to application/json for API responses.

## Technologies Used

- Node.js
- JavaScript
- Built-in HTTP Module
- Postman

## How to Run

Open the repository folder in VS Code and run:

```bash
node set2/n6-middleware/index.js
```

The server runs at:

```text
http://localhost:8002
```

## Middleware

| Middleware | Purpose |
|---|---|
| Logger Middleware | Logs the HTTP method, URL, and date/time of each request |
| JSON Middleware | Sets the Content-Type header to application/json |

Both middleware functions call `next()` to continue processing the request.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Retrieve all students |
| GET | `/api/students/:id` | Retrieve a student by ID |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/:id` | Update a student by ID |
| DELETE | `/api/students/:id` | Delete a student by ID |

## Testing

All five API endpoints were tested using Postman.

## Screenshots

The API testing screenshots and middleware logs are saved in the `screenshots` folder.

## N6 Answers

The file `N6_answers.docx` contains the explanation of middleware and its role in the request-response cycle.

## Author

**Name:** Andrea G. Dela Cruz  
**Section:** IV-BSIT-C  
**Activity:** N6 - Middleware and API Testing  
**Date:** November 24, 2026
