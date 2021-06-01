for (var x = 1; x <= 100; x++) {
    if (x % 3 === 0 && x % 5 !== 0) {
        document.getElementById('num').innerHTML += " " + "Fizz";
    } else if (x % 5 === 0 && x % 3 !== 0) {
        document.getElementById('num').innerHTML += " " + "Buzz";
    } else if (x % 3 === 0 && x % 5 === 0) {
        document.getElementById('num').innerHTML += " " + "FizzBuzz";
    } else {
        document.getElementById('num').innerHTML += " " + x;
    }
}