// Problem: Refactor the following code to use TypeScript types.

// let bankAccount = {
//     money: 2000,
//     deposit(value) {
//         this.money += value;
//     }
// };

// let myself = {
//     name: 'Kevin',
//     bankAccount: bankAccount,
//     hobbies: ['Movies', 'Cooking']
// };

// myself.bankAccount.deposit(3000);

// Answer:
type account = { money: number, deposit: (value: number) => void }
type person  = { name: string, bankAccount: account, hobbies: string[] }

let bankAccount: account = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
}

let myself: person = {
    name: 'Kevin',
    bankAccount: bankAccount,
    hobbies: ['Movies', 'Cooking']
}

myself.bankAccount.deposit(3000);
