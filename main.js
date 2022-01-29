// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// Opdracht 1a

const tvTypes = inventory.map((tvType) => {
  return tvType.type;
})

console.log(tvTypes);

// Opdracht 1b

const soldOutTvs = inventory.filter((soldOutTv) => {
  return soldOutTv.sold >= soldOutTv.originalStock;
})

console.log(soldOutTvs);

// Opdracht 1c

const haveAmbilight = inventory.filter((hasAmbilight) => {
  if (hasAmbilight.options.ambiLight === true) {
    return true;
  }
})

console.log(haveAmbilight);

// Opdracht 1d

inventory.sort((a, b) => {
  return a.price - b.price;
})

console.log(inventory);

// Opdracht 2a

let amountSold = 0;

for (let i = 0; i < inventory.length; i++) {
  amountSold = amountSold + inventory[i].sold
}

console.log(amountSold);

// Opdracht 2b

const amountTvsSold = document.getElementById("container");

const amountTvsSoldTitle = document.createElement("h3");
amountTvsSoldTitle.textContent = "Aantal verkochte tv's";

const amountTvsSoldContent = document.createElement("p");
amountTvsSoldContent.textContent = amountSold;
amountTvsSoldContent.setAttribute("id", "amountSold-color");

amountTvsSold.appendChild(amountTvsSoldTitle);
amountTvsSold.appendChild(amountTvsSoldContent);

// Opdracht 2c

let amountBought = 0;

for (let i = 0; i < inventory.length; i++) {
  amountBought = amountBought + inventory[i].originalStock
}

console.log(amountBought);

// Opdracht 2d

const amountTvsBought = document.getElementById("container-2");

const amountTvsBoughtTitle = document.createElement("h3");
amountTvsBoughtTitle.textContent = "Aantal ingekochte tv's";

const amountTvsBoughtContent = document.createElement("p");
amountTvsBoughtContent.textContent = amountBought;
amountTvsBoughtContent.setAttribute("id", "amountBought-color");

amountTvsBought.appendChild(amountTvsBoughtTitle);
amountTvsBought.appendChild(amountTvsBoughtContent);

// Opdracht 2e

const tvsToBeSold = document.getElementById("container-3");

const tvsToBeSoldTitle = document.createElement("h3");
tvsToBeSoldTitle.textContent = "Aantal nog te verkopen tv's";

const tvsToBeSoldContent = document.createElement("p");
tvsToBeSoldContent.textContent = `${amountBought - amountSold}`;
tvsToBeSoldContent.setAttribute("id", "tvsToBeSold-color");

tvsToBeSold.appendChild(tvsToBeSoldTitle);
tvsToBeSold.appendChild(tvsToBeSoldContent);

// Opdracht 3a

// const brandsList = document.getElementById("list");
//
// const brandsListTitle = document.createElement("h3");
// brandsListTitle.textContent = "Wij verkopen deze merken TV's";
//
// brandsList.appendChild(brandsListTitle);
//
// inventory.map((listTv) => {
//   const newList = document.createElement("li");
//   newList.textContent = listTv.brand;
//
//   return brandsList.appendChild(newList);
// })

// Opdracht 3b

function tvObjects(array) {
    const brandsList = document.getElementById("list");

    array.map((listTv) => {
        const newList = document.createElement("li");
        newList.textContent = listTv.brand;

        return brandsList.appendChild(newList);
    })
}

tvObjects(inventory);
