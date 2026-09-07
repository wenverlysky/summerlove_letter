
function typeEffect(text, speed) {

    let i = 0;

    const screen = document.getElementById('lcd-screen');

    screen.innerText = "";

    

    let interval = setInterval(() => {

        screen.innerText += text.charAt(i);

        i++;

        if (i >= text.length) clearInterval(interval);

    }, speed);

}
