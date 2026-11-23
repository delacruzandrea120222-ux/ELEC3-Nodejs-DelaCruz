
const fs = require("fs");
const path = require("path");

// Name: Andrea G. Dela Cruz
// Section: IV-BSIT-C
// Activity: N3 - File Manager
// Date: November 23, 2026

const filesDirectory = path.join(__dirname, "files");

if (!fs.existsSync(filesDirectory)) {
    fs.mkdirSync(filesDirectory);
}

function createFile(fileName, content) {
    const filePath = path.join(filesDirectory, fileName);
    fs.writeFileSync(filePath, content);
    console.log("File created:", fileName);
}

function readFile(fileName) {
    const filePath = path.join(filesDirectory, fileName);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File does not exist.");
        return;
    }

    const content = fs.readFileSync(filePath, "utf8");
    console.log("File content:", content);
}

function updateFile(fileName, content) {
    const filePath = path.join(filesDirectory, fileName);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File does not exist.");
        return;
    }

    fs.appendFileSync(filePath, content);
    console.log("File updated:", fileName);
}

function deleteFile(fileName) {
    const filePath = path.join(filesDirectory, fileName);

    if (!fs.existsSync(filePath)) {
        console.log("Error: File does not exist.");
        return;
    }

    fs.unlinkSync(filePath);
    console.log("File deleted:", fileName);
}

function listFiles() {
    const fileNames = fs.readdirSync(filesDirectory);

    if (fileNames.length === 0) {
        console.log("No files found.");
        return;
    }

    console.log("===== FILE LIST =====");

    fileNames.forEach((fileName) => {
        const filePath = path.join(filesDirectory, fileName);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            const content = fs.readFileSync(filePath, "utf8");

            console.log("-------------------------");
            console.log("Full Path:", filePath);
            console.log("File Name:", path.basename(filePath));
            console.log("Extension:", path.extname(filePath));
            console.log("Contents:", content);
        }
    });
}

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

switch (command) {
    case "create":
        if (!fileName || !content) {
            console.log("Usage: node index.js create <filename> <content>");
        } else {
            createFile(fileName, content);
        }
        break;

    case "read":
        if (!fileName) {
            console.log("Usage: node index.js read <filename>");
        } else {
            readFile(fileName);
        }
        break;

    case "update":
        if (!fileName || !content) {
            console.log("Usage: node index.js update <filename> <content>");
        } else {
            updateFile(fileName, content);
        }
        break;

    case "delete":
        if (!fileName) {
            console.log("Usage: node index.js delete <filename>");
        } else {
            deleteFile(fileName);
        }
        break;

    case "list":
        listFiles();
        break;

    default:
        console.log("===== N3 FILE MANAGER =====");
        console.log("Available commands:");
        console.log("create <filename> <content>");
        console.log("read <filename>");
        console.log("update <filename> <content>");
        console.log("delete <filename>");
        console.log("list");
}
