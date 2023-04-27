console.log("Wellcome to All aBout Enums in Ts Here");

enum postions{
      ali,
      ans,
      husnain,usman

}

let arr=postions.ali;
console.log("The postion in arr: ",arr+1);

// let str:string=postions.husnain; this is error becuase not assign number to string

// we also assign this to the custome vslues
enum customRoles{
      num1=23,
      num2,
      num3,
      num4
}
console.log(customRoles.num1,customRoles.num4);

// we also multi types  data in enums 
// but we also define the data initialize if rather then number
enum apl{
      al='a',
      al1='23',
      al3=3,
      al4,
      al5


}


let va=2;
enum numbers{
      num1=va*2,
      num2=34,
}