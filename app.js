// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count)
{

    if (count < 0)
    {
        for (let i = -1; i >= count; i--)
        {
            if (i % 2 != 0)
            {
                console.log(i);
            }

        }
        
    }
    for (let i=1; i <= count; i++)
    {
        if (i % 2 != 0 )
        {
            console.log(i);
        }
    }
}
printOdds(-10)
printOdds(10);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age)
{
    let oldEnoughMsg = `Congrats ${userName}, you can drive!`;
    let tooYoungMsg = `Sorry ${userName}, but you need to wait until you're 16.`;
    let notEnoughInfo = `Sorry I need more information to make a decision`;

    if (age < 16){
     console.log(tooYoungMsg)
    } else if(age>=16){ 
      console.log(oldEnoughMsg)
    }else if(age = undefined){
        console.log(notEnoughInfo)
    }
}
checkAge("Dave", 14);
checkAge("Mave", 122);
checkAge("Rave", ``);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuad(x,y){
    if (x > 0 && y > 0){
        return `Quadrant 1`;
    } else if (x < 0 && y > 0){
        return `Quadrant 2`;
    } else if (x < 0 && y < 0){
        return `Quadrant 3`;
    } else if (x > 0 && y < 0){
        return `Quadrant 4`;
    } else if (x == 0 && y != 0){
        return `x Axis`;
    } else if (x != 0 && y == 0){
        return `y Axis`;
    } else {
        return `Orgin`;
    }
}
console.log(checkQuad(11,1));
console.log(checkQuad(-11,1));
console.log(checkQuad(-11,-1));
console.log(checkQuad(11,-1));
console.log(checkQuad(0,1));
console.log(checkQuad(11,0));
console.log(checkQuad(0,0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c){
    let isValid = isValidTriangle(a,b,c)
    if (isValid) {
        if(a == b && b == c){
            return `Equilateral`;
        } else if (a == b || b ==c || a==c) {
            return `Isosceles`;
        } else {
            return `Scalene`;
        }
    } else {
        return `Not a valid triangle.`;
    }
}

console.log(checkTriangle(4, 2, 3));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 1, 2));
console.log(checkTriangle(1, 2, 2));

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataFeedback (plan, day, usage){
    let period = 30;
    let avg = usage / day;
    let projected = plan / period;
    let remainingDays = period - day;
    let remaining = plan - usage;
    let projectedUsage = remainingDays * avg;
    let statusMsg;

    if(avg > projected){
        statusMsg = `EXCEEDING`;
    } else if (ave < projected){
        statusMsg = `UNDER`;
    } else {
        statusMsg = `AT`
    }

    console.log(`${day} day(s) used, ${remainingDays} day(s) remaining
    Average projected use: ${projected} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg} GB/day),
    continuing this usage, you'll end up using ${plan - (usage + projected)}
    GB from your data limit.
    To stay below your data plan, use no more than ${(remaining / remainingDays).toFixed(2)} GB/day.`);

}

dataFeedback(50, 10, 25);

