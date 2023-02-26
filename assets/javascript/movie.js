let play = document.getElementById('movie-play');
let playTrailer = document.getElementById('trailer-play');
let trailer = document.querySelector('.video-trailer');
let trailerVideo = document.getElementById('trailer');
let coverImage = document.getElementById('cover-image');
let video = document.getElementById('video-main');
let closeTrailer = document.getElementById('close');

let TrailerPlay = true

function trailerToggle() {
    video.pause()
    trailer.classList.toggle('active')
    trailerVideo.currentTime = 0;
    trailerVideo.controls = true;
    trailerVideo.pause();
    TrailerPlay = false;
}

function playPauseVideo() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

play.addEventListener('click', () => {
    play.classList.toggle('hidden')
    coverImage.classList.toggle('hidden')
    video.removeAttribute("download")
    video.style.cursor = "pointer"
    video.controls = true;
    video.play()
    document.addEventListener("keydown", function(event) {
        if (TrailerPlay == true) {
            if (event.key === "f" || event.key === "F") {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    video.requestFullscreen();
                }
            }
        }
    });
    window.addEventListener("keydown", function(event) {
        if (TrailerPlay == true) {
            if (event.key === " " || event.key === "Spacebar") {
                event.preventDefault(); // varsayılan tarayıcı davranışını engelleme
                playPauseVideo();
            }
        }
    });
    video.addEventListener("keyup", function(event) {
        if (TrailerPlay == true) {
            if (event.key === " " || event.key === "Spacebar") {
            event.preventDefault(); // varsayılan tarayıcı davranışını engelleme
            // playPauseVideo();
            }
        }    
    });
})

closeTrailer.addEventListener('click', () => {
    trailerToggle()
    TrailerPlay = true
})

// closeTrailer.addEventListener('click', trailerToggle)
playTrailer.addEventListener('click', trailerToggle)


const likeMovie = document.getElementById('like-movie');
const dislikeMovie = document.getElementById('dislike-movie');
const saveMovie = document.getElementById('save-movie');
const downloadMovie = document.getElementById('download-movie');

let movieLike = false
let movieDislike = false
let movieSave = false

likeMovie.addEventListener('click', () => {
    if(movieLike == false) {
        likeMovie.classList.replace('ri-thumb-up-line', 'ri-thumb-up-fill');
        likeMovie.style.color = "#fff"
        likeMovie.style.borderColor = "#fff"
        movieLike = true;
    } else {
        likeMovie.classList.replace('ri-thumb-up-fill', 'ri-thumb-up-line');
        likeMovie.style.color = "#bfbfbf"
        likeMovie.style.borderColor = "#bfbfbf"
        movieLike = false;
    }
    movieDislike = false;
    dislikeMovie.classList = 'ri-thumb-down-line'
    dislikeMovie.style.color = "#bfbfbf"
    dislikeMovie.style.borderColor = "#bfbfbf"
});

dislikeMovie.addEventListener('click', () => {
    if(movieDislike == false) {
        dislikeMovie.classList.replace('ri-thumb-down-line', 'ri-thumb-down-fill');
        dislikeMovie.style.color = "#fff"
        dislikeMovie.style.borderColor = "#fff"
        movieDislike = true;
    } else {
        dislikeMovie.classList.replace('ri-thumb-down-fill', 'ri-thumb-down-line');
        dislikeMovie.style.color = "#bfbfbf"
        dislikeMovie.style.borderColor = "#bfbfbf"
        movieDislike = false;
    }
    movieLike = false;
    likeMovie.classList = 'ri-thumb-up-line'
    likeMovie.style.color = "#bfbfbf"
    likeMovie.style.borderColor = "#bfbfbf"
});

saveMovie.addEventListener('click', () => {
    if(movieSave == false) {
        saveMovie.classList.replace('ri-bookmark-line', 'ri-bookmark-fill');
        saveMovie.style.color = "#fff"
        saveMovie.style.borderColor = "#fff"
        movieSave = true;
    } else {
        saveMovie.classList.replace('ri-bookmark-fill', 'ri-bookmark-line');
        saveMovie.style.color = "#bfbfbf"
        saveMovie.style.borderColor = "#bfbfbf"
        movieSave = false;
    }
});
 
//<i class="ri-thumb-up-fill"></i>
//<i class="ri-thumb-down-fill"></i>
//<i class="ri-bookmark-fill"></i>