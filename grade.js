let marks=prompt("marks");
let grade;

if (marks>=90 && marks<=100){
    grade="A";
}
else if(marks>=79 && marks<=89){
    grade="B";
}
else if(marks>=68 && marks<=78){
    grade="C";
}
else if(marks>=57 && marks<=67){
    grade="D";
}
else if(marks>=45 && marks<=55){
    grade="E";
}

else if(marks>=34 && marks<=44){
    grade="F";
}
else if (marks>=0 && marks<=34){
    grade="Fail";
}
else {
  console.log("invalid marks");
}







console.log(grade);