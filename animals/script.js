// script.js
document.addEventListener("DOMContentLoaded", () => {
  const animalNameInput = document.getElementById("animalNameInput");
  const animalColorPicker = document.getElementById("animalColorPicker");
  const animalDOBInput = document.getElementById("animalDOBInput");
  const addAnimalButton = document.getElementById("addAnimalButton");
  const animalListContainer = document.getElementById("animalListContainer");

  // Load saved animals from localStorage
  const savedAnimals = JSON.parse(localStorage.getItem("animals")) || [];
  savedAnimals.forEach(animal => addAnimalToList(animal));

  // Event listener for the Add Animal button
  addAnimalButton.addEventListener("click", () => {
    const animalName = animalNameInput.value.trim();
    const animalColor = animalColorPicker.value;
    const animalDOB = animalDOBInput.value;

    if (animalName && animalDOB) {
      const newAnimal = { name: animalName, color: animalColor, dob: animalDOB };
      addAnimalToList(newAnimal);

      // Save the new animal to localStorage
      savedAnimals.push(newAnimal);
      localStorage.setItem("animals", JSON.stringify(savedAnimals));

      // Clear inputs
      animalNameInput.value = '';
      animalDOBInput.value = '';
    } else {
      alert("Please enter both an animal name and date of birth.");
    }
  });

  // Function to add an animal to the list
  function addAnimalToList(animal) {
    const listItem = document.createElement("li");
    listItem.textContent = `${animal.name} - ${animal.color} - ${animal.dob}`;
    animalListContainer.appendChild(listItem);
  }
});

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
