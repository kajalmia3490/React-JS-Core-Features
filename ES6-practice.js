// //  template string:
// let exmp = '        Kajal'
// console.log(`Hi, ${exmp.padStart(20, '$')}!`)
// console.log(exmp.trim())

// let example = 'Diploma '
// console.log(example.repeat(5))

/**
 * var, let, const keyword:
 * var - this keyword can be access from any block and re-assign
 * let - this keyword can be access from limited in block and re-assign. but can't be declare same variable name at the same time.
 * const - this keyword can't be access out of block and can't be re-assign and can't be declare same variable name at same time.
 */

// new arrow function syntax:
// let arrowFn = () => {
//     console.log('Hi, I am arrow Function!')
// }
// arrowFn()

// // arrow function and this:
// let fn = (name, roll) => {
//     return name + roll
// }
// console.log(fn('Kajal ', 56))

// // default parameter:
// function squre(n = 25) {
//     return n * n
// }
// console.log(squre())

// // create custom iterable object:
// let iterateObj = {
//     start: 1, end: 10,
//     [Symbol.iterator]: function () {
//         let currValue = this.start
//         let self = this
//         return {
//             next() {
//                 return {
//                     done: currValue > self.end,
//                     value: currValue > self.end ? undefined : currValue++
//                 }
//             }
//         }
//     }
// }

// for( let n  of iterateObj) {
//     console.log(n)
// }

// let iterate = iterateObj[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// rest and spread operator:
// // rest operator:
// function sum(...rest) {
//     // console.log(rest)
//     return rest.reduce((a, b) => {
//         return a + b
//     })
// }
// console.log(sum(1,2,3,45,6,7))

// // spread operator:
// let arr = [2, 4, 6, 8, 10]
// let arrs = [1, 3, 5, 7, 9]
// let newArr = [arrs, ...arr]

// console.log(newArr)

// //javascript object literals declaration:
// let obj = {
//     print: function() {

//     }
// }

// // es6  object literals declaration:
// let objs = {
//     print() {

//     }
// }

// // destructuring in js:
// const obj = {
//     name: 'Kajal', address: {
//         city: 'Dhaka', thana: 'Bhairab'
//     }
// }
// const {name, address: {city, thana}} = obj
// console.log(obj.address)

// // object from Entries method:
// // object to array:
// let obj = {
//     name: 'Kajal', address: 'Bhairab'
// }
// let createArr = Object.entries(obj)
// console.log(createArr)

// // what is symbol es6:
// let s1 = Symbol()
// let s2 = Symbol('Kajal')
// console.log(s1 === s2)

// // what's the iterator:
// let data = [2, 4, 6, 8]
// function createIterator(collect) {
//     let n = 0
//     return {
//         next() {
//             return {
//                 done: n >= collect.length,
//                 value: collect[n++]
//             }
//         }
//     }
// }
// let iterate = createIterator(data)
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// es6 iterator: how to use:
// let data = [1, 3, 5]
// let newData = data[Symbol.iterator]()
// console.log(newData.next())
// console.log(newData.next())
// console.log(newData.next())
// console.log(newData.next())

// // es6 for of loop
// let expArr = [1, 2, 3, 4, 5, 6]
// for(let n of expArr) {
//     console.log(n)
// }

// // what is generator function:
// let objs = {
//     start: 1, end: 3,
//     [Symbol.iterator]: function* () {
//         let cValue = this.start
//         while(cValue < this.end) {
//             yield cValue++
//         }
//     }
// }
// let generate = objs[Symbol.iterator]()
// console.log(generate.next())
// console.log(generate.next())
// console.log(generate.next())

// //simple generator function:
// function* normGen() {
//     yield 1
//     yield 2
//     yield 3
// }
// let gen = normGen()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// // another generate function:
// const arr = [2, 3, 4]

// function* generate (collection) {
//     for(let i = 0; i < collection.length; i++) {
//         yield collection[i]
//     }
// }
// let it = generate(arr)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

//first term is array data structure. but this term use  to understand the data structure, two special new data structure has come in es6 (set, map):

