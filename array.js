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
let arr = [1, [2, 3, 4], [5, [6, [7, [8]]]]];
console.log(flat1(arr));
