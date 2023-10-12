const number: number = 2;
const message: string = "este es un mensaje de prueba";

const messageArr = message.split(" ");
const linesArr: string[][] = Array.from({ length: number }, () => []);
let idx = 0;

for (let i = 0; i < number; i++) {
  while (idx <= messageArr.length - 1) {
    linesArr[i].push(messageArr[idx]);
    idx += number;
  }
  idx = i + 1;
}
console.error(linesArr);

linesArr.forEach((line) => {
  console.log(line);
  console.log(line.join(" "));
});
