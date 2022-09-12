const bilanganPrima = (n) => {
  let counter = 0;
  for (index = 1; index <= n; index++) {
    if (n % index == 0) {
      counter++;
    }
  }
  // Menggunakan tenary, bila counter === 2, maka n adalah bilangan prima
  counter === 2
    ? console.log(`${n} Bilangan Prima`)
    : console.log(`${n} Bukan Bilangan Prima`);
};

bilanganPrima(3);
bilanganPrima(7);
bilanganPrima(10);
