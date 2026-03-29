function printLongSubjectNames() {
    const subjects = ["Maths", "English", "Science", "History", "Civic"];
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].length > 5) {
            console.log(subjects[i]);
        }
    }
}
printLongSubjectNames();