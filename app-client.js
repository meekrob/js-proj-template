$ = require('jquery');
$(document).ready(function() {
    $('.jquery-test').text("jquery is working");
});
var myClass = require('./lib/myClass');
console.log("calling functions from an object of myClass");
var myClassObj = new myClass("myClassObj");
console.log( myClassObj.afunc() );
console.log( myClassObj.bfunc() );

console.log("calling functions in a static-like context of myClass");
console.log( myClass.prototype.afunc() );
console.log( myClass.prototype.bfunc() );

