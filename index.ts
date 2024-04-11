#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

let todoList:string[] = [];
let conditions = true;

// developer name..
console.log("<====================================================>")
console.log (chalk.bgGreenBright.bold("\n\tWELCOME TO TALHA HAROON,UPDATED  TODO-LIST- APPLICATION:\t\n"))

let main = async () => {
 
    while (conditions ) {
    let option = await inquirer.prompt ([
        {
           name:"choices",
           type:"list",
           message:chalk.magentaBright("Select an option you  want to do?  "),
          choices:["Add Task","Update Task","Delete Task","View Todo-list","Exit"]
        }

    ]);
    if (option.choices ==="Add Task"){
        await addTask()
    }
    else if (option.choices ==="Update Task"){
        await updateTask()
    }
    else if (option.choices ==="View Todo-list"){
        await viewTask()
    }
    else if (option.choices ==="Delete Task"){
        await deleteTask()
    }
    else if (option.choices ==="Exit"){
        conditions = false;
    }


 }

}
// funtion to add  new task to the list..

let addTask = async () => {
    let newTask = await inquirer.prompt ([
        {
            name : "task",
            type: "input",
            message :chalk.bgBlueBright("Enter your new task:")
        }
    ]);
    todoList.push(newTask.task);
    console.log (chalk.bgMagentaBright(`\n ${newTask.task},Task added  successfully in  Todo-list`))
}
// funtion to view all todo-list tasks..
let viewTask =async () => {
    console.log ("\n Your todo-list \n");
    todoList.forEach((task,index )  => {
        console.log (`${index + 1}: ${task}`)

})

}
// funtion to delete a task from the list..

let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt ([
        {
            name: "index",
            type: "number",
            message :chalk.redBright("Enter the 'index no.' of the task you want to delete:"),
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1,1)
    console.log (chalk.redBright(`\n ${deletedTask},this task has been deleted successfully from your todo-list.\n\t`))
}

//funtion to update a task..

let updateTask = async () =>{
    await viewTask()
    let updated_task_index = await inquirer.prompt ([
        {
            name: "index",
            type: "number",
            message :chalk.magentaBright("Enter the 'index no.' of the task you want to update:"),
        },
        {
            name: "new_task",
            type: "input",
            message :chalk.bgCyanBright(" Now Enter the new task name: ")
        }
    ]);
todoList[updated_task_index.index - 1] = updated_task_index.new_task
console.log (chalk.bgMagentaBright(`\n Task at 'index no.'${updated_task_index.index - 1} updated successfully[for updated  list check view Todo-List]\n`))

}

main()