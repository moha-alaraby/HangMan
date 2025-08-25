let letters = "abcdefghijklmnopqrstuvwxyz";

let letterArray = Array.from(letters);

let docLetters = document.querySelector(".letters");
console.log(docLetters)
letterArray.forEach((e) =>{
let letter = document.createElement("span"); 
letter.innerHTML = e
letter.classList.add("letter-box")
docLetters.appendChild(letter)
})
//wordFrom
let content = ["programming","egyptians","cars"];
// مواد البرمجة
let programming = [
  "JavaScript",
  "Python",
  "Java",
  "PHP",
  "Ruby",
  "Go",
  "Kotlin",
  "Swift"
];

// أسماء مصريين
let egyptians = [
  "Ahmed",
  "Mohamed",
  "Yasser",
  "Hassan",
  "Omar",
  "Mostafa",
  "Mahmoud",
  "Khaled",
  "Amr",
  "Tamer"
];

// أنواع عربيات
let cars = [
  "Toyota",
  "Hyundai",
  "Kia",
  "BMW",
  "Mercedes",
  "Nissan",
  "Chevrolet",
  "Peugeot",
  "Renault",
  "Mitsubishi"
];


// اختار نوع
let randomType = content[Math.floor(Math.random() * content.length)];
// console.log(randomType)
let wordFrom = document.querySelector(".category span");
console.log(wordFrom)
wordFrom.innerHTML = randomType

let randomWord;
if (randomType === "programming") {
  randomWord = programming[Math.floor(Math.random() * programming.length)];
} else if (randomType === "egyptians") {
  randomWord = egyptians[Math.floor(Math.random() * egyptians.length)];
} else {
  randomWord = cars[Math.floor(Math.random() * cars.length)];
}

let randonmCountry = randomWord.toUpperCase();
console.log(randonmCountry);

// الحروف اللي في اللعبة
let letter = document.querySelectorAll(".letter-box");


//letters-guess
let lettersGuess = document.querySelector(".letters-guess")
Array.from(randonmCountry).forEach(()=>{
    let guess = document.createElement("span");
    lettersGuess.appendChild(guess);
})


for(let i=0;i<letter.length; i++){
    error = 0
    sucess = 0
letter[i].addEventListener("click",()=>{
    let sucessGess = false;
    letter[i].classList.add("clicked")

    for(let j=0;j<randonmCountry.length; j++){
    if(randonmCountry[j] === letter[i].textContent.toUpperCase()){
        (lettersGuess.children[j]).innerHTML = letter[i].textContent.toUpperCase()
        sucessGess = true;
        sucess ++
    }
    }
    if (sucessGess === false) {
    let drawParts = [
        document.querySelector(".hangman-draw .the-draw"),
        document.querySelector(".hangman-draw .the-stand"),
        document.querySelector(".hangman-draw .the-hang"),
        document.querySelector(".hangman-draw .the-rope"),
        document.querySelector(".hangman-draw .the-man .head"),
        document.querySelector(".hangman-draw .the-man .body"),
        document.querySelector(".hangman-draw .the-man .hands"),
        document.querySelector(".hangman-draw .the-man .legs")
    ];

    if (error < drawParts.length) {
        drawParts[error].style.display = "block";
        error++;
    }
    if(error === drawParts.length){
        letter.forEach((e) => {
            e.style.pointerEvents = "none"
        });
        let lose = document.createElement("div");
        lose.classList.add("popup");
        lose.innerHTML=`Game Over, The Word Is ${randonmCountry}`
        document.body.appendChild(lose)
    }
}
    if(sucess === randonmCountry.length){
                letter.forEach((e) => {
            e.style.pointerEvents = "none"
        });
        let info = document.querySelector(".hangman-draw")
        let win = document.createElement("video");
        win.classList.add("video");

        // مسار الفيديو
        win.src = "stick.mp4";

        // إعدادات الفيديو
        win.autoplay = true;   // يشتغل تلقائي
        win.loop = true;       // يكرر نفسه
        win.muted = true;      // إلغاء الصوت
        win.controls = false;  // يشيل الشريط اللي تحت

        win.playbackRate = 2;

        info.appendChild(win);

        let letrs = document.querySelector(".letters")
        let winDiv = document.createElement("div");
        winDiv.classList.add("winDiv");
        winDiv.innerHTML=`Congratulations! You Guessed The Word:<span> ${randonmCountry} </span>`
        document.body.appendChild(winDiv);
    }
})

}



