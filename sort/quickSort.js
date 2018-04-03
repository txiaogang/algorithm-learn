/**
 * JS 版本
 *
 * 思路：选择一个参考点，一般选择第一个或者最后一个。把小于参考点的放左边，大于参考点的放右边，递归这个步骤。
 * 1、这里我们选择最后数一个作为参考点: key = array[last]。这时候last位置空出来
 * 2、无限循环：
 *    （1）、从第一个（first）向右开始和参考点（key）无限循环比较，直到找到比参考点大的位置。把first值赋予array[last],这个时候array[first]位置空出来
 *    （2）、从最后一个(last) 向左开始和参考点（key) 无限循环比较，直到找到比参考点小的位置。把last值赋予array[fist],这个时候array[last]位置空出来
 *     (3)、循环（1）、（2） 直到first > last
 * 3、把1中保留的key值赋予 array[fist]; 这个地方可以好好想想。这个时候fist 左边比key 小、first右边比key 大
 * 4、把first 分成左右两半 分别调用这个函数本身递归。
 *
 * @param arr {Array} 数组 其实是数组的一个引用
 * @param start {Number} 排序下的开始位置
 * @param end {Number} 排序的结束位置
 */
function quickSort(arr, start, end) {
    if (start >= end) return;
    const key = arr[end];
    let first = start, last = end;
    while (first < last) {
        while (first < last && arr[first] <= key) first++;
        arr[last] = arr[first];
        while (first < last && arr[last] >= key) last--;
        arr[first] = arr[last];
    }
    arr[first] = key;
    quickSort(arr, start, first - 1);
    quickSort(arr, first + 1, end);
}


// const arr = [];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

module.exports = quickSort;