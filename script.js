function openInvitation() {
    document.querySelector('.cover').style.display = 'none';
}

function openInvitation() {
    document.querySelector('.cover').style.display = 'none';
}

/* PERSONAL INVITATION */
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
    document.getElementById("guestName").innerHTML =
        "Yth. Bapak/Ibu/Saudara/i<br><strong>" + decodeURIComponent(guest) + "</strong>";
}


/* COUNTDOWN */
const weddingDate = new Date("April 04, 2026 11:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) return;

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

const music = document.getElementById("bg-music");
let isPlaying = false;

function toggleMusic() {
    if (!isPlaying) {
        music.play();
    } else {
        music.pause();
    }
    isPlaying = !isPlaying;
}

