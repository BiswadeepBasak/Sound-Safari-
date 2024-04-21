document.addEventListener('DOMContentLoaded', function () {
    // Initialize variables
    const audioElement = new Audio();
    let songIndex = 0;

    // Get elements
    const masterPlay = document.getElementById('masterPlay');
    const myProgressBar = document.getElementById('myProgressBar');
    const gif = document.getElementById('gif');
    const masterSongName = document.getElementById('masterSongName');
    const songItems = document.querySelectorAll('.songItem');

    // Define your songs array
    const songs = [
        {songName: "Addat", filePath: "atif/1.mp3", coverPath: "Sound Safari/Arijitcovers/1.jpg"},
        {songName: "Barish", filePath: "atif/2.mp3", coverPath: "Arijitcovers/2.jpg"},
        {songName: "Dil na jan", filePath: "atif/3.mp3", coverPath: "arijitpic/3.jpg"},
        {songName: "Gulabi Akhain", filePath: "atif/4.mp3", coverPath: "arijitpic/4.jpg"},
        {songName: "Jana De", filePath: "atif/5.mp3", coverPath: "arijitpic/5.jpg"},
        {songName: "Musafir", filePath: "atif/6.mp3", coverPath: "arijitpic/6.jpg"},
        {songName: "Pehali Dafa", filePath: "atif/7.mp3", coverPath: "arijitpic/7.jpg"},
        {songName: "Rabba", filePath: "atif/8.mp3", coverPath: "arijitpic/8.jpg"},
        {songName: "Tera Sang Yara", filePath: "atif/9.mp3", coverPath: "arijitpic/9.jpg"},
        {songName: "Tu jana na", filePath: "atif/10.mp3", coverPath: "arijitpic/10.jpg"},
    ];

    // Function to play or pause the audio
    function togglePlay() {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    }

    // Function to handle individual song play
    function playSong(index) {
        audioElement.src = songs[index].filePath;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        togglePlay();
    }

    // Handle master play button click
    masterPlay.addEventListener('click', togglePlay);

    // Handle song item click
    songItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            playSong(index);
            songIndex = index;
        });
    });

    // Handle 'next' button click
    document.getElementById('next').addEventListener('click', () => {
        songIndex = (songIndex + 1) % songs.length;
        playSong(songIndex);
    });

    // Update progress bar
    audioElement.addEventListener('timeupdate', () => {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        myProgressBar.value = progress;
    });

    // Seek functionality
    myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    });

    // Automatically play next song when the current song ends
    audioElement.addEventListener('ended', () => {
        songIndex = (songIndex + 1) % songs.length;
        playSong(songIndex);
    });
});
