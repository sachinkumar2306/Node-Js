var Person = require('./funcConst.js')      //first letter should be capital

var per = new Person ('Ram', 'Bangalore');
per.getDetails();
per.GreetMessage('Have a good day');
console.log(per.mobile);

per.senMessage= function(){
    console.log('bye bye')
}
per.senMessage();