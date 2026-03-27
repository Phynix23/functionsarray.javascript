function findLowestPoint () {
  const points = [15, 46, 89, 35, 10, 38];
  let lowest = points[0];
  for (let i = 1; i < points.length; i++) {
    if (points[i] < lowest) {
      lowest = points[i];
    }
  }
  console.log("The lowest number:", lowest);
  return lowest;
}
findLowestPoint();