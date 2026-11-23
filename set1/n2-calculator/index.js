
// Name: Andrea G. Dela Cruz
// Section: IV-BSIT-C
// Activity: N2 - Modular Calculator
// Date: November 23, 2026

const operations = require("./operations");
const formatResult = require("./formatter");
const path = require("path");

const fileName = path.basename(__filename);

const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);

if (!operation || process.argv.length < 5) {
    console.log("Usage: node index.js <operation> <number1> <number2>");
    console.log("Operations: add, subtract, multiply, divide, average");
    process.exit(1);
}

if (
    process.argv[3].trim() === "" ||
    process.argv[4].trim() === "" ||
    !Number.isFinite(firstNumber) ||
    !Number.isFinite(secondNumber)
) {
    console.log("Error: Please enter valid numbers.");
    process.exit(1);
}

const operationFunctions = {
    add: operations.add,
    subtract: operations.subtract,
    multiply: operations.multiply,
    divide: operations.divide,
    average: operations.average
};

if (!operationFunctions[operation]) {
    console.log("Error: Unknown operation.");
    console.log("Available operations: add, subtract, multiply, divide, average");
    process.exit(1);
}

try {
    const result = operationFunctions[operation](
        firstNumber,
        secondNumber
    );

    console.log("===== N2 MODULAR CALCULATOR =====");
    console.log("Name: Andrea G. Dela Cruz");
    console.log("Program:", fileName);
    console.log(formatResult(operation, firstNumber, secondNumber, result));
} catch (error) {
    console.log("Error:", error.message);
    process.exitCode = 1;
}
