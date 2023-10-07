"use strict";
/*
Author: Yuliana Puspitosari
Date: 9-15-2023
Description: Part of assignment #2
First, create a flowchart that clearly shows all of the paths of execution that will exist within your designed solution to this problem. Then, write a console application that will input the sex and price of vehicle, and then output the corresponding monthly insurance amount. 
Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (decision structures).

*/
let readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
//input
let gender= readlineSync.question("Are you 'Male' or 'Female': ").toLowerCase();
let age= parseFloat(readlineSync.question("Enter your age: "));
let vehiclePrice= parseFloat(readlineSync.question("Enter the purchase of the vehicle: "));

//process
let monthlyInsurance = 0;
if ((gender == "Male")&&(age > 15)&& (age < 25)){monthlyInsurance = (vehiclePrice * 0.25) / 12;
}
else if ((gender == "Male")&&(age > 25) && (age < 40)){monthlyInsurance = (vehiclePrice * 0.17) / 12;}
else if ((gender == "Male") &&(age > 40) && (age < 70)){monthlyInsurance = (vehiclePrice * 0.10) / 12;
};

if ((gender == "Female") &&(age > 15) && (age < 25)){monthlyInsurance = (vehiclePrice * 0.20) / 12;
}
else if ((gender == "Female") &&(age > 25) && (age < 40)){monthlyInsurance = (vehiclePrice * 0.15) / 12;}
else if ((gender == "Female") &&(age > 40) && (age < 70)){monthlyInsurance = (vehiclePrice * 0.10) / 12;
}

//output
console.log(`Your monthly insurance will be $${monthlyInsurance}`);



}   

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
