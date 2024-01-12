const sec = document.querySelector(".s");
const min = document.querySelector(".m");
const hour = document.querySelector(".h");

function timee() {
  let time = new Date();
  let hourTime = time.getHours() * 30;
  let secTime = time.getSeconds() * 6;
  let minTime = time.getMinutes() * 6;
  sec.style = `
transform: rotate(${secTime}deg)
`;
  min.style = `
transform: rotate(${minTime}deg)
`;
  hour.style = `
transform: rotate(${hourTime + minTime / 12}deg)
`;
  setTimeout(() => {
    timee();
  }, 1000);
}
timee();

const hourNum = document.querySelector(".hours");
const minutNum = document.querySelector(".minutes");

function numberTime() {
  let numTime = new Date();
  let numH = numTime.getHours();
  let numM = numTime.getMinutes();

  numH = numH < 10 ? "0" + numH : numH;
  numM = numM < 10 ? "0" + numM : numM;

  hourNum.innerText = numH;
  minutNum.innerText = numM;

  setTimeout(() => {
    numberTime();
  }, 60000);
}
numberTime();
