"use strict";
/*
Author: Yuliana Puspitosari
Date: 9-15-2023
Description: Part of assignment #2
Program 1 – Landscape Calculator 
A landscaping company needs a program that computes the price of landscaping for a new housing development. Work orders are based on: address, plot length and width in feet, type of grass (“fescue”, “bentgrass” or “campus”), and number of trees. The price is computed as follows:  
•	There is a base labour charge of $1000. 
•	If the surface (length * width) is over 5000 square feet, add $500. 
•	The cost is calculated per square foot. If the grass is “fescue” the cost is $0.05; for “bentgrass” it is $0.02; “campus” is $0.01. 
•	Each tree requested has a $100 charge. 
First, create a flowchart that clearly shows all the paths of execution that will exist within your designed solution to this problem. Write a console application that will input the address, property length and width, type of grass and number of trees, and then output the corresponding price.
Your solution must contain examples demonstrating your understanding of appropriate use of functions and core assignment concepts (decision structures).

*/
let readlineSync = require('readline-sync');
// DO NOT EDIT: The main function to house our program code 
function main()
{
    // input
    let houseNumber= readlineSync.question("Enter House Number: ")
}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
