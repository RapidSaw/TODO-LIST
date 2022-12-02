        let taskNameInput = document.querySelector("#input_field");
        let addTaskButton = document.querySelector("#add-button");
        let startMessage = document.querySelector("#start-message");
        let taskList = document.querySelector(".list");
        let all = document.querySelector("#all")
        let notDone = document.querySelector("#to-do")
        let tasks = []; 

        addTaskButton.addEventListener("click", addTaskHandler);

        taskNameInput.addEventListener("keydown", function (e) {
            if (e.code == "Enter") addTaskHandler();
        })

        function addTaskHandler() {
            if (taskNameInput.value) {
                if (!startMessage.hidden) startMessage.hidden = true;

                let newTask = new Task(taskNameInput.value);
                console.log(newTask)
                newTask.createIn(taskList);
                tasks.push(newTask);

                taskNameInput.value = "";
                taskNameInput.placeholder = ""

            } 
            else {
                taskNameInput.placeholder = "Enter Task Name";
            }
        }

        notDone.addEventListener("click", toDo)

        function toDo() {
            tasks.forEach(element => {
                if (element.isDone) {
                    element.div.classList.add("hidden")
                }
            })
        }

        all.addEventListener("click", allTasks)

        function allTasks() {
            tasks.forEach(element => {
                if (element.isDone) {
                    element.div.classList.remove("hidden")
                }
            })
        }

        class Task {
            constructor(text) {
                this.text = text;
                this.isDone = false;
                this.div = null;
            }

            createIn(element) {
                this.div = document.createElement("div");
                this.div.classList.add("task");

                this.div.addEventListener("click", () => this.changeState(this.div));

                let p = document.createElement("p");
                p.innerText = this.text;

                let change = document.createElement("div")
                change.classList.add("change_button")

                let del = document.createElement("div")
                del.classList.add("del_button")
                del.addEventListener("click", () => this.deleteTask(this.div))

                this.div.append(p);
                this.div.append(change);
                this.div.append(del)
                element.prepend(this.div);
            }

            changeState(element) {
                this.isDone = !this.isDone;
                element.classList.toggle("done");
            }

            deleteTask (element) {
                element.remove()
            }
        };