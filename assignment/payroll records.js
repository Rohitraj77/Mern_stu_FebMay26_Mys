// // Payroll records
// const employees = [
//   { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
//   { name: "Raj", basePay: 25000, bonus: 1500, taxRate: 0.08 },
//   { name: "Kiran", basePay: -20000, bonus: 1000, taxRate: 0.1 },   // invalid basePay
//   { name: "Meena", basePay: 28000, bonus: -500, taxRate: 0.12 },   // invalid bonus
//   { name: "Arun", basePay: 35000, bonus: 2500, taxRate: 1.2 }      // invalid taxRate
// ];

// // 1. Filter valid records
// const validRecords = employees.filter(emp =>
//   emp.basePay > 0 &&
//   emp.bonus >= 0 &&
//   emp.taxRate >= 0 &&
//   emp.taxRate <= 1
// );

// // 2. Create netPayReport using map
// const netPayReport = validRecords.map(emp => {
//   const gross = emp.basePay + emp.bonus;
//   const netPay = gross - (gross * emp.taxRate);

//   return {
//     name: emp.name,
//     netPay: netPay
//   };
// });

// // 3. Calculate totalNetPayout using reduce
// const totalNetPayout = netPayReport.reduce((total, emp) => {
//   return total + emp.netPay;
// }, 0);

// // 4. Print results
// console.log("Valid Records:", validRecords);
// console.log("Net Pay Report:", netPayReport);
// console.log("Total Net Payout:", totalNetPayout);


let employee = [{ name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
                { name: "Gangasandra", basePay: -2000, bonus: 7000, taxRate: 0.1 },
                { name: "Rani", basePay: 70000, bonus: 4000, taxRate: 0.4 },
                { name: "Dinga", basePay: 45000, bonus: 3200, taxRate: 0.2 },
                { name: "Dingi", basePay: 74000, bonus: 1750, taxRate: 10 }
]

let invalidRecords = employee.filter(emp => emp.basePay>0 && emp.bonus>=0 && emp.taxRate>=0 && emp.taxRate<=1);

// 2. Create netPayReport using map
const netPayReport = invalidRecords.map(emp => {
  const gross = emp.basePay + emp.bonus;
  const netPay = gross - (gross * emp.taxRate);

  return {
    name: emp.name,
    netPay: netPay
  };
});

// 3. Calculate totalNetPayout using reduce
const totalNetPayout = netPayReport.reduce((total, emp) => {
  return total + emp.netPay;
}, 0);

// 4. Print results
console.log("Valid Records:", invalidRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);