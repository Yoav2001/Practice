// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello from promise #1');
//     }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello from promise #2');
//     }, 1);
// });

// promise1
// .then(res =>{
//     console.log(res)
//     promise2
//     .then(res => console.log(res))
// } )
// .catch(err => {
// 	console.log(err);
// });




// promise2
// .then(res => console.log(res))
// .catch(err => {
// 	console.log(err);
// })


// function a (callbackFunc){
//   const htttp =new XMLHttpRequest();
//   htttp.open

//     callbackFunc(true)

// }

// const callback = (succssed) =>{

//     succssed ? "sussued" : "not sussed "
// }

// a()
// console.log("a");

// console.log("hello")
// setTimeout(() => console.log("first timeout"), 0)
// const interval = setInterval(() => console.log("interval hit"), 0)
// console.log("hello")
// setImmediate(() => console.log("first immediate"))
// clearInterval(interval)

// 1000 
// יחכה שנייה2
// ידפיס
// יחכה 2 שניות 
// ידפיס 123123

const a = ms => new Promise(resolve => setTimeout(resolve, ms))
 
const b = () => new Date().getTime()
 
async function main() {
    const hello = b();
    await Promise.all([a(1000), a(1000)])
    console.log(b() - hello)
    await a(1000)
    await a(1000)
    console.log(b() - hello)
}
 
main()
