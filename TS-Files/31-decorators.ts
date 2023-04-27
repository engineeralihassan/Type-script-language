console.log('Decorators are Extends the functionality of the classes and methods in ttype script');

// first we need to true the decorators in ts config file
// #then we select the es6 
function Logger(constructor: Function) {
      console.log("Hello ali Wellocme to decoratore word")
      console.log(constructor);
}
@Logger
class Peter {
      name = 'Ali Hassan';
      constructor() {
            console.log("The class peter object is created");

      }
}
let n = new Peter();
console.log(n);
