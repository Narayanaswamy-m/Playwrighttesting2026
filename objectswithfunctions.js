
// functions inside object
//emp is an object.
//coding() is a function inside the object.
//Because it belongs to an object, it is called a method.
//this.name refers to emp.name
let emp = {
    name:'swamy',
    age:30,
    isexist: true,
    city: 'LA',
    salary:12.55,

    testing() {
   console.log('calling something', this.age);
   
        
    },

    coding() {
        console.log(this.name, 'is coding');
    },

    writing() {
        console.log(this.name, 'is writing something');
        this.city;
    },

}
emp.coding();
emp.writing();
emp.testing();

// login page feature 
let loginpage = {
    username: '#username',
    password: '#password',
    loginbtn: '#loginbut',
    dologin(appusername, apppassword) {
        console.log('enter', appusername, 'using', this.username);
        console.log('enter', apppassword, 'using', this.password);
        console.log('click on login btn by using', this.loginbtn);
    }
}

loginpage.dologin('admin', 'admin');

// by using backtick 
let act = {
    name: 'ash',
    test() {
        console.log(`this name is ${this.name}`);
    }
} 

act.test();

const emp = {
  name: "Swamy",

  testing(callback) {
    console.log("Testing started");
    callback();
  },

  coding() {
    console.log(this.name + " is coding");
  }
};

emp.testing(() => {
emp.coding()
});
  
const person = {
  name: "Alex",

  sayName() {
    console.log(this.name);
  }
};

person.sayName(); // Alex


