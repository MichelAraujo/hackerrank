/**
 * Problem Page:
 * https://www.hackerrank.com/challenges/grading/problem
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    const arrayResult = [];

    grades.forEach((value) => {
        if (value < 38) {
            arrayResult.push(value);
            return;
        }
        
        const multipleOfFive = (Math.ceil(value/5))*5;
        const isLessThree = (multipleOfFive - value) < 3;
        
        if (!isLessThree) {
            arrayResult.push(value);
            return;
        }
        
        arrayResult.push(multipleOfFive);
    });
    
    return arrayResult;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
