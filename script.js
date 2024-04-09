let percent = document.querySelector(".percent-indicator");
let counter = 0;

setTimeout(() => {
setInterval(() => {
    if (counter == 43) {
        clearInterval;
    } else {
        counter += 1;
        percent.innerHTML = `${counter}%`;
    }
}, 23.25581395348837); // 1000ms / 43%
}, 1000);