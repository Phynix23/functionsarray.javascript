function checkPythonInLanguages() {
  const languages = ["Javascript", "Python", "Java", "C++"];
  const hasPython = languages.includes("python");
  console.log(hasPython);
  return hasPython;
}
checkPythonInLanguages();