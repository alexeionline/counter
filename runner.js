(function () {

    var OperationCounter = require('./operation-counter');

    /**
    * Get starting params from process object
    */
    var x, y, oc;
    x = process.argv[2] ? parseInt(process.argv[2]) : 6;
    y = process.argv[3] ? parseInt(process.argv[3]) : 10;

    function subtractFn(value) {
        return value - 1;
    }

    function multiplyFn(value) { 
        return value * 2; 
    }

    function validateFn(x, y) { 
        return !(x <= 0 && y > 0) && !(x < 0 && y === 0);
    }

    /**
    * Create new OperationCounter instance with our params
    */
    oc = new OperationCounter(x, y, subtractFn, multiplyFn, validateFn);
    
    console.log(oc.getCount());

} ())
