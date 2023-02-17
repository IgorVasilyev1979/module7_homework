function getOwnKeysAndValues(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {    
            console.log(key + ': ' + obj[key]);
        }   
    }
}

const myObj = {a: 1, b: 'true', c:3.14};
getOwnKeysAndValues(myObj);