/**
 * Formula: S = R * A * C
 * S = Rainwater potential (Liters)
 * R = Rainfall (mm)
 * A = Area (sq. m)
 * C = Runoff Coefficient
 */
const calculateRainwaterPotential = (area, rainfall, coefficient) => {
    const potential = area * rainfall * coefficient;
    
    // Simple estimation: 15% of annual harvest for storage tank size
    const tankSize = potential * 0.15;

    return {
        potential: Math.round(potential),
        tankSize: Math.round(tankSize)
    };
};