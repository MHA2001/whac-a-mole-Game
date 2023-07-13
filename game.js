let game = null;
let timer = null;
let time = 10;
let score = 0;


function cardRandomize() {
  let randMonster = Math.floor(Math.random() * 9) + 1;
  let randPosition = Math.floor(Math.random() * 9) + 1;
  return [`./images/monster${randMonster}.jpg`, randPosition];
}

function attackOfMonster() {
  let x = cardRandomize();
  let p = x[1];
  let s = x[0];

  let cart = document.querySelectorAll(".cart img")[p - 1];
  let sing = document.querySelector(".sing");
  if (sing != null) {
    sing.classList.remove("sing");
    sing.setAttribute("src", "images/blackBack.jpg");
    sing.removeEventListener("click", onclick);
  }
  cart.classList.add("sing");
  cart.addEventListener("click", onclick);
  cart.setAttribute("src", s);
}
function onclick() {
  score++;
  document.querySelector("#score").textContent = score;
}

function main() {

  game = setInterval(attackOfMonster, 700);

  timer = setInterval(() => {
    time -= 1;
    document.querySelector("#time").textContent = time;
    if (time == 0) {
      clearInterval(timer);
      clearInterval(game);
    }
  }, 1000);
  console.log(time)

}


main();
