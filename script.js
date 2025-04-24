function pilihanComputer() {
  comp = Math.random();

  if (comp < 0.33) return "gajah";
  if (comp >= 0.33 && comp <= 0.66) return "orang";
  return "semut";
}

function aturanMain(player, computer) {
  if (player == computer) return "SERI";
  if (player == "gajah") return computer == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return computer == "semut" ? "MENANG" : "KALAH";
  if (player == "semut") return computer == "gajah" ? "MENANG" : "KALAH";
}

const putarGambar = () => {
  const img_comp = document.querySelector(".img_comp");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval();
      return;
    }
    img_comp.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
    return;
  }, 100);
};

// function scoreGame() {

// }
let scoreComputer = 0;
let scorePlayer = 0;

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((pil) => {
  pil.addEventListener("click", () => {
    const pComputer = pilihanComputer();
    const pPlayer = pil.className;
    const hasil = aturanMain(pPlayer, pComputer);

    const sComputer = document.querySelector(".comp div h2:nth-child(2)");
    const sPlayer = document.querySelector(".player div h2:nth-child(2)");

    putarGambar();
    setTimeout(() => {
      const imgComp = document.querySelector(".img_comp");
      imgComp.setAttribute("src", `img/${pComputer}.png`);

      const info = document.querySelector(".hasil");
      info.textContent = hasil;

      if (hasil == "MENANG") scorePlayer++;
      if (hasil == "KALAH") scoreComputer++;
      sComputer.innerHTML = `${scoreComputer}`;
      sPlayer.innerHTML = `${scorePlayer}`;
    }, 1000);
  });
});

// const gajah = document.querySelector(".gajah");
// gajah.addEventListener("click", function () {
//   const pComputer = pilihanComputer();
//   const pPlayer = gajah.className;
//   const hasil = aturanMain(pPlayer, pComputer);
//   const imgComp = document.querySelector(".img_comp");
//   const info = document.querySelector(".hasil");

//   info.textContent = hasil;
//   imgComp.setAttribute("src", `img/${pComputer}.png`);
// });
// const orang = document.querySelector(".orang");
// orang.addEventListener("click", function () {
//   const pComputer = pilihanComputer();
//   const pPlayer = orang.className;
//   const hasil = aturanMain(pPlayer, pComputer);
//   const imgComp = document.querySelector(".img_comp");
//   const info = document.querySelector(".hasil");

//   info.textContent = hasil;
//   imgComp.setAttribute("src", `img/${pComputer}.png`);
// });
// const semut = document.querySelector(".semut");
// semut.addEventListener("click", function () {
//   const pComputer = pilihanComputer();
//   const pPlayer = semut.className;
//   const hasil = aturanMain(pPlayer, pComputer);
//   const imgComp = document.querySelector(".img_comp");
//   const info = document.querySelector(".hasil");

//   info.textContent = hasil;
//   imgComp.setAttribute("src", `img/${pComputer}.png`);
// });
