function calculateFactorial() {
    var number = document.getElementById('number').value;
    const factorial = n => n ? n * factorial(n - 1) : 1;
    document.getElementById('result').innerText = 'Factorial: ' + factorial(number);
}