(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){

var myClass = require('./lib/myClass');
console.log("calling functions from an object of myClass");
var myClassObj = new myClass("myClassObj");
console.log( myClassObj.afunc() );
console.log( myClassObj.bfunc() );

console.log("calling functions in a static-like context of myClass");
console.log( myClass.prototype.afunc() );
console.log( myClass.prototype.bfunc() );


},{"./lib/myClass":2}],2:[function(require,module,exports){
(function () {
    /* a constructor */
    var myClass = function(initializing_arg) {
        if (initializing_arg !== undefined) {
            this.initial_arg = initializing_arg;  // "this" keyword will refer to the instantiated class object if one was created using "new"
        }
        else {
            this.prototype.initial_arg = "static";
        }
    };
    // partial class files
    require('./src/a.js')(myClass);
    require('./src/b.js')(myClass);
    exports = module.exports = myClass;
})();

},{"./src/a.js":3,"./src/b.js":4}],3:[function(require,module,exports){
(function () {                                                                          
    exports = module.exports = function(myClass) {
        myClass.prototype.afunc = function() { 
            return this.initial_arg + ":this is afunc()"; 
        };
    };
})();

},{}],4:[function(require,module,exports){
(function () {                                                                          
    exports = module.exports = function(myClass) {
        myClass.prototype.bfunc = function() { 
            return "this is bfunc()"; 
        };
    };
})();

},{}]},{},[1]);
