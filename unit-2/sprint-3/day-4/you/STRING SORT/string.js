let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];


animals.sort(function(ele1, ele2) {
  return ele1.localeCompare(ele2)
});
console.log(animals)




animals.sort(function(ele1, ele2) {
  return ele2.localeCompare(ele1)
});
console.log(animals)
