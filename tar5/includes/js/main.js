
//#1
/* 
var errNumber = 2;
var qaLine = 'helloWorld';

console.log('Great! JavaScript page is ready :)');
console.error('Error message number #', errNumber);
console.warn('Are you sure you wanna do it?');
console.debug('this line is for QA...', qaLine); 
 */

//#2
/*
(function () {
    var text = 'Hello world 😃 ';
    var button = document.getElementById('switch');
    console.log('button is:', button)
    var title = document.getElementById('hello');

    button.onclick = function () {
        title.innerText = text;
    }
})(); 
*/

//#3
/* 
(function () {
    var a = b = 5;
    console.log('a = ', a)
    console.log('b = ', b)
})();

//undefined:
console.error('a = ', a)
console.error('b = ', b)
*/

//#3.2
/* 
var a = 8;
var b = 2;    
(function () {
    a = 10;
    b = 5;
    console.log('a + b = ', a + b)
})();
    
console.log('a = ', a)
console.log('b = ', b) 
*/

//#4
/* 
function setAllVals() {
    console.log(x);
    console.log(getIt());

    var x = 1;
    function getIt() {
        return 2;
    }
}

setAllVals(); 
*/


//#5
/* 
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function () {
            return this.fullname;
        }
    }
};

console.log('1',obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log('2',test()); 
*/

//#5.2
/* 
var person = {
    firstName: 'David',
    lastName: 'Avigad',
    kids: 2,
    address: {
        city: '',
        country: 'Israel',
        zip: 78687,
    },
    // get fullName () {
    fullName: function () { return this.firstName + " " + this.lastName },
    // fullName: () => `${this.firstName} ${this.lastName}`,    
    hasKids: function () { return this.kids ? true : false }    
}; 

console.log(person.fullName());
console.log(person.hasKids());
 */

//#5.3
/* 
var print = (obj) => {
    for (var field in obj)
        console.log(field);    
}

print(person) 
*/

//#6
/* 
function upper_case(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    }
    else {
        console.log("String's first character is not uppercase");
    }
}

//Method	    Description
// compile()    Deprecated in version 1.5.Compiles a regular expression
// exec()       Tests for a match in a string.Returns the first match
// test()       Tests for a match in a string.Returns true or false
// toString()   Returns the string value of the regular expression

// debugger;
upper_case('Abcd');
upper_case('abcd');

*/

//#6.1  [0-9a-zA-Z]
//#6.2  \b\w{4}\b
//#6.3  \b(\w)?(\w)\w?\2\1
//#6.4  \b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b
 

//#7
/* function valid_email(str) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(str)) {
        console.log("Valid email address!");
    }
    else {
        console.log("You have entered an invalid email address!");
    }
}

valid_email('me-info@example.com'); 
*/
