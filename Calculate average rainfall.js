function calculateAverageRainfall() {
    const rainfall = [120, 85, 200, 60, 175, 140];
    let total = 0;
    for (let i = 0; i < rainfall.length; i++) {
        total += rainfall[i];
    }
    const average = total / rainfall.length;
    console.log("Average rainfall:", average.toFixed(2));
    return average;
}
calculateAverageRainfall();