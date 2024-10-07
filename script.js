document.addEventListener('DOMContentLoaded', function() {
    const pizzas = [
        {
            name: "Ассорти",
            description:"Красный соус, курица, сыр, помидор, перец, колбаса<br>(33 см / 700 гр).",
            price: "460", 
            imageUrl: "images/assorti.jpeg"
        },
        {
            name: "Пепперони",
            description: "Красный соус, сыр, колбаса<br>(33 см / 600 гр).",
            price: "440",
            imageUrl: "images/pepperoni.jpeg"
        },
        {
            name: "Курица с салями",
            description: "Белый соус, курица, сыр, колбаса<br>(33 см / 670 гр).",
            price: "470",
            imageUrl: "images/chicken_salami.jpeg"
        },
        {
            name: "Чизбургер",
            description: "Красный соус, свиной карбанат, сыр, соленый огурец, репчатый лук, помидор, горчичный соус<br>(33 см / 800 гр).",
            price: "600",
            imageUrl: "images/cheeseburger.jpg"
        },
        {
            name: "Пицца с грибами",
            description: "Белый соус, курица, сыр, шампиньон, помидор<br>(33 см / 700 гр).",
            price: "550",
            imageUrl: "images/pizza_mushrooms.jpg"
        },
        {
            name: "Пицца с сыром",
            description: "Красный соус, российский сыр, моцарелла<br>(33 см / 700 гр).",
            price: "550",
            imageUrl: "images/pizza_cheese.jpg"
        },
    ];

    const pizzaMenu = document.getElementById('pizzaMenu');

    pizzas.forEach(pizza => {
        const pizzaCard = document.createElement('div');
        pizzaCard.className = 'pizza-card';

        pizzaCard.innerHTML = `
            <img src="${pizza.imageUrl}" alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <p class="price">${pizza.price} ₽</p>  <!-- Цена в рублях -->
        `;

        pizzaMenu.appendChild(pizzaCard);
    });
});