// spread means unpacking the elements
// rest means packing the elements


const array1 = [1,3,5,5];
const array2 = [2,4,6,8];

console.log(...array1,...array2)

console.log(...array1)

const restFuntion = (first,...second)=>{
  console.log(first);
  console.log("rest one "+second)
}


restFuntion(3,54,6,7,8,9);



const user = { name: 'Alice', age: 25 };
 const  {name, age} = user;
 console.log("name is "+name)

const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson); // { name: 'John', age: 31 }


const spreadFunction = (a,b,c,e)=>{
  
 return a+ b + c + e
}

const result =spreadFunction(...array1)
 console.log(result)


