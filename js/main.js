
document.getElementById('calculate-btn').addEventListener('click', () => {
    const area = parseFloat(document.getElementById('area').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);
    const coeff = parseFloat(document.getElementById('coefficient').value);

    if (area > 0 && rainfall > 0) {
        const results = calculateRainwaterPotential(area, rainfall, coeff);

        // Update UI
        document.getElementById('harvest-val').innerText = results.potential.toLocaleString();
        document.getElementById('tank-val').innerText = results.tankSize.toLocaleString();
        
        // Show the results card
        document.getElementById('results').classList.remove('hidden');
    } else {
        alert("Please enter valid numbers for Area and Rainfall.");
    }
});