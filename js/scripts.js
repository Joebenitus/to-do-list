function List() {
  this.tasks = [];
}

function Task(task) {
  this.task = task;
  this.status = false;
}

Task.prototype.entry = function() {
  return "Task: " + this.task + "\n Complete: " + this.status;
}

List.prototype.addTask = function(task) {
  this.tasks.push(task);
}

Task.prototype.taskComplete = function() {
  this.status = true;
}

List.prototype.showList = function() {
  for (let i = 0; i < this.tasks.length; i++) {
    console.log(this.tasks[i]);
  }
}