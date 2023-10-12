const n = 10;

let piramidHeight = 0;
let remaining = n;

while (remaining >= piramidHeight + 1) {
  piramidHeight++;
  remaining -= piramidHeight;
}

console.log(`${piramidHeight} ${remaining}`);
