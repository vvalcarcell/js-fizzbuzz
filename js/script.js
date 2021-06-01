var output = document.getElementById('num');
for (var x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 !== 0) {
        output.innerHTML += " " + "Fizz";
    } else if (x % 5 === 0 && x % 3 !== 0) {
        output.innerHTML += " " + "Buzz";
    } else if (x % 3 === 0 && x % 5 === 0) {
        output.innerHTML += " " + "FizzBuzz";
    } else {
        output.innerHTML += " " + x;
    }
}