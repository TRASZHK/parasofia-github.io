// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Where are you? Oh-oh", time: 0 },
  { text: "Ooooh", time: 6 },
  { text: "'The Divine Feminine,' an album by Mac Miller", time: 9 },
  { text: "Oh-oh ('The Divine Feminine')", time: 14 },
  { text: "('The Divine Feminine')", time: 16 },
  { text: "Oooh", time: 20 },
  { text: "Oh", time: 22 },
  { text: " ", time: 23 },
  { text: "Am I supposed to? Okay", time: 25 },
  { text: " ", time: 28 },
  { text: "Love", time: 30 },
  { text: "love, love, love, love, love", time: 32 },
  { text: "(Sex)", time: 33 },
  { text: " ", time: 34 },
  { text: "Love, love, love, love, love, love", time: 36 },
  { text: "(Sex)", time: 37 },
  { text: " ", time: 40 },
  { text: "This sun don't shine when I'm alone", time: 43 },
  { text: "I lose my mind and I lose control", time: 47 },
  { text: "I see your eyes look through my soul", time: 51 },
  { text: "Don't be surprised this all I know", time: 54 },
  { text: "I felt the highs and they felt like you", time: 58 },
  { text: "See, a love like mine is too good to be true", time: 62 },
  { text: "And you too divine to just be mine", time: 66 },
  { text: "You remind me of the color blue", time: 70 },
  { text: "Girl, I'm so in love with you, Yeah", time: 74 },
  { text: "Girl, I'm so in love with you", time: 78 },
  { text: " ", time: 79 },
  { text: "Yeah", time: 80 },
  { text: " ", time: 99 },
  { text: "Baby, you were everything I ever wanted", time: 101 },
  { text: "Bought a wedding ring it's in my pocket", time: 103 },
  { text: "Planned to ask the other day, knew you'd run away", time: 105 },
  { text: "So I guess i just forgot it", time: 106 },
  { text: "Remember when you went away to college?", time: 108 },
  { text: "I was on the phone, wn end up talkin'", time: 110 },
  { text: "Past, present, future, all the gossip", time: 112 },
  { text: "Goddamn", time: 113 },
  { text: "Puppy love ain't what it was, darlin", time: 115 },
  { text: "The feeling that we have were so alarmin'", time: 118 },
  { text: "I can make you laugh, I could break the glass", time: 120 },
  { text: "If we made it last, it'd be a bargain", time: 121.5 },
  { text: "Mr.Charmin', that is my department", time: 123 },
  { text: "You was there before the fancy cars and", time: 125},
  { text: "You was there when I was just a starvin' artist", time: 127 },
  { text: "When the car waas havin' trouble startin'", time: 129 },
  { text: "Now we got our own apartment", time: 130.5 },
  { text: "Same box for the mail", time: 132 },
  { text: "Same hamper for the laundry", time: 134 },
  { text: "The food in the fridge is stale", time: 136 },
  { text: "And this mornin' you cooked the eggs with the kale", time: 140 },
  { text: "I tried to hit it while you was gettin' dressed", time: 142 },
  { text: "You said, 'All you ever think about is sex", time: 144 },
  { text: "I'm like, 'oh, well, you know me so well'", time: 148 },
  { text: "And if this what make you late, I swear I won't tell", time: 152 },
  { text: "And every time I call your phone, you better pick up your cell", time: 155 },
  { text: "I swear to God I'ma freak out if it goes straight to voicemail", time: 158 },
  { text: "Well, I'm the jealous type, but I swear that ass is what Heaven's like", time: 162 },
  { text: "And when I'm in that pussy, it's a better life", time: 164 },
  { text: "That's the only way I'm tryna end the night ", time: 167 },
  { text: " ", time: 169 },
  { text: "That's my only chance, I better get it right", time: 171},
  { text: " ", time: 174 },
  { text: "Take your time, my baby", time: 178 },
  { text: "TQM MI AMOR", time: 230 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);