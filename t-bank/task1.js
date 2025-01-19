import { readFileSync } from 'fs';

const input = readFileSync(0, 'utf-8'); 
const [costPerMonth, includedTraffic, extraCost, plannedTraffic] = input.split(" ").map(Number);

if (
    isNaN(costPerMonth) || isNaN(includedTraffic) || 
    isNaN(extraCost) || isNaN(plannedTraffic) ||
    costPerMonth < 0 || includedTraffic < 0 || extraCost < 0 || plannedTraffic < 0
) {
    console.error("Invalid input. Please provide four non-negative numeric values.");
    process.exit(1);
}

let totalCost = costPerMonth;
if (plannedTraffic > includedTraffic) {
    totalCost += (plannedTraffic - includedTraffic) * extraCost;
}

console.log(totalCost);
