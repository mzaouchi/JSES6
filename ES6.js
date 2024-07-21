function Hello(){
    {
      var a = 5
      console.log(a)
    }
    console.log(a)
    return "Hello ES6"
  }
  
  console.log(Hello())


  function Hello(){
    {
       let a = 9
       console.log(a)
    }
    console.log(a)
  
    return "Hello ES6"
  }
  
  console.log(Hello())

  function Hello(){
    {
       const b = 9
       console.log(b)
    }
    console.log(b)
   
  
    return "Hello ES6"
  }
  
  console.log(Hello())

  const name = "Nour"
name = "Ghofrane"

const t =  [2,6,7,9,7]
console.log(t)
t.push(1000)
console.log(t)

t[0] = 7879898
console.log(t)

const obj = {
    name : "Ghofrane",
    city : "Tunis",
    age : 9
  }
  
  obj.name = "Mahmoud"
  console.log(obj)
  
  function Sum(a,b){
    return a + b 
  }
  
  console.log(Sum(3,7))
  
  var Somme=(a,b)=> a+b 
  
  console.log(Somme(2,9))
  
  
  let liji=()=> "Hello"
  
  console.log(liji())
  
  const helloName=djeja=> "Hello"+" "+djeja
  
  console.log(helloName("Nour"))
  
  var name = "Nour"

console.log("Hello "+name)

console.log(`Hello 
${name}, 
${name}`)

const age = 5

// if(age<18){
//   console.log("Mineur")
// }else if(age<70){
//   console.log("Adulte")
// }else{
//   console.log("Vieux")
// }

// console.log(age<18 ? "Mineur" : age<70 ? "Adulte" : "Vieux")

age<18 && console.log("Enfant") 


var obj = {
    name : "Nour",
    age : 20,
    city : {
      town : "Tunis",
      cp : 2344,
      rue : {
        num : 3
      }
    }
  }
  var {name,age,city} = obj
  console.log(name)
  console.log(age)
  console.log(city.town)
  var {town} = obj.city
  console.log(town)
  // console.log(name)
  // console.log(obj.name)
  // console.log(obj.city.town)
  // console.log(obj.city.rue.num)



  // var t = [3,4,5,9,8]
// var v = [9,7,5]
// console.log([10000,...v,...t])
// var resultat = []
// // console.log(t+v)

// for(var i = 0;i<t.length;i++){
//   resultat.push(t[i])
// }

// console.log(resultat)

// for(var i = 0;i<v.length;i++){
//   resultat.push(v[i])
// }
// console.log(resultat)

const obj = {
    name : "Ghofrane",
    age : 19,
    city :"Tunis"
  }
  
  obj.name = "Nour"
  
  // obj = { ...obj, name: "Mahmoud", track: "FJ" }
  console.log(obj)


  var t = [2,3,4,5]

console.log(t.filter((ghofrane,mahmoud,nour)=> ghofrane>3))

var t = [2,3,4,5]
console.log(t.map((el,i,t)=>el-i))

console.log(t)

var t = [7,9,10,2,3,4,5]
console.log(t.sort((a,b)=>b-a))

var name = "Nour Guidara"
console.log(name.split(" "))
var t = ["a","f","Bonjour","Nour"]
console.log(t.join('*')) 