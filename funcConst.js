function Person(name, city){
    this.name = name;
    this.city = city;
    this.getDetails = function () {
        console.log("Welcome", this.name, "from", this.city);
    };
}
Person.prototype.mobile = 23031;
Person.prototype.GreetMessage = (user)=>
{
    console.log("Greet day and ", user);
}

module.exports =Person;