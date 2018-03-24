(function () {
    var myClass = function(initializing_arg) { /* a constructor */
        if (initializing_arg !== undefined) {
            this.initial_arg = initializing_arg;  // "this" keyword will refer to the instantiated class object if one was created using "new"
        }
    };
    // partial class files
    require('./src/a.js')(myClass);
    require('./src/b.js')(myClass);
    exports = module.exports = myClass;
})();
