const clock = document.querySelector("h2#clock");



function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

  getClock(); //이게 있기 때문에 처음에 00:00:00으로 출력되는 것을 방지할 수 있다.
  setInterval(getClock, 1000);