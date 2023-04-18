const clickme = () => {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6

  let image1 = `dice${randomNumber1}.png`; //dice1.png-dice6.png

  document.querySelector(".dice .img1").setAttribute("src", image1); //set random image between 1-6

  let randomNumber2 = Math.floor(Math.random() * 6 + 1); //1-6

  let image2 = `dice${randomNumber2}.png`; //dice1.png-dice6.png

  document.querySelector(".dice .img2").setAttribute("src", image2); //set random image between 1-6

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 wins 🙌";
    // document.querySelector(".refreshme h2").innerHTML = "refresh again to play";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins 🙌";
    // document.querySelector(".refreshme h2").innerHTML = "refresh again to play";
  } else {
    document.querySelector("h1").innerHTML = "it's draw!";
    // document.querySelector(".refreshme h2").innerHTML = "refresh again to play";
  }
};
