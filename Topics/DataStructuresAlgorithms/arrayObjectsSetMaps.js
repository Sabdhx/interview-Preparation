// data structure and algorithm

// why data structrue
// think i have a phone book and the data is not sorted then i will search one by one to get the specific user, it will take time to search a specific name call it piyush
// but if i sort that data with respect to the alphabets and then find it then it will take less time for it

// no if i have sorted the data and im searching then what will happpen is that it will take time cuz it will search p in the array of whole alphabets then i then y so it will take alot of time so
// for this problem we have always to choose the best alogrithm for find the best time complexity

// data types and data structures
// there are two types
// linear data structure, non linear data structure

// linear is that in which data is in linear form or in the form of one after another like in array
// non-linear is that datat is stored in non-linear data structure like in herarichal form or graph method

// space and time complexity
// its a function that how manay time a funtion takes to execute code with respect to its input
// space complexity measures how manay space or memory a code takes to process that input

// there are 3 ways for time and space complexity
//  big - 0                                         theta - 0                      omega - 0
//  its the worst case senario that                 normal one/ mid one            smallest one
//  the most time and space a code can take to
//  measure the input

// now there are some big-o notataions and they are the most widely used notation cuz people normally but always use this way for measuring the time and space complexity

//  constant - 0(1)
//  linear - 0(n)
//  log - 0(log n)
//  quad - 0(n^2)
//  cubic - 0(n^3)

// just an example of constant - 0(1)
// const array1 = [1,2,3,4,5,6]
//  console.log(array1[0])
// so doesnt matter how big the input is it will always takes constant time and space to execute that code
//  we can't measure exact execution time, but we can measure how the time grows relative to input size, which is what time complexity represents.

// this is the time and space used to meaure the input in constant 0(1)

// |
// |
// |___________ 0(1)
// |___________

// your input size can be 0 can b 1M but the time and space complexity is always constant 
// like for example
const bigOarray = [1,2,3,4,5,6];
bigOarray[0] = bigOarray[0] + 10; // this is my code this is only checking the first index of array rather its millions of indexes init there will be always first so its 0(1)
// console.log(bigOarray[0]) // its also about the first index of that array so its also a 0(1)
const newInteger = bigOarray[bigOarray.length - 1]; // its an integer with 4 bytes so its a 0(4) which is also a constant so we can write it as 0(1) cuz we replace constant with 1
// console.log(newInteger)
// we will add in last the code 

// 0(1) + 0(1) = 0(2) which is 0(1) so its a constant notation



// now we talk about linear notation which is also known as 0(n)
// it means when we increase the lenght of n, the time and space complexity also increase 
// length of n is directly proportional to the time and space complexity

bigOarray[0] = bigOarray[0] + 10; // this is my code this is only checking the first index of array rather its millions of indexes init there will be always first so its 0(1)

for(i=0; i<=bigOarray[bigOarray.length-1]; i++){ // this loop is running n time so its 0(n) 
  // console.log(i)
}

const newArray = [...bigOarray];

// console.log(newArray)

for(i in newArray){
  // console.log("newArray",i)
}

// console.log("linear complexity",bigOarray[0]) // its also a complextity of constant 

// in this code the time and space complexity of code increases when the number of n increases
//  o(1) + 0(n) = 0(n + 1) = o(n) answer
// according to the space complexity the loop doesnt takes any space only a const variable i takes a constant space which is 0(1)
// now the new array takes 0(n) space cuz its space increase with its length 
// so the space complexity is also 0(n)






// now we talk about logrithmic space and time complexity
// in this space complexity increase but the time complexity decreases at some point 
// how it happens so we have some kind of concur and divide algorithm so that uses log of n logrithmic is like 0(log n)

const bigOarray2 = [10,20,30,40,50,60,70,80,90];
let small = 0
let large = bigOarray2.length-1

while (large > small) {
  let mid  = Math.floor(small + large) / 2
   if(bigOarray[mid] === 50){
    console.log("we found out the index of 50: ",mid)
    break
   }else if(mid < 50){
    small = bigOarray[mid] + 1
    console.log("we found out the index of 50: ",small)
   }else{
    small = bigOarray[mid] - 1
    console.log("we found out the index of 50: ",small)
   }
}
// console.log(mid)
