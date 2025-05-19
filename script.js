const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttonsDiv = document.getElementById("buttons");

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
    // Save it to global so stop button can stop it
    currentAudio = audio;
  });
  buttonsDiv.appendChild(btn);
});

// Add stop button
const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";
buttonsDiv.appendChild(stopBtn);

let currentAudio = null;

function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

stopBtn.addEventListener("click", stopSounds);
