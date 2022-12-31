function Artist(name, skill, profession){
    this.name = name
    this.skill = skill
    this.profession = profession
    Object.setPrototypeOf(artistsObject,this)
}

Artist.prototype.getProfession = function(p){
    return this.profession
}

Artist.prototype.print = function(){
    return `I am ${this.name}`
}

var artistsObject = {}


// Do not change this
export {Artist, artistsObject};
