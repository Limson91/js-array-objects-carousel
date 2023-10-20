console.log('test');

// creazione array di oggetti
const imgs = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//- collegare elemento slide dal dom
const containerDomElement = document.querySelector('.slide-container');
console.log(imgs.length);

//- ciclare array immagini
for (let i = 0; i < imgs.length; i++) {
    let imgsPath = imgs[i];
    console.log(imgsPath);

    // sovrascrive contenuto html
    const htmlString = `
        <div class="image">
            <img src="${imgsPath.image}">
            <div class="description"><h1>${imgsPath.title}</h1>
            <p>${imgsPath.text}</p></div>
        </div>`;
    console.log(htmlString);

    // aggiungere contenuto all'innerHTML
    containerDomElement.innerHTML += htmlString;
}
// recuperare le imgs dal DOM
const imageDomElement = document.querySelectorAll('.image');
// console.log(imageDomElement);

// assegnare variabile di controllo
let activeImg = 0;

// attivare la classe 'active' sull'img 
const firstImageDomElement = imageDomElement[activeImg];
firstImageDomElement.classList.add('active');

// assegnare la funzione click
const iconUpDomElement = document.querySelector('.icon-up');
iconUpDomElement.addEventListener('click', function() {
    console.log('click icon-up');

    // rimuovere la classe attiva dalla prima img
    imageDomElement[activeImg].classList.remove('active');
    activeImg++;

    if (activeImg === imgs.length) {
        activeImg = 0;
    }

    // aggiungere la classe attiva all'img successiva
    imageDomElement[activeImg].classList.add('active');
});


const iconDownDomElement = document.querySelector('.icon-down');
iconDownDomElement.addEventListener('click', function() {
    console.log('click icon-down');

    // rimuovere la classe attiva dall'ultima img e decrementare l'img precedente
    imageDomElement[activeImg].classList.remove('active');
    activeImg--;

    if(activeImg < 0) {
        activeImg = imgs.length - 1;
    }

    // riattivare il ciclo delle img alla rovescia
    imageDomElement[activeImg].classList.add('active');
});