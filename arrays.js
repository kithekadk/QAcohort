let completed = ["sleep", "code"]

completed.push("eat")
console.log(completed);
// console.log(completed.length);
completed.unshift('pray');
console.log(completed);
// completed.shift()
console.log(completed);

// completed.splice(1,1, "drink milk");
// completed.splice(-1)
// console.log(completed);

// completed.fill('abcd')
// console.log(completed);


console.log(completed.slice(-1));

let uncompleted = [
    "assignments", "code js"
]

let combinedarray = completed.concat(uncompleted)

console.log(combinedarray);

console.log(combinedarray.sort())

let filteredarray = combinedarray.filter(el=>{
    return el.includes('code');
})

console.log(filteredarray);

let mapped = combinedarray.map((el, i)=>{
    console.log(el, i);
})

combinedarray.push(["code again", "sleep again"])

console.log(combinedarray.flat());

console.log(combinedarray.indexOf('sleep'));

combinedarray.splice(5,1)
let result = combinedarray.flat();

console.log(result)

let firstTrue =  combinedarray.findIndex(el=>{
    return el.includes("code");
})

console.log(firstTrue);

let checkExists = combinedarray.flat().includes("code again")
console.log(checkExists);

let findTrue = combinedarray.flat().find(el=>{
    return el.includes('code');
})

console.log(findTrue);

console.log(combinedarray.join(''));