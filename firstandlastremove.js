function removeFirstAndLastTasks() {
  const task = ["design", "code", "test", "deploy"];
  tasks.shift();
  tasks.pop();
  console.log(tasks);
  return tasks;
}
removeFirstAndLastTasks();