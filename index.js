#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([{
            type: "input",
            name: "task",
            message: "Enter your task"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more tasks?",
            default: true
        },
        {
            type: "confirm",
            name: "delete",
            message: "Do you want to delete a task?",
            default: false
        },
        // {
        // //     type:"confirm",
        // //     name:"updatetask",
        // //     message:"Do you want to update a task?",
        // //     default:true
        // // }
    ]);
    if (addTask.addmore || addTask.task) {
        todo.push(addTask.task);
    }
    else if (addTask.delete) {
        let deleteTask = await inquirer.prompt([{
                type: "list",
                name: "task",
                message: "Select the task you want to delete",
                choices: todo
            }]);
        todo.splice(todo.indexOf(deleteTask.task), 1);
    }
    // else if(addTask.updatetask){
    //     let updateTask=await inquirer.prompt([{
    //         type:"list",
    //         name:"task",
    //         message:"Select the task you want to update",
    //         choices:todo
    //         }])
    //         let updateTask2=await inquirer.prompt([{
    //             type:"input",
    //             name:"task",
    //             message:"Enter the updated task"
    //             }])
    //             todo.splice(todo.indexOf(updateTask.task),1,updateTask2.task)
    //       }
    //     if todo empty then print plese insert value
    if (todo.length === 0) {
        console.log("Please add a task.");
    }
    else {
        console.log(todo);
    }
    condition = addTask.addmore;
}
for (let i = 0; i < todo.length; i++) {
    console.log(todo[i]);
}
