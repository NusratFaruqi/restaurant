// Define menu items and their prices
const menuItems = [
    { name: "Burger", price: 8 },
    { name: "Pizza", price: 12 },
    // Add more items
];

// Define drink items and their prices
const drinkItems = [
    { name: "Orange Juice", price: 3 },
    { name: "Coke", price: 2 },
   
];

// Function to create an options list for select elements
function createOptionsList(items) {
    let options = '<option value="" disabled selected>Select an option</option>';
    items.forEach(item => {
        options += `<option value="${item.name}">${item.name} - $${item.price}</option>`;
    });
    return options;
}

// Populate the food and drink select elements
document.getElementById("food-select").innerHTML = createOptionsList(menuItems);
document.getElementById("drink-select").innerHTML = createOptionsList(drinkItems);

// Handle form submission
document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const errEl = document.getElementById("error");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const selectedFood = document.getElementById("food-select").value;
    const selectedDrink = document.getElementById("drink-select").value;

    if (phone.length < 11 | phone.length > 11) {
        errEl.innerHTML = "Phone number must be 11 digits"
        return
    }

    
    const confirmationMessage = `Thank you, ${name}! Your order for ${selectedFood} and ${selectedDrink} has been placed. We will deliver it to ${address}.`;

    // Display the confirmation message
    document.getElementById("confirmation-message").textContent = confirmationMessage;
});




