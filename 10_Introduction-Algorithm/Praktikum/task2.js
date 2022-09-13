const button = (Number) => {
  let counter = 0;
  for (index = 1; index <= Number; index++) {
    if (Number % index == 0) {
      counter++;
    }
  }
  // Bila counter habis dibagi oleh 2, maka Lampu akan mati (fungsi tenary)
  counter % 2 == 0
    ? console.log(Number + " Lampu Mati")
    : console.log(Number + " Lampu Menyala");
};

button(5); //Output Lampu Mati
button(4); //Output Lampu Menyala
