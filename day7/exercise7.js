
// 1
const fullName = (firstName, lastName) => {
    return `Your name is ${firstName} ${lastName}`;
};

console.log(fullName('Sixto','Uriarte'));

const addNumbers = (num1, num2) => {
    return num1+num2;
};

console.log(addNumbers(2,3));


const area = (length, width) => {
    return 2 * (length * width);
};

console.log(area(2,4));

const checkSeason = (season) =>  {
    switch(season){
        case 'Autumn':
            return `Season Autumn`;
            break;
        case 'Winter':
            return `Season Autumn`;
            break;
        case 'Spring':
            return `Season Autumn`;
            break;
        case 'Summer':
            return `Season Autumn`;
            break
        default:
            return null;
    }
}

console.log(checkSeason('Autumn'));


// Level 2

const solveLinEquation = (a, b, c, x, y) =>{
    return  a * x + b * y + c;
}

console.log(solveLinEquation(1,2,3,2,3));

const solveQuadEquation = (a = 0, b = 0, c = 0) => {
    let discriminant = b**2 - 4*a*c;
    if (discriminant < 0) {
        return 'No solutions real'
    } else{
        let sqrt_disc = Math.sqrt(discriminant);
        let x1 = (-b + sqrt_disc) / (2*a);
        let x2 = (-b - sqrt_disc) / (2*a);
        return x1, x2;
    }
};

console.log(solveQuadEquation(1, -1, -2));