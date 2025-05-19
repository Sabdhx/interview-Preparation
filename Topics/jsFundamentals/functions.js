// higher order function which takes a function as an argument
// callback function which runs after a specific task

const higherOrderFunction=(a , b , callBack)=>{
  let c = a+b;
  callBack(c)
  return ()=> console.log(c)
}

// now when we close higherOrderFunction in variable so that variable is also a function cuz its returning a function we can call it.

const result = higherOrderFunction(2,4,()=>{
  // console.log("value ",val)
})

result()

// map and filter and reduce they are also higher order funtions cuz they take funtions as aurguments
const array = [1, 2, 3]

array.map(function(num) {
  return num * 2;
});
