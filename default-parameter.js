function add(num1, num2 = 5){
    // option 2
    // num2 = num2 || 0;
    // option 1
    /* if(num2 == undefined){
        num2 = 2;
    } */
    const total = num1 + num2;
    return total;
}
const result = add(15, 10);
// console.log(result)

function fullName(first, last='chowdhury'){
    const name = first + ' ' + last;
    return name;
};