const operatorArr = ['plus', 'plus', 'subtract', 'divide', 'multiply', 'subtract', 'plus', 'divide', 'multiply', 'subtract']

let ans;

let nmRange;

let frtNm;
let scndNm;

const generateRandomNumber = length => {

  let randomNumber = '';

  for (let i = 0; i < length; i++) {
    randomNumber += Math.floor(Math.random() * 10);
  }

  return Number(randomNumber);
}



const randomStuff = (range) => {



  frtNm = generateRandomNumber(range);
  scndNm = generateRandomNumber(range);

  let opratorInd = operatorArr[generateRandomNumber(1)]

  ans = (opratorInd === 'plus') ? (frtNm + scndNm) :
    (opratorInd === 'subtract') ? (frtNm - scndNm) :
      (opratorInd === 'multiply') ? (frtNm * scndNm) :
        (opratorInd === 'divide') ? (frtNm / scndNm) :
          0;

  document.getElementById("operator").innerText = (opratorInd === 'plus') ? "+" :
    (opratorInd === 'subtract') ? "-" :
      (opratorInd === 'multiply') ? "X" :
        (opratorInd === 'divide') ? "/" :
          "";


  console.log(frtNm + " and " + scndNm + " = " + ans);


  document.getElementById("first-number").innerText = frtNm;

  document.getElementById("second-number").innerText = scndNm;


}

const showAns = e => {

  let inHT = document.getElementById("operator").innerText

  inHTOfOper = (inHT === '+') ? "+" :
    (inHT === '-') ? "-" :
      (inHT === 'X') ? "X" :
        (inHT === '/') ? "/" :
          "";

  ans = Number.isInteger(ans) ? ans : ans.toFixed(2);



  document.getElementById("answer").innerText = `${frtNm} ${inHTOfOper} ${scndNm} = ${ans}`;

  setTimeout(() => { document.getElementById("answer").innerText = "__" }, 2000)

  randomStuff(nmRange);

}

const rangeSet = e => {

  nmRange = Number(document.getElementById("c-range").value);

  localStorage.setItem("nmRange", nmRange.toString());

  bxWidth = (nmRange == 1) ? "400px" :
    (nmRange == 2) ? "500px" :
      (nmRange == 3) ? "600px" :
        (nmRange == 4) ? "700px" :
          (nmRange == 5) ? "800px" :
            "fit-content";

  document.getElementById("body-box").style.width = bxWidth

  randomStuff(nmRange);
}



if (Number(localStorage.getItem("nmRange")) >= 1) {

  nmRange = Number(localStorage.getItem("nmRange"));

  document.getElementById("c-range").value = localStorage.getItem("nmRange");

} else {

  localStorage.setItem("nmRange", "2");
  nmRange = 2;

  document.getElementById("c-range").value = "2";

}

randomStuff(nmRange);


nmRange = Number(document.getElementById("c-range").value);

bxWidth = (nmRange == 1) ? "400px" :
  (nmRange == 2) ? "500px" :
    (nmRange == 3) ? "600px" :
      (nmRange == 4) ? "700px" :
        (nmRange == 5) ? "800px" :
          "fit-content";

document.getElementById("body-box").style.width = bxWidth