function studentData(firstName,lastName,age,marksArray,...hobbies) {
  let obj = {}
  obj.fullName = "${firstName} ${lastName}";
  obj.age = age;
  obj.hobbies = hobbies;

  obj.getInfo = () =>{
    return `${firstName} ${lastName}'s age is ${age}.`;
  }
  obj.getResult = () =>{
    let total = 0;
    for(let marks of marksArray){
      total+=marks
    }
    let subjects = marksArray.length
    let avg = total/subjects
    if(avg < 50){
      return "Result: FAIL"
    }else{
      return "Result: PASS"
    }
  }
  return obj
}
studentData('Vivek', 'Agarwal', 38, [50,60,70] , 'Singing', 'Coding', 'Meditating');

export {
  studentData
}