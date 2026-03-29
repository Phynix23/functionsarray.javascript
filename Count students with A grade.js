function countAGrades() {
    const grades = [70, 55, 88, 42, 95, 61];
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 80) {
            count++;
        }
    }
    console.log(`${count} students made an A`);
    return count;
}
countAGrades();