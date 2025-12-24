
// this code works for without json file and have to put the rainfall in (mm) manually no city selection feature.

// document.getElementById('calculate-btn').addEventListener('click', () => {
//     const area = parseFloat(document.getElementById('area').value);
//     const rainfall = parseFloat(document.getElementById('rainfall').value);
//     const coeff = parseFloat(document.getElementById('coefficient').value);

//     if (area > 0 && rainfall > 0) {
//         const results = calculateRainwaterPotential(area, rainfall, coeff);

//         // Update UI
//         document.getElementById('harvest-val').innerText = results.potential.toLocaleString();
//         document.getElementById('tank-val').innerText = results.tankSize.toLocaleString();
        
//         // Show the results card
//         document.getElementById('results').classList.remove('hidden');
//     } else {
//         alert("Please enter valid numbers for Area and Rainfall.");
//     }
// });

document.addEventListener('DOMContentLoaded', () => {
    const citySelector = document.getElementById('city-selector');
    const manualGroup = document.getElementById('manual-rainfall-group');
    const calcBtn = document.getElementById('calculate-btn');

    // 1. Fetch the JSON data and populate the dropdown
    fetch('assets/data/rainfall_data.json')
        .then(response => response.json())
        .then(data => {
            // Clear the "Loading..." text
            citySelector.innerHTML = '<option value="0" disabled selected>-- Choose a City --</option>';

            // Sort cities alphabetically
            const cities = Object.keys(data).sort();

            // Loop through each city and add it to the dropdown
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = data[city]; // The value is the rainfall amount (e.g., 1100)
                option.text = `${city} (~${data[city]} mm)`;
                citySelector.appendChild(option);
            });

            // Add the "Other" option at the end
            const otherOption = document.createElement('option');
            otherOption.value = 'custom';
            otherOption.text = 'Other (Enter Manually)';
            citySelector.appendChild(otherOption);
        })
        .catch(error => {
            console.error('Error loading city data:', error);
            citySelector.innerHTML = '<option disabled>Error loading data</option>';
        });

    // 2. Handle "Other" selection to show manual input
    citySelector.addEventListener('change', (e) => {
        if (e.target.value === 'custom') {
            manualGroup.classList.remove('hidden');
            document.getElementById('rainfall').value = ''; // Clear previous input
        } else {
            manualGroup.classList.add('hidden');
        }
    });

    // 3. Calculation Logic
    calcBtn.addEventListener('click', () => {
        let rainfall = 0;

        // Check if user selected "Other" or a specific city
        if (citySelector.value === 'custom') {
            rainfall = parseFloat(document.getElementById('rainfall').value);
        } else {
            rainfall = parseFloat(citySelector.value);
        }
        const area = parseFloat(document.getElementById('area').value);
        const coeff = parseFloat(document.getElementById('coefficient').value);

        if (area > 0 && rainfall > 0) {
            // Call the function from calculator.js
            const results = calculateRainwaterPotential(area, rainfall, coeff);

            // Update UI
            document.getElementById('harvest-val').innerText = results.potential.toLocaleString();
            document.getElementById('tank-val').innerText = results.tankSize.toLocaleString();
            
            // Show result card
            document.getElementById('results').classList.remove('hidden');
        } else {
            alert("Please select a valid city/rainfall and enter the roof area.");
        }
    });
});