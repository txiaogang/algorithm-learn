var assert = require('assert');
const quickSort = require('../sort/quickSort');


const arr = [1, 2, 5, 2, 3, 4, 8, 5, 8, 4, 5, 6, 7, 8, 0, 2, 4, 80];


describe('#quickSort', function () {
    it('should key order', function () {
        quickSort(arr, 0, arr.length - 1);
        console.log(arr);
    });
});
