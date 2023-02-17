function isPropertyIn(str, obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {    
            if (key == str) {
                return true;
            }
        }   
    }
    return false;
}

const myObj = {a:10, b:20, bcd: 'true'};
console.log(isPropertyIn('a', myObj));