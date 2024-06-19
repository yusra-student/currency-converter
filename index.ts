import inquirer from"inquirer"


const currency:any ={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    IMR:74.57,
    PKR:280
};

let user_answer:any = await inquirer.prompt([
    {
        name:'from',
        message:"ENTER FROM currency",
        type:'list',
        choices:['USD','EUR','GBP','IMR','PKR']
    },
    {
        name:'TO',
        message:"ENTER TO currency",
        type:'list',
        choices:['USD','EUR','GBP','IMR','PKR']
    },
    {
        name:"amount",
        message:"enter your amount",
        type:"number"
    }

]
)


let fromAmount =currency [user_answer.from]
let toAmount =currency[user_answer.to]
let amount = user_answer.amount
let baseAmount =amount / fromAmount //usd base currency
let convertedAmount =baseAmount * toAmount
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
console.log(convertedAmount);
console.log(user_answer);






