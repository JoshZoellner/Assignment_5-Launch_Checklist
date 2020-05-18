// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/



window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let launchStatus = document.getElementById("launchStatus");
   let faultyItems = document.getElementById("faultyItems");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
      form.addEventListener("submit", function(event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoMass = document.querySelector("input[name=cargoMass]");
         // Validations //
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
               alert("All fields are required!");
               event.preventDefault();
         } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value)) {
               alert("Please make sure Pilot and Co-pilot's name are valid inputs!");
               event.preventDefault();
         } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
               alert("Please make sure Fuel Level and Cargo Mass are valid inputs!");
               event.preventDefault();
         }  

         // ^^^ End Validations ^^^ //

         if (isNaN(pilotName.value) && isNaN(copilotName.value) && !isNaN(fuelLevel.value) && !isNaN(cargoMass.value)) {
            pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`;
            copilotStatus.innerHTML = `Pilot ${copilotName.value} Ready`;
            if (fuelLevel.value < 10000){
               fuelStatus.innerHTML = `There is not enough fuel for the journey.`;
               faultyItems.style.visibility = "visible";
               launchStatus.innerHTML = `Shuttle not ready for launch.`;
               launchStatus.style.color = "red";
               event.preventDefault();
            } else {
               fuelStatus.innerHTML = `Fuel level high enough for launch.`;
            }

            if (cargoMass.value > 10000){
               cargoStatus.innerHTML = `There is too much mass for the shuttle to take off.`;
               faultyItems.style.visibility = "visible";
               launchStatus.innerHTML = `Shuttle not ready for launch.`;
               launchStatus.style.color = "red";
               event.preventDefault();
            } else {
               cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
            }
            
            if (fuelLevel.value > 9999 && cargoMass.value < 9999){               
               launchStatus.innerHTML = `Shuttle is ready for launch.`;
               launchStatus.style.color = "green";
               faultyItems.style.visibility = "hidden";
               event.preventDefault();
            }
         }

      });
});

