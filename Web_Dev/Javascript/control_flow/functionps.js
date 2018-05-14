function isEven(x) {
    return x % 2 === 0;
    
    /*if (x % 2 === 0) {
        return true;
    }
    else {
        return false;
    }*/
}

function factorial(x) {
    var result = 1;
    
    for(var i = 2; i <= x; i++) {
        result *= i;
    }

    return result;

    /*if (x === 0) {
        return 1;
    } 
    else {
        for(i=x-1; i > 0; i--) {
            x *= i;            
        }
        return x;
    }*/
}

function kebabToSnake(str) {
    var newstr = str.replace(/-/g, '_');
    return newstr;           
}

