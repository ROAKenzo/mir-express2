import fs from 'fs';
const { pathname: tasksPath } = new URL(
  'C:/Users/Kenzo/Desktop/RIVALDO-/MakeItReal/mir-express2/express-plano/data/tasks.json',
  import.meta.url
);

const getTaskFromFile = new Promise((resolve) => {
  fs.readFile(tasksPath, (err, fileContent) => {
    if (err) {
      resolve([]);
    } else {
      resolve(JSON.parse(fileContent));
    }
  });
});

class Task {
  constructor(title) {
    this.title = title;
  }

  save() {
    getTaskFromFile.then((tasks) => {
      tasks.push(this);
      fs.writeFile(tasksPath, JSON.stringify(tasks), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return getTaskFromFile.then((tasks) => tasks);
  }
}
export default Task;
