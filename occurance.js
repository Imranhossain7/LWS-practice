const para = "Our subject Imran lives in dhaka, imran is a ICE student, imran works in zepto apps";

const matches = para.match(/imran/gi);
const total = matches ? matches.length : 0;

console.log(total);

let first = para.search(/imran/i);
first = first >= 0 ? first : "not found";
console.log(first);