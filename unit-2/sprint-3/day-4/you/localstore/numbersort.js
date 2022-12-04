let arr = [0, 1 , 2, 30, 10, 25, 40, 30 ];

arr.sort( function(ele1,ele2){
    return ele1-ele2
} );
console.log(arr)


arr.sort( function(ele1,ele2){
    return ele2-ele2
});
console.log(arr)