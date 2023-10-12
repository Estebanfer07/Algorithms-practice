// const cards: string = '2H 10D';
const cards: string = "10D 4H 2H 7C 2S KS JD 3D 7H 9C 6H 10C AH";

const cardsList = cards.split(" ");
const values = { D: 1, C: 2, H: 3, S: 4, A: 1, "2": 11 };
const sorted = cardsList.sort((a, b) => {
  const aSuitVal = values[a.slice(-1)];
  const aRankVal = values[a.slice(0, a.length - 1)] ?? a.slice(0, a.length - 1);
  const sumA = `${aSuitVal}` + `${aRankVal}`;

  const bSuitVal = values[b.slice(-1)];
  const bRankVal = values[b.slice(0, b.length - 1)] ?? b.slice(0, b.length - 1);
  const sumB = `${bSuitVal}` + `${bRankVal}`;

  return +sumA - +sumB;
});

console.log(sorted.join(" "));
