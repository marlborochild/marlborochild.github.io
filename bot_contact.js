
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
