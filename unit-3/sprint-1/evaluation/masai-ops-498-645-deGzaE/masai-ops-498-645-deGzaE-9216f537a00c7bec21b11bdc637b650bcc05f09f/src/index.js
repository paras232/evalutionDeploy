// Problem 1. complete the below function
function school(schoolName,location,established,Maths,Commerce,Science,arts,English) {
  let obj = {}
  let subjects = `${Maths}, ${Commerce}, ${Science}, ${arts}, ${English}.`
  obj.name = schoolName,

  obj.getGeneralInfo = ()=>{
    return `${schoolName} was established in ${established} at ${location}.`
  }
  obj.getSubjectsInfo = () => {
    return `At ${schoolName} we teach ${Maths}, ${Commerce}, ${Science}, ${arts}, ${English}.`
  }
  return obj;
  
}
let ans = school("SanskarSchool","Raigarh",1998,"Maths"," Commerce"," Science")
console.log(ans)
 
// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];

let outputArray = ['Your solution here.']

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
