const buttonsAdd = document.querySelectorAll(".button--add");
const buttonsRemove = document.querySelectorAll(".button--remove");
const divProducts = document.querySelector(".section__products_cards");

const products = [
    {
        "nombre": "Samsung Galaxy A14", "precio": 139900, "stock": 10, "marca": "Samsung", "categoría": "Movil",
        "descripcion_corta": "Galaxy A14 combina un procesador Octa-core y conectividad para ofrecerte el rendimiento y la velocidad que necesitás. Disfrutá del juego y el streaming más fluido y descargá y compartí tus vídeos en un abrir y cerrar de ojos.",
        "descripción_larga": "", "producto_importado": false, "producto_nacional": true, "envío_sin_cargo": true, "fotografía": "./images/gallery/A14.png"
    },
    {
        "nombre": "Samsung Galaxy S23 FE", "precio": 799999, "stock": 10, "marca": "Samsung", "categoría": "Movil",
        "descripcion_corta": "El celular Samsung Galaxy S23 FE posee un moderno y atractivo diseño que querrás tener en tus manos.El nuevo Galaxy S23 FE se destaca por el diseño icónico de la serie Galaxy S23, que adopta una estética clásica y muchas de las características prácticas.Está equipado para todas tus necesidades.",
        "descripción_larga": "", "producto_importado": true, "producto_nacional": false, "envío_sin_cargo": true, "fotografía": "./images/gallery/S23FE.jpg"
    },
    {
        "nombre": 'Samsung Smart M5 32"', "precio": 206000, "stock": 5, "marca": "Samsung", "categoría": "TV",
        "descripcion_corta": "Un monitor que se adapta a todas sus necesidades. Trabaje sin necesidad de un pc en casa, manténgase conectado con Microsoft Office 365 y acceda remotamente al ordenador de su oficina. Disfrute del sistema de entretenimiento integrado, que encajará perfectamente allá donde quiera colocarlo.",
        "descripción_larga": "", "producto_importado": true, "producto_nacional": false, "envío_sin_cargo": true, "fotografía": "./images/gallery/M5-32.jpg"
    },
    {
        "nombre": "Motorola Moto G72", "precio": 209999, "stock": 15, "marca": "Motorola", "categoría": "Movil",
        "descripcion_corta": "Fotos detalladas con más de un millón de píxeles. Pantalla de nivel cinematográfico con más de mil millones de colores. El procesador MediaTek Helio G99 te ofrece toda la potencia que necesitás. Cargá tu teléfono a toda velocidad con TurboPower™ de 30 W.",
        "descripción_larga": "", "producto_importado": false, "producto_nacional": true, "envío_sin_cargo": true, "fotografía": "./images/gallery/MOTOG72.png"
    },
    {
        "nombre": "Motorola Moto G32", "precio": 159999, "stock": 10, "marca": "Motorola", "categoría": "Movil",
        "descripcion_corta": "Amplificá tu entretenimiento con dos parlantes estéreo y el sonido Dolby Atmos. Con TurboPower 30, podés cargar el teléfono a gran velocidad. Con el procesador Octa-Core Snapdragon®* 680 y los 6 GB de RAM, vas a disfrutar de tu contenido favorito con un desempeño optimizado. El sensor de 50 MP permite sacar fotos nítidas con cualquier luz.",
        "descripción_larga": "", "producto_importado": false, "producto_nacional": true, "envío_sin_cargo": true, "fotografía": "./images/gallery/MOTOG32.png"
    },
    {
        "nombre": "Aspiradora Ultracomb AS-4228", "precio": 120500, "stock": 3, "marca": "Ultracomb", "categoría": "Aspiradoras",
        "descripcion_corta": "Aspiradora Sin Bolsa Ultracomb AS/4228, cuenta con una potencia de 2000W y una capacidad de 3,5 litros, lo que la hace ideal para limpiar cualquier tipo de superficie con rapidez y eficacia, incorpora un nuevo sistema de filtración múltiple que utiliza tecnología multi/ciclónica.",
        "descripción_larga": "", "producto_importado": false, "producto_nacional": true, "envío_sin_cargo": true, "fotografía": "./images/gallery/AS-4228.png"
    },
    {
        "nombre": "Carrier Xpower Inverter Smart 53hvg", "precio": 599999, "stock": 2, "marca": "Carrier", "categoría": "Aires Acondicionados",
        "descripcion_corta": "Con un nuevo diseño más eficiente y duradero, los equipos XPower Inverter Smart cuentan con tecnología innovadora que te permite llevar tu experiencia de confort a otro nivel. Mediante la App Carrier Air Conditioner podés controlar tu equipo de manera remota desde tu smartphone o tablet.",
        "descripción_larga": "", "producto_importado": true, "producto_nacional": false, "envío_sin_cargo": true, "fotografía": "./images/gallery/53HVG.jpg"
    },
    {
        "nombre": "Aire Acondicionado Portátil Frío/Calor 3500W Philco", "precio": 159999, "stock": 5, "marca": "Philco", "categoría": "Aires Acondicionados",
        "descripcion_corta": "El Aire Acondicionado Portátil Frío Calor de Philco te asegura la mejor climatización en cualquier momento del año. Cuenta con filtros lavables, no requiere drenaje, el agua se autoevapora y es fácil de instalar. Es compacto y de fácil traslado, ideal para espacios reducidos.",
        "descripción_larga": "", "producto_importado": false, "producto_nacional": true, "envío_sin_cargo": true, "fotografía": "./images/gallery/php32.jpg"
    },
    {
        "nombre": "Tender Plegable Slim Sin Alas Mor", "precio": 19840, "stock": 20, "marca": "Mor", "categoría": "Tenders",
        "descripcion_corta": "El tendedero de piso delgado de Mor es la forma más económica y ecológica de secar la ropa. Práctico y funcional, es perfecto para aquellos que no tienen mucho espacio en casa o apartamento. Se puede llevar fácilmente a donde prefiera y cuando no lo esté usando, simplemente dóblelo y guárdelo.",
        "descripción_larga": "", "producto_importado": false, "producto_nacional": true, "envío_sin_cargo": true, "fotografía": "./images/gallery/TenderSinAlas.jpg"
    },
    {
        "nombre": "Tender Plegable Con Alas Mor", "precio": 34950, "stock": 12, "marca": "Mor", "categoría": "Tenders",
        "descripcion_corta": "El Tendedero de Piso con Solapas ofrece resistencia y durabilidad y sus exclusivas piezas plásticas de colores son un diferencial que, además de aportar más encanto, ayudan a proteger contra la corrosión.",
        "descripción_larga": "", "producto_importado": false, "producto_nacional": true, "envío_sin_cargo": true, "fotografía": "./images/gallery/TenderConAlas.jpg"
    },
];

