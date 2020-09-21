function* yieldPrimes() {
  var primes=[2,3];
  var i=4;
  while(true) {
    isPrime = true;
    for(var j=0; j<primes.length; j++) {
      if(i%primes[j]===0) {
        isPrime=false;
      }
    }
    if(isPrime) {
      primes.push(i);
      yield i;
    }
    i++;
  }
}

function generatePrimes(x) {
  if(x<3) {return [];}
  var primes = [2]
  for(var i=3; i<x; i++) {
    isPrime = true;
    for(var j=0; j<primes.length; j++) {
      if(i%primes[j]===0) {
        isPrime=false;
      }
    }
    if(isPrime) {primes.push(i);}
  }
  return primes;
}

var generator = yieldPrimes();

function nextPrime() {
  document.getElementById('prime').innerHTML = generator.next().value;
}

function showUntil() {
  until = document.getElementById('until').value;
  console.log(until)
  primes = generatePrimes(until);
  primes = primes.join(' ');
  document.getElementById('sequence').innerHTML = primes;
}