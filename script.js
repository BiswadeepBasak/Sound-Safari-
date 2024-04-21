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
    const downloadLink = document.getElementById('downloadLink');
    const downloadButton = document.getElementById('downloadButton');

    // Define your songs array
    const songs = [
        {songName: "Jeena Laga Hoon", filePath: "songs/1.mp3", coverPath: "pictures/1.jpg"},
        {songName: "Tum hi ho", filePath: "songs/2.mp3", coverPath: "pictures/2.jpg"},
        {songName: "Milna hai mujshay ayi", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
        {songName: "Kabhi jo badal barsay", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
        {songName: "Lal pili akhiyan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
        {songName: "Zara Say", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
        {songName: "Chanda vi Dewwana hay tera", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
        {songName: "Sanam  teri kasam", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
        {songName: "Uska hi bana", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
        {songName: "Khamoshiya", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
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

    // Function to play a song by index
    function playSong(index) {
        audioElement.src = songs[index].filePath;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        togglePlay();
        // Update download link
        downloadLink.href = songs[index].filePath;
    }

    // Play the first song initially
    playSong(songIndex);

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

    // Download song when the download button is clicked
    downloadButton.addEventListener('click', () => {
        downloadLink.click();
    });
});
