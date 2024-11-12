document.addEventListener("DOMContentLoaded", function() {
    
    const btn = document.getElementById("btn");
  
    
    btn.addEventListener("click", function() {
      
      const randomAnimal = getRandomAnimal(); 
      const infoElement = document.getElementById("info");
      infoElement.textContent = `You got a random animal: ${randomAnimal}`;
    });
  
    function getRandomAnimal() {
      const animals = ["Lion", "Elephant", "Tiger", "Giraffe", "Panda","Alligator","Ant",  
      "Antelope",    
      "Bat",  
      "Bear", 
      "Boar",  
      "Buffalo", 
      "Butterfly",  
      "Camel", 
       "Cat", 
       "Cheetah",  
        "Chicken",
       "Chimpanzee",   
        "Cobra",
      "Cockroach ", 
         "Cow",
        "Crab",
        "Crane",
       "Crocodile",
        "Crow",
         "Deer",
        "Dog",
       "Dolphin", 
        "Donkey",
        "Dove",
       "Dragonfly", 
        "Duck",
        "Eagle",
       "Elephant",
         "Falcon",
        "Fish",
     " Flamingo ", 
        "Fox",
       "Frog",
        "Giraffe",
        "Goat",
        "Goose",
       "Gorilla" ,
       "Grasshopper" ,
        "Hamster",
        "Hare",
        "Hawk",
       "Hedgehog", 
       "Hippopotamus", 
        "Horse",
       "Hummingbird",
        "Hyena",
        "Jaguar",
       "Jellyfish" ,
        "Kangaroo",
        "Koala",
       "Komodo Dragon",
        "Leopard",
        "Lion",
       "Lizard" ,
       "Lobster" ,
        "Monkey",
        "Moose",
       "Mosquito",   
        "Mouse",
     "Mule",
      "Octopus" ];
      const randomIndex = Math.floor(Math.random() * animals.length);
      return animals[randomIndex];
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");
    const faunaInfoButton = document.getElementById("fauna-info-button");
    const faunaInfoDiv = document.getElementById("fauna-info");
    const modal = document.getElementById("fauna-info-modal");
    const closeBtn = document.getElementById("close-modal");
  
    const animalData = [
        { name: "Lion", info: "The lion is a large carnivorous feline known for its majestic mane." },
        { name: "Elephant", info: "Elephants are the largest land animals on Earth." },
        // Add more animals with information here
    ];

    btn.addEventListener("click", function() {
        const randomAnimal = getRandomAnimal();
        const infoElement = document.getElementById("info");
        infoElement.textContent = `You got a random animal: ${randomAnimal}`;
    });

    faunaInfoButton.addEventListener("click", function() {
        displayFaunaInfo();
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    function getRandomAnimal() {
        const randomIndex = Math.floor(Math.random() * animalData.length);
        return animalData[randomIndex].name;
    }

    function displayFaunaInfo() {
        const faunaInfo = document.getElementById("fauna-info");
        faunaInfo.innerHTML = "<h3>Fauna Information</h3>";
        animalData.forEach(animal => {
            faunaInfo.innerHTML += `<p><strong>${animal.name}:</strong> ${animal.info}</p>`;
        });
        modal.style.display = "block";
    }
});