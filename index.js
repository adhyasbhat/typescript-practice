"use strict";
console.log("hi adhya");
let age = 20;
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        console.log(weight * 2.2);
    }
    else {
        console.log(parseInt(weight) * 2.2);
    }
}
kgToLbs(10);
kgToLbs('10kg');
