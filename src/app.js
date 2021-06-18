import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.getElementById("Button").onclick = () => {
    //write your code here
    document.querySelector("#excuse").innerHTML = generateExcuses();
  };
};

let generateExcuses = () => {
  let who = ["El perro", "Mi madre", "Su caballo", "Mi conejo"];
  let action = ["se comío", "me destrozó", "rompió", "escondió"];
  let what = ["mis ejercicios", "las llaves", "mi puerta"];
  let when = [
    "antes de salir de casa",
    "llegando",
    "cuando terminé",
    "en la cena",
    "mientras pensaba en salir de casa para viajar"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
