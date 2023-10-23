const songInfo = document.getElementById("songText");
const audioPlayer = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const songs = [
    { title: "Canción 1", artist: "Artista 1", src: "audio/song1.mp3" },
    { title: "Canción 2", artist: "Artista 2", src: "audio/song2.mp3" },
    { title: "Canción 3", artist: "Artista 3", src: "audio/song3.mp3" }
];

let currentSongIndex = 0;

function updateSongInfo() {
    const currentSong = songs[currentSongIndex];
    songInfo.textContent = `${currentSong.title} - ${currentSong.artist}`;
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = "Pausar";
    } else {
        audioPlayer.pause();
        playBtn.textContent = "Reproducir";
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audioPlayer.src = songs[currentSongIndex].src;
    audioPlayer.play();
    updateSongInfo();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audioPlayer.src = songs[currentSongIndex].src;
    audioPlayer.play();
    updateSongInfo();
}

playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", playNext);
prevBtn.addEventListener("click", playPrev);

audioPlayer.addEventListener("ended", playNext);

updateSongInfo();
