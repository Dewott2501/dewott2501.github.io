var allTexts = ["DewottDev - Desarrollador Indie",
                "Desarrollador Indie / Programador / Artista",
                "flags/US.png:img",
                "Soy un Desarrollador Indie, Aspiro a ser programador y busco trabajar de eso",
                "Usando Motores de videojuegos como Unity, Haxe Flixel y Godot Engine",
                "Tambien tengo conocimientos en HTML, CSS, Javascript y Python",
                "Mi Objetivo es seguir aprendiendo cada día y continuar creando nuevos videojuegos y/o proyectos con eso",
                "¡Echa un vistazo a mis juegos!",
                "Una rata que se embarca en una aventura donde recolecta queso con propiedades fuera de este mundo",
                "Un juego de terror y estrategia donde intentas dormir mientras eres acechado por el miedo.",
                "Un juego de puzzles donde guias a los espiritus para que regresen a su mundo",
                "OTROS PROYECTOS",
                "Programador principal",
                "Actuación de voz",
                "Arte",
                "Arte promocional de Moon Rat",
                "Contactame",
                "Página hecha con MIS PROPIAS MANOS sin frameworks 💪 (bobo) - Dewottdev 2024",
                "¡Y Youtuber!"
            ]

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('lang'))

if(urlParams.get('lang') != null && urlParams.get('lang') == "true"){
for(let i = 0; i < allTexts.length; i++){

    if(i == 2) document.getElementById(i.toString()).href =  "index.html?lang=false"
    if(i == 18) document.getElementById(i.toString()).className = "mineTextESP"
    if(allTexts[i].endsWith("img")){
        let text = allTexts[i].slice(0, allTexts[i].length - 4)
        document.getElementById('img' + i).src = "img/" + text
    }
    else{
        document.getElementById(i.toString()).innerHTML = allTexts[i]
    }
}
}

let lilNumb = Math.floor(Math.random() * 4);
console.log(document.getElementById("lil").src)
document.getElementById("lil").src = "img/headerimgs/" + lilNumb.toString() + ".png"


