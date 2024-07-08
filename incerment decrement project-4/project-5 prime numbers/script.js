// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 1 is not prime
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // multiples of 2 and 3 are not prime
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Function to generate and display prime numbers up to a given limit
function generatePrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Display prime numbers up to 100 in the #prime-list element
document.addEventListener('DOMContentLoaded', function() {
    const primeList = document.getElementById('prime-list');
    const primes = generatePrimes(100);
    primes.forEach(prime => {
        const primeItem = document.createElement('div');
        primeItem.textContent = prime;
        primeList.appendChild(primeItem);
    });
});