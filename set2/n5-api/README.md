# N5 - REST-style API

## Description

This activity demonstrates a REST-style API using Node.js and the built-in HTTP module. The API manages student records using GET, POST, PUT, and DELETE methods.

Student records are stored in an array without using a database.

## Technologies Used

- Node.js
- JavaScript
- HTTP Module
- Postman

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open the terminal.
3. Run the following command:

```bash
node set2/n5-api/index.js
```

4. Open Postman and use the following base URL:

```text
http://localhost:8001
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Retrieve all students |
| GET | `/api/students/:id` | Retrieve a student by ID |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/:id` | Update a student by ID |
| DELETE | `/api/students/:id` | Delete a student by ID |

## Sample Student Data

```json
{
  "name": "Pedro Reyes",
  "course": "BSIT",
  "section": "IV-BSIT-C"
}
```

## Testing

All five API endpoints were tested using Postman.

The tests covered retrieving all students, retrieving a student by ID, adding a new student, updating a student, and deleting a student.

## Screenshots

The screenshots showing the API testing results are saved in the `screenshots` folder.

## Author

**Name:** Andrea G. Dela Cruz  
**Section:** IV-BSIT-C  
**Activity:** N5 - REST-style API  
**Date:** November 24, 2026