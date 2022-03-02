/* 
  数组操作的工具
*/

// todo 实现多维数组扁平化
/**
 * 1、递归实现
 * @param {*} arr 深层嵌套的数据
 * @returns array 新数组
 */
const flat1 = (arr) => {
  return arr.reduce((pro, item) => {
    // console.log(pro, item);
    return pro.concat(Array.isArray(item) ? flat1(item) : item);
  }, []);
};
/**
 * 2、遍历实现
 * @param {*} arr 深层嵌套的数据
 * @returns array 新数组
 */
const flat2 = (arr) => {
  const result = [];
  const newArr = [...arr];
  while (newArr.length !== 0) {
    const val = newArr.pop();
    if (Array.isArray(val)) {
      newArr.push(...val);
    } else {
      result.unshift(val);
    }
  }
  return result;
};
/**
 * 3、Infinity即无限层
 * @param {*} arr 深层嵌套的数据
 * @returns array 新数组
 */
const flat3 = (array) => {
  return array.flat(Infinity);
};

let arr = [1, [2, 3, 4], [5, [6, [7, [8]]]]];
console.log(flat1(arr));
console.log(flat2(arr));
console.log(flat3(arr));
