// Opdracht 4a

// 1. Maak een functie die 1 enkel object verwacht
// 2. Genereer hiervan een string
// 3. Zorg ervoor dat de string wordt weergegeven als brand + type + - + name
// 4. Test de functie met een ander object

function editTvNames(tvName) {
    return `${tvName.brand} ${tvName.type} - ${tvName.name}`;
}

const editedTvName = editTvNames(inventory[2]);
// console.log(editedTvName);

// Opdracht 4b

// 1. Maak een functie die 1 prijs verwacht
// 2. Vul de string aan met € ervoor en ,- erachter

function editTvPrices(tvPrice) {
    return `€${tvPrice.price},-`;
}

const editedTvPrice = editTvPrices(inventory[5])
// console.log(editedTvPrice);

// Opdracht 4c

// 1. Genereer een string voor alle schermgroottes van 1 tv in inch en cm en creeer 1 screen sizes array
// 2. Reken inches om naar centimeters
// 3. Voeg het samen in [getal] inches ([getal] cm) |

function editTvSizes(screenSize) {

    let sizes = "";
    for (let i = 0; i < screenSize.availableSizes.length; i++) {
    const currentScreenSize = screenSize.availableSizes[i];

        if (screenSize.availableSizes.length - 1 === i) {
            const editedSize = `${currentScreenSize} inches (${Math.round(currentScreenSize * 2.54)} cm)`;
            sizes = sizes + editedSize;

        } else {
            const editedSize = `${currentScreenSize} inches (${Math.round(currentScreenSize * 2.54)} cm) | `;
            sizes = sizes + editedSize;
        }
    }
    return sizes;
}
const editedTvSize = editTvSizes(inventory[0])
// console.log(editedTvSize)

// Opdracht 4d

// 1. Toon het resultaat van a,b,c, op de pagina

const showOneTv = document.getElementById('container-4');
const firstTv = document.createElement('p');
firstTv.setAttribute('id', 'one-item');
firstTv.textContent = `${editedTvName} \n ${editedTvPrice} \n ${editedTvSize}`;
showOneTv.appendChild(firstTv)

// Opdracht 4e

// 1. Toon dezelfde opmaak voor alle TV's

function showAllTvs() {
    for (let i = 0; i < inventory.length; i++) {
        const tvNames = editTvNames(inventory[i]);
        const tvPrices = editTvPrices(inventory[i]);
        const tvSizes = editTvSizes(inventory[i]);

        const showAllTvs = document.getElementById("container-5");
        const allTvs = document.createElement("p");
        allTvs.setAttribute('id', 'all-items');
        allTvs.textContent = `${tvNames} \n ${tvPrices} \n ${tvSizes}`;
        showAllTvs.appendChild(allTvs);
    }
}

showAllTvs(inventory);