const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result = solveQuard(a, b, c);
alert(result);


function solveQuard(a, b, c){
  const d  = calcDiscr(a, b, c);
  if (d === 0){
   x = -b / (2 * a);
        return 'Result: x1 = ' + x; 
    }  if (d > 0){
    x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'Results: x1 = ' + x1 + ' , x2 = ' + x2;
    }
    else if (d < 0)
        return 'Discriminant is less than zero, try again';

}


function calcDiscr(a, b, c) {
    return b * b - 4 * a * c;
}

