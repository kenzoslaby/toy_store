const mbMenu = document.querySelector('.mobile-menu');
const button = document.querySelector(".menu-btn");

const animalsSlide = document.querySelector('.animals-slide');

const countEl = document.querySelector('.count')

let isExpanded = button.getAttribute("aria-expanded") === "true";
function open() {
    button.setAttribute("aria-expanded", "true");
    isExpanded = true;

}

function close() {
    button.setAttribute("aria-expanded", "false");
    isExpanded = false;
}

function toggle() {
    isExpanded ? close() : open();
    mbMenu.classList.toggle('!translate-x-0')
}

button.addEventListener("click", toggle);

const animalToys = [
    {
        id: 1,
        img: '../images/teddy.png',
        title: 'Teddy Bear',
        price: 30
    },
    {
        id: 2,
        img: '../images/plush.png',
        title: 'Mega Plush Toy',
        price: 38
    },
    {
        id: 3,
        img: '../images/dog.png',
        title: 'Cute Dog',
        price: 24
    },
    {
        id: 4,
        img: '../images/little.png',
        title: 'Little Friend',
        price: 27
    },
    {
        id: 5,
        img: '../images/teddy.png',
        title: 'Teddy Bear',
        price: 30
    },
    {
        id: 6,
        img: '../images/plush.png',
        title: 'Mega Plush Toy',
        price: 38
    },
];

let cardArr = [];

animalToys.forEach(i => {
    animalsSlide.innerHTML += `
    <li role="item"class="swiper-slide">
        <img
        class="w-44 h-44 mx-auto"
        src=${i.img}
        alt="teddy"
        />
        <h3>${i.title}</h3>
        <button onclick="addToCard(${i.id})" class="btn-green-sm">$ ${i.price} USD</button>
    </li>
    `
});

function addToCard(id) {
    let found = cardArr.find(p => p.id === id);
    if (!found) {
        let curr = animalToys.find(p => p.id === id);
        cardArr.push(curr)
        countEl.textContent = cardArr.length;
        writeCard()
    } else {
        alert('bu mahsulot bor')
    }
}


const cardList = document.querySelector('.card-list');
const cardModal = document.querySelector('.card-modal');
const closeBtn = document.querySelector('.close');
const openBtn = document.querySelector('.card-btn');

closeBtn.addEventListener('click', () => {
    cardModal.style.display = 'none'
})

openBtn.addEventListener('click', () => {
    cardModal.style.display = 'block'
})

function writeCard() {
    cardList.innerHTML = '';
    cardArr.forEach(p => {
        cardList.innerHTML += `
    <li role="item"class="border border-gray bg-zinc-100 flex items-center rounded-lg py-2 space-x-3 relative">
        <img class="w-24" src="${p.img}" alt="${p.title}" />
        <div>
            <h3>${p.title}</h3>
            <p>$ ${p.price}</p>
            <button onclick="deleteCard(${p.id})"
            class="bg-red-600 text-white w-7 h-7 rounded-full absolute top-3 right-3"
            >
            <i class="bi bi-x"></i>
            </button>
        </div>
        </li>
    `
    })
}

function deleteCard(id) {
    cardArr = cardArr.filter(p => p.id !== id);
    countEl.textContent = cardArr.length;
    writeCard()
}