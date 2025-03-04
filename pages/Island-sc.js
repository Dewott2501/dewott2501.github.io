function toggleTV(){
    const image = document.getElementById('tv');
    const vid = document.getElementById('video');
    console.log(image.src)
    if (image.src.includes('tvOn.png')) {
        image.src = '../img/PI/tvOff.png'
        vid.style.opacity = 0;
        var audio = new Audio('../img/PI/clickoff.wav');
        audio.play();
    } else {
        image.src = '../img/PI/tvOn.png';
        vid.style.opacity = 1;
        var audio = new Audio('../img/PI/clickon.wav');
        audio.play();
    }
}