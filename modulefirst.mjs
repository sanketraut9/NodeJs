// import {second as first} from './modulesecond.mjs'
// first()

// import second1 from './modulesecond.mjs'
// console.log(second());


// import {second1,first} from './modulesecond.mjs'
// second1();             //without default
// first()           


import * as a from './modulesecond.mjs'
console.log(a.first()); 