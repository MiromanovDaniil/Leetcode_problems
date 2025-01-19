const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    if (!global.input) global.input = [];
    global.input.push(line.trim());
}).on("close", () => {
    
    const [n, t] = global.input[0].split(" ").map(Number); 
    const floors = global.input[1].split(" ").map(Number); 
    const u = Number(global.input[2]) - 1; 

    const targetFloor = floors[u]; 

    let minDistance = Infinity;

    if (floors[n - 1] - targetFloor <= t || targetFloor - floors[0] <= t) {
        minDistance = floors[n - 1] - 1;
    } else {
        minDistance = 2*Math.min(targetFloor - floors[0], floors[n - 1] - targetFloor) + Math.max(targetFloor - floors[0], floors[n - 1] - targetFloor);
    }

    console.log(minDistance);
});
