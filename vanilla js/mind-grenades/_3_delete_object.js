var employee = {
  company: "Google",
};

var david = Object.create(employee, { age: { value: 20 } });
david.company = "Microsoft";
delete david.company;

console.log(david.company); // Output -> Google
// delete keyword deletes property only for david but it still has access to property of employee
// 'delete' can't delete 'prototype' properties

console.log(david); // {age: 20}

employee.company = "Microsoft";

console.log(david.company); // Output -> Microsoft
// proof for the delete property above
