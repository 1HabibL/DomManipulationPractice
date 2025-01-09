const form = document.getElementById("userForm");
const formInfo = document.getElementById("formInfo");

// Function to load saved data from localStorage and display it
function loadSavedData() {
    const names = JSON.parse(localStorage.getItem("names")) || []; // Retrieve array or empty array

    // Loop through the saved names and create divs for each entry
    names.forEach((name) => {
        addNameToDisplay(name.firstName, name.lastName, false); // false to prevent double-saving
    });
}

// Function to add new name to the display
// If `save` is true, the function also saves the new name to localStorage
function addNameToDisplay(firstName, lastName, save = true) {
    // Create new div for the name pair
    const newNameDiv = document.createElement("div");
    newNameDiv.classList.add("nameEntry");

    // Add content to the new div
    newNameDiv.innerHTML = `<div class="firstName">First Name: ${firstName}</div>
                            <div class="lastName">Last Name: ${lastName}</div>`;

    // Append the new div to the formInfo container
    formInfo.appendChild(newNameDiv);

    // Save to localStorage only if the save flag is true
    if (save) {
        const names = JSON.parse(localStorage.getItem("names")) || [];
        names.push({ firstName, lastName }); // Add the new name pair to the array
        localStorage.setItem("names", JSON.stringify(names)); // Save updated array back to localStorage
    }
}

// Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    // Add the new name to display and save it to localStorage
    addNameToDisplay(firstName, lastName);

    // Clear the form inputs
    form.reset();
});

// Load the saved names on page load
window.addEventListener("load", loadSavedData);




function addAnimalToList(animal) {
    const listItem = document.createElement("li"); // Create the list item
    listItem.textContent = `${animal.name} - ${animal.color} - ${animal.dob}`; // Set the list item text
  
    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; // Set button text
    deleteButton.style.marginLeft = "10px"; // Optional: Add some spacing
    deleteButton.addEventListener("click", () => {
      listItem.remove(); // Remove the list item from the DOM
  
      // Remove the animal from localStorage
      const updatedAnimals = savedAnimals.filter(
        savedAnimal =>
          savedAnimal.name !== animal.name ||
          savedAnimal.color !== animal.color ||
          savedAnimal.dob !== animal.dob
      );
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
    });
  
    listItem.appendChild(deleteButton); // Add the delete button to the list item
    animalListContainer.appendChild(listItem); // Add the list item to the container
  }