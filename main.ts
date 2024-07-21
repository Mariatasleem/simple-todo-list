#! /usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk";
let todos = [];
let condition = true;


while (condition)
    {let addTask = await inquirer.prompt(
      [
        {
         name:'todo',
         type:'input',
         message:chalk.blue.bold("what you want to add in your Todos ?") 
        },

        {
         name: 'addMore',
         type: 'confirm',
         message: chalk.green.bold("Do you want to add more ?"),
         default: "false"
        }    
       ]
      );
      todos.push(addTask.todo);
      condition = addTask.addMore
      console.log(todos)
    }