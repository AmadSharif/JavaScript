// for a given array with marks of students,find the average marks of entire class.
let marks=[12,22,34,45,55,56,43,35];
let sum=0;
for(let val of marks){
    sum+=val;// sum=sum+val
}
    avg = sum / marks.length;
    console.log(`Average marks of the class =${avg}`);//$avg is a string literal
