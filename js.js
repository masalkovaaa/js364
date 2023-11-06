//1
// let input=document.querySelector('#input')
// let end=document.querySelector('#end')
// input.addEventListener('blur', function() {
//     end.textContent = input.value;
// })

//2
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let button = document.querySelector('#button')
// let res = document.querySelector('#res')
// button.addEventListener('click', function name(params) {
//     res.textContent= +input1.value + +input2.value
// })

//3
// let input=document.querySelector('#input')
// let end=document.querySelector('#end')
// input.addEventListener('blur', function() {
//     let sum=0;
//     for(let num of input.value){
//         sum += +num;
//     }
//     end.textContent = sum;
// })

//4
// let input = document.querySelector("#input")
// let result = document.querySelector("#end")
// function avg() {
//     let arr = input.value.split(',')
//     let res = arr.reduce((sum, elem) => {
//         return sum += +elem
//     }, 0)
//     return res/arr.length
// }
// input.addEventListener('blur', () => {
//     result.textContent = avg()
// })

//5
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
// let input4 = document.querySelector('#input4')
// input1.addEventListener('blur', function name(params) {
//     let [surname, name, middlename] = input1.value.split(' ')
//     input2.value = surname;
//     input3.value = name;
//     input4.value = middlename
// })

//6
// let input = document.querySelector("#input")
// function firstLetterToUpperCase(str) {

//     let arr = str.split('')
//     arr[0] = arr[0].toUpperCase()
//     return arr.join('')
// }
// function firstLetterInEachWordToUpperCase(str) {
//     let arr = str.split(' ')
//     let newArr = []
//     for (let word of arr) {
//         newArr.push(firstLetterToUpperCase(word))
//     }
//     return newArr.join(' ')
// }
// input.addEventListener('blur', () => {
//     input.value = firstLetterInEachWordToUpperCase(input.value)
// })

//7
// let input = document.querySelector('#input')
// input.addEventListener('blur', function() {
//     let arr = input.value.split(' ')
//     input.value = arr.length
// })

//8
// let input = document.querySelector("#input")
// input.addEventListener('blur', () => {
//     input.value = input.value.replaceAll('.', '-')
// })

//9
// let input = document.querySelector("#input")
// let res = document.querySelector("#res")
// let button = document.querySelector("#button")
// button.addEventListener('click' , function name(params) {
//     let reverse = input.value
//         .split('')
//         .reverse()
//         .join('')
//     if (input.value === reverse) {
//         res.textContent = 'true'
//     }
//     else {
//         res.textContent = 'false'
//     }
// })

//10
// let input = document.querySelector("#input")
// let res = document.querySelector("#end")
// input.addEventListener('blur', function name(params) {
//     let arr = input.value.split('')
//     arr.forEach(element => {
//         if (element==='3'){
//             res.textContent = 'true' 
//         }
//         else if (res.textContent != 'true') {
//             res.textContent = 'false'
//         }
//     });
// })

//11
// let p = document.querySelectorAll('#p')
// let button = document.querySelector("#button")
// button.addEventListener('click' , function name(params) {
//     p.forEach((elem, id) => {
//         elem.textContent += id+1
//     })
// })

//12
// let links = document.querySelectorAll('a')
// let button = document.querySelector("#button")
// button.addEventListener('click', ()=> {
//     links.forEach(elem => 
//         elem.textContent+= '('+ elem.href +')'
//         )
// })

//13
// let links = document.querySelectorAll('a')
// let button = document.querySelector("#button")
// button.addEventListener('click', ()=> {
//     links.forEach(elem => {
//         if (elem.href.startsWith('https://')) {
//             console.log(1)
//             elem.textContent += '=>'
//         }
//     })
// })

//14
// let nums=document.querySelectorAll('p')
// nums.forEach(elem => {
//     elem.addEventListener('click', (elem) => {
//         elem.target.textContent = (+elem.target.textContent)**2
//     })      
// })

// 15
// let input = document.querySelector('#input')
// let result = document.querySelector('#end')
// input.addEventListener('blur', () => {
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let [day, month, year] = input.value.split('.')
//     let date = new Date(year, month, day, 0, 0, 0)
//     result.textContent = days[date.getDay()]
// })

// 16
// let input = document.getElementById('input')
// let minus = document.getElementById('minus')
// let plus = document.getElementById('plus')
// minus.onclick = () => {
//     if (+input.value !== 0) {
//         input.value = +input.value - 1
//     }
// }
// plus.onclick = () => {
//     input.value = +input.value + 1
// }

// 17
// let input = document.querySelector('#input')
// let elems = document.querySelectorAll('p')
// elems.forEach(elem => {
//     elem.addEventListener('click', (elem) => {
//         input.value = +input.value + 1
//     })
// })

// 18
// let elems = document.querySelectorAll('div')
// elems.forEach(elem => {
//     let str = elem.textContent.substring(0, 10)
//     elem.textContent = str + '...'
// })

// 19
// let input = document.querySelector('#input')
// input.addEventListener('blur', () => {
//     let value = +input.value
//     if(value >= 1 && value <= 100) {
//         input.style.backgroundColor = 'green'
//     }
//     else {
//         input.style.backgroundColor = 'red'
//     }
// })

// 20
// let input = document.querySelector('#input')
// let button = document.querySelector('#button')
// function str(len) {
//     first = 'qwertyQWERTY';
//     let str = '';
//     for (let i = 0; i < len; i++) {
//         let pos = Math.floor(Math.random() * first.length);
//         str += first.substring(pos,pos+1);
//     }
//     return str;
// }
// button.onclick = () => {
//     input.value = str(8)
// }

// 21
// let input = document.querySelector('#input')
// let button = document.querySelector('#button')
// function change(str) {
//     return str.split('')
//         .sort(() => Math.random() - 0.5)
//         .join('')
// }
// button.onclick = () => {
//     input.value = change(input.value)
// }

// 22
// let input = document.querySelector('#input')
// let button = document.querySelector('#button')
// let result = document.querySelector('#res')
// function func(num) {
//     return (num - 32) / 1.8
// }
// button.onclick = () => {
//     result.textContent = func(+input.value)
// }

// 23
// let input = document.querySelector('#input')
// let button = document.querySelector('#button')
// let result = document.querySelector('#res')
// function factorial(num) {
//     if (num === 0) {
//         return 1;
//     }
//     else {
//         return num * factorial(num - 1);
//     }
// }
// button.onclick = () => {
//     result.textContent = factorial(+input.value)
// }


// 24
// let input1 = document.querySelector('#input1')
// let input2 = document.querySelector('#input2')
// let input3 = document.querySelector('#input3')
// let button = document.querySelector('#button')
// let result = document.querySelector('#res')
// function solution(a, b, c) {
//     let d = b**2 - 4*a*c
//     console.log(d)
//     if (d >= 0) {
//         return {
//             x1: (-b + d**0.5) / (2*a),
//             x2: (-b - d**0.5) / (2*a)
//         }
//     }
//     else {
//         return false
//     }
// }
// button.onclick = () => {
//     let num1 = +input1.value
//     let num2 = +input2.value
//     let num3 = +input3.value
//     let sol = solution(num1, num2, num3)
//     result.textContent = sol.x1 + '    ' + sol.x2
// }
