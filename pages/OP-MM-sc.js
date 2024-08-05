var allTexts = ["flags/US.png:img",
    "Motor: HaxeFlixel",
    "Descripción del juego",
    "HISTORIA",
    `"Viernes por la Tarde, estás pasando el rato en casa de tu novia, cuando de repente, llega un paquete a la puerta, luego de recibirlo, tú y tu novia lo abren, y se dan cuenta de que es un cartucho de NES, lo introducen en la consola de su padre y empiezan a jugar, sin saber que desataron a un demonio.`,
    `tú y tu novia son arrastrados a la tele por un par de manos con guantes, y despiertan en un espacio vacío, miran al cielo, y entonces, le ven...`,
    `No están solos aquí.`,
    'SINOPSIS',
    `Mario's Madness v2 finalmente llegó, con 29 `,
    'NUEVAS ',
    `y Rehechas canciones + las 7 canciones originales de la primera versión, un montón de personajes, escenarios, mecánicas y nuevas adiciones extras al mod, vence todas las canciones para intentar derrortar a Mario para bien!`,
    `Preparate, Sobrevive, y dile `,
    `Hola al asesino.`,
    'Advertencia:',
    'Este mod contiene temas e imagenes con violencia explícita, temas que pueden shockear, ofender o perturbar. El mod no es recomendado para audiencias sensibles, se recomienda discreción.',
    'Aporte',
    'Para este trabajo me encargué de la gran mayoría del código de niveles, eventos y progresión del mod.<p>el mod incluye decenas de eventos en medio del juego, secretos y horas de canciones donde yo y el equipó participó en cada una de estas, conmigo como el coder principal.',
    'Mi trabajo más destacable fue el mundo donde exploras diferentes mapas, incluyendo una progresión con multiples caminos, eventos y secretos con un codigo completamente hecho desde cero por mi, con posibilidad de extender los mundos y niveles facilmente',
    'contactame',
    "Página hecha con MIS PROPIAS MANOS sin frameworks 💪 (bobo) - Dewottdev 2024",
]

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('lang'))

if(urlParams.get('lang') != null && urlParams.get('lang') == "true"){
for(let i = 0; i < allTexts.length; i++){

if(i == 0) document.getElementById(i.toString()).href =  "?lang=false"
//if(i == 18) document.getElementById(i.toString()).className = "mineTextESP"
if(allTexts[i].endsWith("img")){
let text = allTexts[i].slice(0, allTexts[i].length - 4)
document.getElementById('img' + i).src = "../img/" + text
}
else{
document.getElementById(i.toString()).innerHTML = allTexts[i]
}
}
}

let lilNumb = Math.floor(Math.random() * 4);
console.log(document.getElementById("lil").src)
document.getElementById("lil").src = "../img/headerimgs/" + lilNumb.toString() + ".png"


