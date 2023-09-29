//let student=["sandip","rohit","Rahul"]
//let std=["bahrat","jes","los"]
//console.log(student)

//student.push("jack")
//console.log(student)

//student.pop()
//console.log(student)
//delete student[0]

//unshift-puts the elements in beginning of the array
//student.unshift("asif","kushal")
//console.log(student)

//shift-remove the first element from the array
//student.shift()
//console.log(student)

//Join-join the elements and covert into string
//console.log(student.join())

//concat-merge the elements of two  or more array
//stdd=student.concat(std)
//console.log(stdd)

//reverse-reverse the array
//console.log(student.reverse())

//slice-returns the portion of the array
//console.log(student.slice(0,2))

//fill
//console.log(student.fill("rock",0,2))

//destructing assignment

//let planets=["sun","moon","venus"]
//let shad=["jdj","ddd","dsds"]
//sr=planets.concat(shad)
//console.log(sr)
//let [planet1,planet2,planet3]=planets
//console.log(planet1,planet2,planet3)
//const[planet1,planet2,...rest]=planets
//console.log(rest)
let student={
    name:"hari",
    age:20,
    address:"ktm",
    lo:0,
};
let student2={
    name:"JWE",
    age:33,
}
//const{name,age}=student
//console.log(name,age)

//const{name,...others}=student
//console.log(others)

let a={...student, ...student2}
console.log(a)