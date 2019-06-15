"use strict";
// Problem: Refactor the following code to use TypeScript types.
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Kevin',
    bankAccount: bankAccount,
    hobbies: ['Movies', 'Cooking']
};
myself.bankAccount.deposit(3000);
