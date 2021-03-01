class TodoItem {
    constructor(
        public task: string, 
        public isCompleted: boolean,
    ){}
}

class TaskManager {
    tasks: TodoItem[] = [];

    addTask(task: string): void {
        const newItem = new TodoItem(task, false); 
        this.tasks.push(newItem);
    }
}

class HTMLHelper {
    static createdTaskItem(task: TodoItem): HTMLLIElement {
        const listItem = document.createElement("li");
        const checkBox = document.createElement("input");
        const label = document.createElement("label");

        checkBox.addEventListener("change", () => {
            if(checkBox.checked) {
                task.isCompleted = true;
                displayTask();
            }
        });

        checkBox.type = "checkbox";
        label.innerText = task.task;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);

        return listItem;

    }
}


const taskInput = <HTMLInputElement>document.querySelector("#new-task");
const addButoon = document.querySelector("#add-task");
const incompleteTaskHOlder = document.querySelector("#incomplete-tasks")!;
const completedTaskHolder = document.querySelector("#completed-tasks")!;

const taskManager = new TaskManager();

addButoon?.addEventListener("click", () => {
    taskManager.addTask(taskInput.value);
    displayTask();
    clear();    
});



const displayTask = (): void => {
    completedTaskHolder.innerHTML = "";
    incompleteTaskHOlder.innerHTML = "";

    taskManager.tasks.forEach(element => {

        const listItem = HTMLHelper.createdTaskItem(element);
        if(element.isCompleted) {
            completedTaskHolder.appendChild(listItem)
        } else {
            incompleteTaskHOlder.appendChild(listItem);
        }
        
    });
}

const clear = (): void => {
    taskInput.value = "";
}