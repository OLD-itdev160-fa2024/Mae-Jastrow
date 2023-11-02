//Aray to hold tasks
var task = [];

//Tasks status 'enm'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

//Task constructor function
function Task (id, name, status) {
    this.id =id;
    this.name = name;
    this.status = status;
}

//Creates a new task element and adds it to the DOM
function addTaskElemnt (task) {
    //Create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = documetn.createTextNode(task.name);

    //Set attributes
    taskEl.setAttribute('id', task.id);

    //Add text element to task element
    taskEl.appendChild(textEl);

    //Add task element to list
    listEl.apppendChild(taskEl);
}

//Click handler to add a new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != '') {
        //Create a unique id
        var id = 'item-' + taskStatus.length;

        //Create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        taskStatus.push(task);

        //Add the task to the DOM
        addTaskElement(task);

        //Reset input
        inputEl.value = '';
    }
}

//Click handler to complete a tasks
function completeTask (event) {
    //Get the task element
    var tskEl = event.target;
    var id = taskEl.id;

    //Find corresponding task in task aray and update status
    for (var i = 0; i < task.length; i++) {
        if (task[i].id == id) {
            task[i].status = taskStatus.completed;
            break;
        }
    }

    //Move task element from active list to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//(Optional) Kay press handler to automatically click add task button
function clickButton (event) {
    if (event.keycode === 13) {
        document.getElementById('add-task').click();
    }
}

//Initalizes the app
function init () {
    //Wire up the add task button click handler
    document.getElementById('add-task').oneclick = addTask;

    //Wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //(Optional) Wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;
}

init();

