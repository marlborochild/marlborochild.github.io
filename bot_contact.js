
let basket = {};

function selectProduct(productName) {
    selectedProduct = productName;
    document.getElementById('quantityModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function saveQuantity() {
    const quantity = parseInt(document.getElementById('quantityInput').value);
    basket[selectedProduct] = quantity;
    // updateBasket();
    closeModal();
}

function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function sendCommand() {
    let message = "Commands:";
    for (let product in basket) {
        message += `\n${product} : ${basket[product]}`;
    }
    // console.log(message); // Example action, replace with actual API call to your Python bot
    // alert("Command sent!"); // Placeholder, replace with actual functionality
    Telegram.WebApp.sendData(message);
    Telegram.WebApp.close();
}

function showBasket() {
    updateBasketContents();
    document.getElementById('basketModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function updateBasketContents() {
    let basketDiv = document.getElementById('basketContents');
    basketDiv.innerHTML = "";
    for (let product in basket) {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `${product}: ${basket[product]}`;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() { removeFromBasket(product); };
        itemDiv.appendChild(deleteButton);
        basketDiv.appendChild(itemDiv);
    }
}

function removeFromBasket(productName) {
    delete basket[productName];
    updateBasketContents();
}

function closeBasket() {
    document.getElementById('basketModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
