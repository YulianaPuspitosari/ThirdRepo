"use strict";
/*
Author: Yuliana Puspitosari
Date: 9-15-2023
Description: Part of assignment #2
Erewhon Mobile charges cellular customers a rate based on the total amount of data used by a customer in the billing period. For simplicity, customers are charge based on which range their total data usage falls within. Note, it is not a cumulative charge; your program will figure out which single range the usage falls into, then calculate the cost based on that range’s cost. 
*/
let readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
//input
let dataUsage= parseFloat(readlineSync.question("Enter data usage (Mb): "));
let extraData= dataUsage - 200;
let flatRate = 20;
//process
let totalCharge = 0;
if (dataUsage < 200){totalCharge = flatRate;}
else if ((dataUsage > 200) && (dataUsage< 500)){totalCharge = flatRate + () }
}   

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
