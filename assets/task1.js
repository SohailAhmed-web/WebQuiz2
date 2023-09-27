function task1(number, totalPercent) {
    if (totalAmount === 0) {
        return 0; // To avoid division by zero error
    }

    const percentage = (number / totalPercent) * 100;
    return percentage;
}

const result = task1(5, 100);
console.log(`The percentage is: ${result}%`);
