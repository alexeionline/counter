/**
*  OperationCounter class
*  @param {Number} x
*  @param {Number} y
*  
*  @param {function} op1
*  @param {function} op2
*  these methods for update X to its way to Y
*
*  @param {function} validate
*  and method for validate starting X and Y
*/

function OperationCounter(x, y, op1, op2, validate) {
    this.x              = x;
    this.y              = y;
    this.op1            = op1;
    this.op2            = op2;
    this.counter        = 0;
    this.isValidParams  = true;

    if (typeof validate === "function") {
        this.isValidParams = validate(x, y);
    }
}

/**
* This method returns minimum count of operations if not validation error
*/

OperationCounter.prototype.getCount = function () {
    return this.isValidParams ? this.processTree([this.x]) : new Error('Invalid params');
};


/**
* This method travels by tree
* As result we have a minimum count of operations
*
*  @param {Array} roots
* 
*/

OperationCounter.prototype.processTree = function (roots) {
    var branches = []
    , left_branch
    , right_branch
    , i
    , root
    ;

    for (i in roots) {
        root = roots[i];

        if (root === this.y) {
            return this.counter;
        }

        left_branch  = this.op1(root);
        right_branch = this.op2(root);

        branches.push(left_branch, right_branch);
    }

    this.counter++;

    return this.processTree(branches);
};

module.exports = OperationCounter;
