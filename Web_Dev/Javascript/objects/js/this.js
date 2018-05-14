var comments = {};

comments.data = ["Good Job1", "Bye", "Lame..."];

/*function print(arr) {
    arr.forEach(function(el) {
        console.log(el);
    });
} */

comments.print = function print() {
    this.data.forEach(function(el) {
        console.log(el);
    });
}