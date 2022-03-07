// TODO 实现new操作符
/**
 * new 关键字做了什么操作 ：
 *      1、初始化一个空对象 o={}
 *      2、为这个 o={} 添加 proto 属性，将该属性链接至 构造函数 的原型对象  o.__proto__ = Person.prototype
 *      3、绑定this对象为 o，传入参数；执行Person构造函数，进行属性和方法的赋值操作  Person.call(o, '胡小帅', 18)
 *      4、如果该函数没有返回对象，则返回this
 */
const _new = function (func, ...args) {
  let obj = Object.create(func.prototype); //1 、2
  let result = func.apply(obj, args); //3
  // 4
  if (
    (typeof result === "object" && result !== "null") ||
    typeof result === "function"
  ) {
    return result;
  } else {
    return obj;
  }
};
// function Person(pName, pAge) {
//   this.name = pName;
//   this.pAge = pAge;
//   this.say = () => {
//     console.log(this);
//     console.log(`我叫${this.name}`);
//   };
// }
// const p = new Person("胡小帅", 18);
// console.log(p);

// const o = _new(Person, "胡大帅", 89);
// console.log(o);
// todo  call apply bind 的区别

/**
 *      1、fn.call(thisArg, param1, param2, ...) :
 *      2、fn.apply(thisArg, [param1, param2,...])
 *          解释 :   ①、返回fun的拷贝，并拥有指定的this值和初始参数,这个this指向是 thisArg的this指向。
 *                   ②、当非严格模式下，thisArg指向 null，undefined，this指向window
 *                   ③、值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象，如 String、Number、Boolean
 *                   ④、call/apply改变了函数的this上下文后，马上执行该函数 fn
 *      3、fun.bind(thisArg, param1, param2, ...)  ：bind则是返回改变了上下文后的函数,不执行该函数
 */
// 第一次提交
// 第二次提交
