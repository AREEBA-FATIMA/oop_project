import inquirer from "inquirer";
import chalk from "chalk";
class Friend {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    friends = [];
    addFriend(obj) {
        this.friends.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    console.log(chalk.bold.bgWhite.black("**Welcome Guest**"));
    while (true) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "userInput",
            message: "Ap kis se baat krna pasand karengey...",
            choices: ["Apni Host se", "Kisi Friend se", "Exit"]
        });
        if (ask.userInput === "Apni Host se") {
            console.log("Hello, Mn hun apki host " + chalk.bold.italic.gray("Areeba Fatima"));
            console.log("Sorry, Meri abhi tabiyat sahi nahi he hm baad mn baat krtey hn okay Allah Hafiz");
        }
        else if (ask.userInput === "Kisi Friend se") {
            let friendName = await inquirer.prompt({
                name: "friend",
                type: "input",
                message: "Ap apne kis friend se baat krna chahtey hn janab..."
            });
            let friend = new Friend(friendName.friend);
            persons.addFriend(friend);
            console.log(`Hello, Mn hun ${chalk.bold.italic.grey(friendName.friend)}`);
            console.log("Sorry lekin ap galat time pr aye hn hamari abhi physics ki class shuru honey wali he Sorry, Allah Hafiz");
            console.log(persons.friends);
        }
        else if (ask.userInput === "Exit") {
            console.log("Goodbye! Allah Hafiz.");
            process.exit();
        }
    }
};
programStart(persons);
