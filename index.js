//Creating a fetch
document.addEventListener("DOMContentLoaded", function () {
  const breedSelect = document.getElementById("breedSelect");
  const dogImageContainer = document.getElementById("dogImageContainer");

  const apiUrl = "https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=live_W7ApMdEbY9wSFhHWFr4r0EqAdkyif4hNbgqKFjBjr4PDgqIKtqlTS0Thh3Lpev0B";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const breeds = Object.keys(data[0]);

      breeds.forEach(function (breed) {
        const option = document.createElement("option");
        option.value = breed;
        option.text = breed;
        breedSelect.appendChild(option);
      });

      
      breedSelect.addEventListener("change", function () {
        const selectedBreed = breedSelect.value;
        displayDogImage(selectedBreed);
      });
    })
    .catch(error => console.error("An error: ", error));

  function displayDogImage(breed) {
    
    dogImageContainer.innerHTML = "";

    const breedImageUrl = `https://api.thedogapi.com/v1/images/search?breed_ids={breed.id}`;

    fetch(breedImageUrl)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.message;

        
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = breed + " dog";
        dogImageContainer.appendChild(img);
      })
      .catch(error => console.error("An error: ", error));
  }
 });









