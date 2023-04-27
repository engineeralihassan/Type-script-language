var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log('Decorators are Extends the functionality of the classes and methods in ttype script');
// first we need to true the decorators in ts config file
// #then we select the es6 
function Logger(constructor) {
    console.log("Hello ali Wellocme to decoratore word");
    console.log(constructor);
}
var Peter = /** @class */ (function () {
    function Peter() {
        this.name = 'Ali Hassan';
        console.log("The class peter object is created");
    }
    Peter = __decorate([
        Logger
    ], Peter);
    return Peter;
}());
var n = new Peter();
console.log(n);
