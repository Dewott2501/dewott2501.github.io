var allTexts = ["Desarrollador de Videojuegos",
                "Desarrollador de Videojuegos / Programador / Artista",
                "See Page in English",
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
            ]

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('lang'))

if(urlParams.get('lang') != null && urlParams.get('lang') == "true"){
for(let i = 0; i < allTexts.length; i++){
    document.getElementById(i.toString()).innerHTML = allTexts[i]
    if(i == 2) document.getElementById(i.toString()).href =  "index.html?lang=false"
}
}
