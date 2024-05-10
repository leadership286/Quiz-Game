#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright("Welcome to Quiz Game"));
async function startQuiz() {
    const { name } = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: chalk.green("Dear User, Please Enter Your Name:")
        }
    ]);
    console.log(chalk.yellow(`Hello, ${name}! Let's start the quiz.`));
    // Define your quiz questions and answers
    const questions = [
        {
            question: "What is the Capital of Pakistan?",
            choices: ['Lahore', 'Karachi', 'Islamabad'],
            answer: "Islamabad"
        },
        {
            question: "Who is the Founder of Pakistan?",
            choices: ['Allama Iqbal', 'Quaid e Azam', 'Sir Syed Ahmed Khan'],
            answer: "Quaid e Azam"
        },
        {
            question: "What is the National Game of Pakistan?",
            choices: ['Hockey', 'Cricket', 'Football'],
            answer: "Hockey"
        },
        {
            question: "What is the National Flower of Pakistan?",
            choices: ['Rose', 'Tulip', 'Jasmine'],
            answer: "Jasmine"
        },
        {
            question: 'What is the National Fruit of Pakistan?',
            choices: ['Apple', 'Mango', 'Orange'],
            answer: "Mango"
        },
        {
            question: "What is the National Drink of Pakistan?",
            choices: ['Orange Juice', 'Banana Juice', 'Sugarcane Juice'],
            answer: 'Sugarcane Juice'
        },
        {
            question: "What is the National Language of Pakistan?",
            choices: ['Sindhi', 'Urdu', 'English'],
            answer: 'Urdu'
        },
        {
            question: "What is the National Animal of Pakistan?",
            choices: ['Camel', 'Markhor', 'Horse'],
            answer: 'Markhor'
        },
        {
            question: "Who is the National Poet of Pakistan?",
            choices: ['Ghalib', 'Allama Iqbal', 'Shah Abdul latif'],
            answer: 'Allama Iqbal'
        },
        {
            question: "What is the National Vegetable of Pakistan?",
            choices: ['Lady Finger', 'Carrot', 'Cabbage'],
            answer: 'Lady Finger'
        }
    ];
    let score = 0;
    // Iterate through each question and prompt the user
    for (const { question, choices, answer } of questions) {
        const { userAnswer } = await inquirer.prompt([
            {
                name: "userAnswer",
                type: "list",
                message: chalk.cyanBright(question),
                choices: choices.map(choice => ({
                    name: choice,
                    value: choice
                }))
            }
        ]);
        // Check if the user's answer is correct
        if (userAnswer === answer) {
            console.log(chalk.green("Correct!"));
            score++;
        }
        else {
            console.log(chalk.red("Incorrect!"));
            console.log(chalk.yellow(`The correct answer is: ${chalk.green(answer)}.`));
        }
    }
    console.log(chalk.yellow(`Quiz completed! Your score: ${score}/${questions.length} and Thanks for Playing.`));
}
startQuiz();
