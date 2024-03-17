console.log("hello");
var price = 100;
var counter = 50;
var Counter = 100; // variables are case sensitive
console.log(counter);
console.log(Counter);

//substring
var name = "vikas yadav";
console.log(name.substring(0,5));

//== check
var type = "animal";
console.log(type == "animal");
//TODO console.log("Type is not human "+" "+type != "human")//notice "" inserted between two words that needs to concatenated This doesn't work check why?

//Math random
var val = Math.floor(Math.random() * 5);
console.log(val)

//For loop
var i ;
for(i = 1; i<=6;i++){
    console.log("Num "+i)
}

//while loop
while(i>0){
    console.log("Num "+i);
    i--;
}

//function
bark("bulldog", 40);//This works because all the function declarations are scanned first. But if we call a function based on the reference which points to function expression
//which is defined later in the code it won't work
bark("street dog", 40/4);// argument can be an expression

//functions can have more or less number of arguments or have no arguments
bark("street dog");
bark(15);// You can have less number of arguments in that case whatever argument is missing in order will be set to undefined
//undefined < 20 returns false


function bark(name, weight){
    if(weight>20){
        console.log(name+" is barking");
    }else{
        console.log(name+" can not bark");
    }
}

console.log("What did bark return "+bark("bulldog",60));//function returns undefined when we don't have explicit return statement

//function returning value
var num = incrementByOne(10);
console.log("Incremented number "+num);
function incrementByOne(num){
    return num+1;
}

sumval = 100;// it will create a global variable with the name sumval but it's not a good practice
console.log(sumval);
//Global variable - variable declare outside the function are global
//variable declare inside the function are local provided we declare it using var keyword otherwise it becomes global variable

let myVar = 100;//Using let is the preferred way to create a variable whose value can change
const pi = 3.14;//using const is the preferred way to create a variable whose value is supposed to remain constant

//
var arr = [1,2,3,"vikas",4.5]; //an array in javascript can contain elements on the same type or it can be different type but it is recommended to store elements of the same type
console.log(arr[3]);
console.log(arr[10]);//if we haven't defined what element would lie at the particular index and if we try to access it we would return undefined

arr[3] = "sachin";//to redefine the element
arr[100] = 50;//we can define the element at any index but it creates a sparse array
console.log(arr[100]);
console.log("Array length is "+arr.length);

var emptyArr = [];//we can also define an empty array

//comparison == is used for loose comparison and === is used for strict comparsion
console.log("vikas"=="VIKAS");
console.log("vikas"==="vikas");//=== compare type as well as value


//Sorting numbersw
var listOfNumbers = [7,6,5,4,3,1];
console.log("Before sorting "+listOfNumbers);
listOfNumbers.sort(compareNumbers);
console.log("After sorting "+listOfNumbers);

function compareNumbers(num1, num2){
    if(num1>num2){
        return 1;
    }else if (num1==num2){
        return 0;
    }else{
        return -1;
    }
}


//Objects
var student ={
    name : "vikas",
    address : "mumbai",
    grade : 70,
    isFirstClass: function () {//This function doesn't have any name - these are called anonymous function
        if(this.grade>=70){//this is used because we want this function to know that we are referring to the grade property which belongs to this class
            return true;
        }else{
            return false;
        }
    }
}

console.log(student.grade);// to access the property of the object
console.log(student["grade"]);//This is a alternative way to access the property of the object it will work even when we have "gra"+"de"
console.log(student["gra"+"de"]);
console.log(student.isFirstClass());

//we can also add new property to the existing object like below
student.id = 10111;

console.log(student.id);

//we can also add new method to the existing object like below
student.hasGoodGrade = function () {
    return this.grade >= 80;
};
console.log(student.hasGoodGrade());


//Function accepting object as param
function isBrightStudent(anyStudent){//here we haven't specified the param type but based on the object which is passed to the method, it will get those property values
    //which are referred in the function body for eg if we pass student object here and the student has grade then it will be returned otherwise it will return undefined
    return anyStudent.grade>=90;
}

console.log(isBrightStudent(student));

delete student.address;// This is used to delete the address property of the object student
console.log(student);

//undefined type
var notInitializedVar;
if(notInitializedVar == undefined){//undefined is a value in javascript with type as undefined . string, number and boolean are defined type but undefined is of type undefined
    console.log("This is undefined variable");
}

console.log(typeof  notInitializedVar);//Give type of variable eg string boolean object etc in a form of a string

console.log(typeof student);//object
console.log(typeof isBrightStudent);//function
console.log(typeof arr);//object since array is an object

//function expression
//funcExpress(); This will give exception because function expression are not scanned in first pass. Only function declaration are scanned
var funcExpress = function (){
    console.log("This is function expression");
}

funcExpress();

//function expression with param
var addNums = function(a,b){
    return (a+b);
}

console.log(addNums(5,6));

//functions are first class member in java script which means it can be assigned to a variable , passed to a function a param and returned from a function as a retured value
//below example passing a function as a param

var passengers = [
    {name: "shubham", age: 20},
    {name: "vijay", age: 43},
];

function onNoFlyList(name){
    if(name == "shubham"){
        return true;
    }else{
        return false;
    }
}

function processPassengers(passengers, checkPassengers){
    for(var i =0;i<passengers.length;i++){
        if(checkPassengers(passengers[i].name)){
            console.log("Passenger "+passengers[i].name+" is no fly list");
        }
    }
}

processPassengers(passengers, onNoFlyList);

//Returning a function from a function
function serveCustomer(passengers){
    for(var i =0;i<passengers.length;i++) {
        var orderFunction = orderBasedOnAge(passengers[i]);
        orderFunction();
    }
}

serveCustomer(passengers);

function orderBasedOnAge(passenger){
    var functionMessage;
    if(passenger.age > 30){
        functionMessage = function () {
            console.log("Order Mango Juice for "+passenger.name);
        }
    }else{
        functionMessage = function (){
            console.log("Order sugarcane juice for "+passenger.name);
        }
    }
    return functionMessage;
}


//constructor
function Person(name, age){
    this.name = name;
    this.age = age;
}

var person1 = new Person("ram",20);//object created
var person2 = new Person("shyam",21);

console.log(person1.age);
console.log(typeof person1);
person1.dob = "02012000";
console.log(person1.dob);// You can still add new properties to the object

//Constructing with compact params
function Student(params){//since there is no type here which means two objects can have different data type for the same property
    this.name = params.name;
    this.age = params.age;
}

const args1 = {
    "name": "vijay",
    "age": 15
};

const args2 = {
    "name": "hari",
    "age": "18"
};

var student1 = new Student(args1);
var student2 = new Student(args2);
console.log(student1.age);
console.log(student2.age);

console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
console.log(person1 instanceof Person);
console.log(person1 instanceof Student);


//Date objects
var d = new Date();
console.log(d);
console.log(d.toString());
console.log(d.getFullYear());


//array with constructor
var arr = new Array(3);//alternative is [] to create an empty array
arr[0] = "rajesh";
console.log(arr[0]);


//Prototypes
Student.prototype.school = "academy school";// adding common property
Student.prototype.visit = function () {// adding common method
    console.log("Visit school "+this.school);
}

student1.visit();

student2.visit = function () {//override the method for particular class. override works at object level not at class level
    console.log("Visit different school");
}

student2.visit();

//we can add new method to the prototype after creating object, all the objects will have access to the new prototype method
