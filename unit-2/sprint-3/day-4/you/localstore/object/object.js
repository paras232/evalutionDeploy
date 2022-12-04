let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

employees.sort( function(ele1,ele2){
    return ele1.firstName.localeCompare(ele2.firstName)
})
console.log(employees)

employees.sort( function(ele1,ele2){
    return ele1.age-ele2.age
})
console.log(employees)