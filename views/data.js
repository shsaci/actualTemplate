
var data = {
  "people": [
    { "name": "Emily", "age": 56 },
    { "name": "Tama", "age": 31 },
    { "name": "Sarah", "age": 22 },
    { "name": "Jill", "age": 77 },
    { "name": "Fred", "age": 25 }
  ]
}

var arr = data.people
arr.forEach(myFunction)

function myFunction(elem, index) {
  var value = false
  if (elem.age >= 50) {
    value = true
  }
    elem["isIt"] = value;
}

console.log(data);

module.exports = data
