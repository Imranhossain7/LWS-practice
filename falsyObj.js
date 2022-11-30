const falsyObj = {
    a: false,
    b: 100,
    c: undefined,
    d: 'Imran',
    e: null,
    f: [1,2,3],
    g: NaN,
    h:{x: 1, y:2}
}

const trueObj =function (obj){
    for(i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }

    return obj;
}

console.log(trueObj(falsyObj));