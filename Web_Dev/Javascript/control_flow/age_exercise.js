var age = prompt("enter your age");

if (age < 0) {
    alert("must not be a negative number");
} 

if (Number(age) == 21) {
    alert("happy birthday");
}

if ((age % 2) != 0 ) {
    alert("your age is odd");
}

if (age % Math.sqrt(age) == 0) {
    alert("your age is a perfect square");
}
