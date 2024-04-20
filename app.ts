import inquirer from "inquirer";

const currency: any = {
    USD: 1, // Based currency
    EUR: 0.9,
    GBP: 0.79,
    INR: 83.30  ,
    PKR: 277.54,
};

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: "to",
            message: "Enter to Currency",
            type: "list",
            choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        }
        
    ]
)


let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount // USD base currency 
let convertAmount = baseAmount * toAmount
console.log(convertAmount);