function loadProducts() {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        let figure = document.createElement('figure');
        figure.className = "card card--product";

        // const urlBlob = URL.createObjectURL(product.fotografía);
        let image = document.createElement('img');
        image.className = "card__image";
        image.src = product.fotografía;
        figure.appendChild(image);

        const title = document.createElement('h4');
        title.className = "card__title";
        title.innerText = product.nombre;
        figure.appendChild(title);

        const shortDesc = document.createElement('p');
        shortDesc.className = "card__text";
        shortDesc.innerText = product.descripcion_corta;
        figure.appendChild(shortDesc);

        const div = document.createElement('div');
        figure.appendChild(div);

        const spanPrice = document.createElement('span');
        spanPrice.className = "card__price";
        spanPrice.innerText = product.precio;
        div.appendChild(spanPrice);

        const btnAdd = document.createElement('button');
        btnAdd.className = "button button--sm button--add";
        btnAdd.innerText = "Agregar";
        div.appendChild(btnAdd);

        const spanCounter = document.createElement('span');
        spanCounter.className = "card__counter";
        spanCounter.innerText = 0;
        div.appendChild(spanCounter);

        const btnRemove = document.createElement('button');
        btnRemove.className = "button button--sm button--remove button--disabled";
        btnRemove.innerText = "Quitar";
        div.appendChild(btnRemove);

        divProducts.appendChild(figure);

        btnAdd.addEventListener('click', function () {
            addItem(btnAdd, btnRemove);
        });

        btnRemove.addEventListener('click', function () {
            removeItem(btnAdd, btnRemove);
        });
    }

    cardProducts = document.querySelectorAll(".card--product");
}

console.log(location.pathname);
if (location.pathname.endsWith("index.html") || location.pathname.endsWith("/")) {
    window.onload = loadProducts;
}



function addItem(elementAdd, elementRemove) {
    const value = parseInt(elementAdd.nextElementSibling.innerHTML);
    elementAdd.nextElementSibling.innerHTML = value + 1;
    if (value == 0) {
        elementRemove.classList.remove("button--disabled");
    }
}

function removeItem(elementAdd, elementRemove) {
    const value = parseInt(elementRemove.previousElementSibling.innerHTML);
    if (value == 1) {
        elementRemove.classList.add("button--disabled");
    }
    if (value > 0) {
        elementRemove.previousElementSibling.innerHTML = value - 1;
    }
}

const elementSearch = document.getElementById("search_productName");
const buttonSearch = document.getElementById("product--search__btn");
let cardProducts = [];

if (buttonSearch) {
    buttonSearch.addEventListener('click', function (e) {
        e.preventDefault();
        searchItems(elementSearch.value);
    });
}


function searchItems(searchText) {
    for (let i = 0; i < cardProducts.length; i++) {
        const cardProduct = cardProducts[i]
        const cardProductName = cardProducts[i].children[1].innerHTML.toUpperCase();
        if (cardProductName.includes(searchText.toUpperCase())) {
            cardProduct.classList.remove("element--deactivate");
        } else {
            cardProduct.classList.add("element--deactivate");
        }
    }
}


export { products }