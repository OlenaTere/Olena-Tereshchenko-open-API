
//Creating a fetch
document.addEventListener("DOMContentLoaded", function () {
  const breedSelect = document.getElementById("breedSelect");
  const dogImageContainer = document.getElementById("dogImageContainer");

  const apiUrl = "https://api.thedogapi.com/v1/breeds";

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      
      data.forEach(function (breed) {
        const option = document.createElement("option");
        option.value = breed["id"];
        option.text = breed["name"];
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
    const breedImageUrl = `https://api.thedogapi.com/v1/images/search?breed_ids=`+breed;
    
    fetch(breedImageUrl)
      .then(response => response.json())
      .then(data => {
        data.forEach(function (images) {
         //divLog.innerHTML += images['url'];
         const imageUrl = images['url'];
         const img = document.createElement("img");
         img.src = imageUrl;
         img.alt = breed + " dog";
         dogImageContainer.appendChild(img);
       });

      })
      .catch(error => console.error("An error: ", error));
  }
 });