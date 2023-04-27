console.log("Wellcome to All aBout Enums in Ts Here");
var postions;
(function (postions) {
    postions[postions["ali"] = 0] = "ali";
    postions[postions["ans"] = 1] = "ans";
    postions[postions["husnain"] = 2] = "husnain";
    postions[postions["usman"] = 3] = "usman";
})(postions || (postions = {}));
let arr = postions.ali;
console.log("The postion in arr: ", arr + 1);
// let str:string=postions.husnain; this is error becuase not assign number to string
// we also assign this to the custome vslues
var customRoles;
(function (customRoles) {
    customRoles[customRoles["num1"] = 23] = "num1";
    customRoles[customRoles["num2"] = 24] = "num2";
    customRoles[customRoles["num3"] = 25] = "num3";
    customRoles[customRoles["num4"] = 26] = "num4";
})(customRoles || (customRoles = {}));
console.log(customRoles.num1, customRoles.num4);
// we also multi types  data in enums 
// but we also define the data initialize if rather then number
var apl;
(function (apl) {
    apl["al"] = "a";
    apl["al1"] = "23";
    apl[apl["al3"] = 3] = "al3";
    apl[apl["al4"] = 4] = "al4";
    apl[apl["al5"] = 5] = "al5";
})(apl || (apl = {}));
let va = 2;
var numbers;
(function (numbers) {
    numbers[numbers["num1"] = va * 2] = "num1";
    numbers[numbers["num2"] = 34] = "num2";
})(numbers || (numbers = {}));