// // set -data structure 
// let someNum = [2, 3, 4, 5, 4, 5, 6, 3, 2]
// let finalData = new Set(someNum)
// finalData.add(345)
// console.log(finalData)

// weak map and weak set in js: this method usecase for a while will not be hold the object refference. 

// understading map in js:
// map data structures work is 'key' and 'value' pair.
// as key, value can be kept object, number, boolean value etc in map structure.

// // key, value pair syntax: 
// let map = new Map(
//     [
//         ['a', 10], ['b', 20], ['c', 30]
//     ]
// )
// map.set('d', 40)
// map.delete('a')
// console.log(map)

// // class syntax and class definition and class properties: 
// class Circle {
//     constructor(r) {
//         this.pie = 3.1416
//         this.radius = r
//     }
//     area() {
//         console.log(this.pie * this.radius * this.radius)
//     }
//     scope() {
//         console.log(2 * this.pie * this.radius)
//     }
// }

// let result = new Circle(5)
// result.scope()

// let result1 = new Circle(4)
// result1.area()

// // classes are a template creating for object: 
// class StudentId {
//     constructor(name, roll) {
//         this.fullName = name
//         this.rNum = roll
//     }
//     details() {
//         return `Hi, ${this.fullName}! Your roll number is ${this.rNum}`
//     }
// }

// let roll1 = new StudentId('Kajal', 56)
// console.log(roll1.details())
// let roll2 = new StudentId('Atiqur', 506)
// console.log(roll2.details())

// // static method in es6:
// class bankId {
//     constructor(name, idNumber) {
//         this.fullName = name
//         this.id = idNumber
//     }
//     static details(str) {
//         let stData = JSON.parse(str)
//         return new bankId(stData.name, stData.idNumber)
//     }
// }
// let str = '{"name": "Kajal", "idNumber": "56"}'
// let custOne = bankId.details(str)
// console.log(custOne)

// // 'this' property in es6:
// 'use strict'
//  function Fire() {
//     this.spedd = function() {
//         console.log(this)
//     }
//  }

//  let experiment = new Fire()
//  let newExperiment = experiment.spedd
//  newExperiment()

//  class Yes {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }
//     msg() {
//         console.log(this.name, this.email)
//     }
//     test() {
//         console.log(this)
//     }
//     static anotherTest() {
//         console.log('I am a static method!')
//     }
//  }

//  let tested = new Yes('Kajal', 'Kajalmia3490')
// console.log(tested.test())

// // hide private data with weakMap:
// const _part1 = new WeakMap()
// const _part2 = new WeakMap()
// const _draw0 = new WeakMap()

// class Box {
//     constructor(part1, part2) {
//         _part1.set(this, part1)
//         _part2.set(this, part2)
//         _draw0.set(this, () => {
//             console.log('Google Chrome')
//         })
//     }

//     draw() {
//         console.log(_part1.get(this))
//         _draw0.get(this)()
//     }
// }

// let testing = new Box(2, 4)
// testing.draw()
// console.log(testing)

// // getter and setter es6:
// const _name = new WeakMap()
// const _email = new WeakMap()

// class Base {
//     constructor(name, email) {
//         _name.set(this, name)
//         _email.set(this, email)
//     }

//     get name() {
//         return _name.get(this)
//     }
//     set email(e) {
//         _email.set(this, e)
//     }

//     draw() {
//         console.log('I am drawer')
//     }
// }

// let testFul = new Base('Kajal', 'kajalmia3490')
// testFul.draw()
// console.log(testFul.name)
// console.log(testFul.email)

// // inheritance in es6:
// class Msg {
//     constructor() {

//     }

//     sms () {
//         return 'I am alert msg!'
//     }
// }

// class Add extends Msg {
//     constructor(a, b) {
//         super()
//         this.a = a
//         this.b = b
//     }
//     sum() {
//         return this.a + this.b
//     }
// }

// let result = new Add(2, 5)
// console.log(result.sum())

// let result1 = new Msg()
// console.log(result1.sms())

// module system: 
