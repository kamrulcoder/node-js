const add = (a,b) => a+b;

const sub = (a,b) => a-b;

const div = (a,b) => a+b;

const test = (a,b) => add(a,b)/sub(a,b);

// export system 1
module.exports = {
    add, 
    sub,
    div,
    test
}


// export system 2
module.export.add = add;
module.export.sub = sub;
module.export.div = div;
module.export.test = test;