// fungsi konvert string ke number

function stringNumber(string){
    return Number(string)
}

let stringKeNumber = stringNumber('12');
console.log(stringKeNumber,'type-', typeof(stringKeNumber));

// fungsi konvert number ke string

function numberString(number){
    return String(number)
}

let numberKeString = numberString(12);
console.log(numberKeString,'type-',typeof(numberKeString));


// fungsi string array ke array
function stringArrayTo(stringArray){
    return JSON.parse(stringArray)
}

let teStringArray = stringArrayTo('["a","b"]');
console.log(teStringArray,'type-',typeof(teStringArray))