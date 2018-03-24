(function () {                                                                          
    exports = module.exports = function(myClass) {
        myClass.prototype.afunc = function() { 
            return this.initial_arg + ":this is afunc()"; 
        };
    };
})();
