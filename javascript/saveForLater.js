
// Function to add an item to the "Save for later" folder
const addToSavedItems = (itemName) => {
    if (typeof Storage !== "undefined") {
        let savedItems = localStorage.getItem("savedItems");
        savedItems = savedItems ? JSON.parse(savedItems) : [];

        if (!savedItems.includes(itemName)) {
            savedItems.push(itemName);
            localStorage.setItem("savedItems", JSON.stringify(savedItems));
        }
            
    alert(`"${itemName}" has been added to your "Save for later" folder. You now have ${getSavedItemsCount()} items.`);
    populateSavedItemsList(); // Update saved items count immediately  

} else {
    alert("Sorry, your browser does not support local storage. Cannot save item.");
}
};

// Function to get the number of items in the "Save for later" folder
const getSavedItemsCount = () => {
    if (typeof Storage !== "undefined") {
        const savedItems = localStorage.getItem("savedItems");
        return savedItems ? JSON.parse(savedItems).length : 0;
    } else {
        return 0;
    }
};

// Function to populate the saved items list on the "Saved Recipes" page
const populateSavedItemsList = () => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems"));
    const savedItemsList = document.getElementById("savedItemsList");
    const savedItemsCountElement = document.getElementById("savedItemsCount");

    if (savedItems && savedItems.length > 0) {
        savedItems.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.innerText = item;
            savedItemsList.appendChild(listItem);
        });
        savedItemsCountElement.innerText = savedItems.length;
    } else {
        const noItemsMessage = document.createElement("p");
        noItemsMessage.innerText = "No items saved yet.";
        savedItemsList.appendChild(noItemsMessage);
        savedItemsCountElement.innerText = "0";
    }
};

// Populate the saved items list on the "Saved Recipes" page
populateSavedItemsList();

// Function to handle comment submission
const submitComment = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    // Display input in the console.
    console.log(`Name: ${name}, Email: ${email}, Comment: ${comment}`);

    // Clear the form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
};

// Function to handle recipe liking
const likeRecipe = (recipeName) => {
    alert(`You liked "${recipeName}"!`);
};

// Add event listener for comment form submission
const commentForm = document.getElementById("commentForm");
commentForm.addEventListener("submit", submitComment);
