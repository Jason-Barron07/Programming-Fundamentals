// Account balance in South African Rand
let accountBalance: number = 12500.75;

// Loan amount
let loanAmount: number = 50000;

// Annual interest rate (percentage)
let interestRate: number = 11.5;

// Loan term in years
let loanTerm: number = 3;

// Calculate total interest
let totalInterest: number = (loanAmount * interestRate / 100) * loanTerm;

// Total repayment
let totalRepayment: number = loanAmount + totalInterest;

console.log("Total Interest:", totalInterest);
console.log("Total Repayment:", totalRepayment);