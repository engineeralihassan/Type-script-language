// in this lecture we see the type script classes and constructors in the 
// type script  # we amke a class and and a constructor in the class
class TSClass {
      name: string;

      constructor(name: string) {
            this.name = name;
      }

}

let obj = new TSClass('Ali Hassan');
console.log(obj);
console.log(obj.name);

