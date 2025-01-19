import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const n = parseInt(line.trim());
    
    if (n === 1) {
        console.log(0);
    } else {
        const cuts = Math.ceil(Math.log2(n));
        console.log(cuts);
    }
    
    rl.close();
});
