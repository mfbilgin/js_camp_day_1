//js type safety değildir
//var ile tanımlanan değişken aynı isimle tekrar isimlendirilebilir.
let number1 = 10
number1 = "MFBILGIN"
let student = {id:1, name:"MFBilgin"}
//console.log(student)

function save(point=10/*default parametre en sonda olur*/,student) {
    console.log(student.name + " : " + point)
}
//save(undefined,student)


let students = ["student1","student2","student3","student4"]
//console.log(students)

let student2 = [student,{id:2 ,name:"isim"}]
//console.log(student2)


//rest
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0][0])
}
showProducts(15,["Elma","Armut","Karpuz"]);

//spread
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000]
let [small,meduim,high] = populations
console.log(small)
console.log(meduim)
console.log(high)
