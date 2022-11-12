
//counter elave ettim
let slip_id;

/*funksiya default olaraq 34 deyerini qebul edir
**her click etdikde counter 1 vahid artir
**ve novbeti defe click eventi ise dusdukde
**1 vahid artdigi qiymetden basliyir
**ve bu usulla her yasil butona vurdugumuzda 
**bize yeni cumle gosterir
**/
const showQuote = (slip_id=34) => {
    slip_id++
  fetch(`https://api.adviceslip.com/advice/${slip_id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip);
      const main = document.querySelector("main");

      main.innerHTML = `
      <div class="card">
      <p>Advice #${data.slip.id}</p>
      <h1>"${data.slip.advice}"</h1>
      <img src="images/pattern-divider-desktop.svg" alt="divider">
    </div>
    <div class="dice-btn">
      <img src="images/icon-dice.svg" alt="dice">
    </div>`;
      const diceBtn = document.querySelector(".dice-btn");

      diceBtn.addEventListener("click", () => {
        showQuote(slip_id);
      });

    });
};

const diceBtn = document.querySelector(".dice-btn");

diceBtn.addEventListener("click", () => {
  showQuote(slip_id);
});
