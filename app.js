var prompt = require('sync-prompt').prompt;

function letterGrade(x){
  if(x>= 90){
    return 'A';
  }else if(x>=80){
    return 'B';
  }else if(x>=70){
    return 'C';
   }else if(x>=60){
    return 'D';
   }else{
    return 'F';
   }
}

var z;
z = letterGrade(98);
console.log(z);
z = letterGrade(62);
console.log(z);
z = letterGrade(98);
console.log(z);
z = letterGrade(71);
console.log(z);
z = letterGrade(14);
console.log(z);
