// Dependencies
// ================================================================
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connection created here
// =================================================================
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	databse: "bamazon"
});

// Test the connection
// =================================================================
connection.connect(function (err) {
	if (err) throw err;
	console.log("Connected as id: " + connection.threadId);
	// run the function that makes the table of stuff for sale
	console.log("\n===========================================================\n");
	makeTable();
});

var makeTable = function () {
	console.log("\n===========================================================\n");
	// set out the query string
	queryString = "SELECT * FROM bamazon.products";
	// set out the connection query function and the callback.
	connection.query(queryString, function (err, res) {
		if (err) throw err;
		// callback is to loop through everything and display everything
		for (i = 0; i < res.length; i++) {
			console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");
		}
		promptCustomer(res);
	})
}

// set out the promt customer function
var promptCustomer = function (res) {
	inquirer.prompt([{
		type: "input",
		name: "choice",
		message: "What would you like to buy?"
	}]).then(function (answer) {
		var correct = false;
		for (i = 0; i < res.length; i++) {
			if (res[i].product_name === answer.choice) {
				correct = true;
				var product = answer.choice;
				var id = i;

				// then set out how many they would like to buy
				inquirer.prompt([{
					type: "input",
					name: "quantity",
					message: "How many do you want to buy?",
					validate: function (value) {
						if (isNaN(value) === false) {
							return true;
						} else {
							return false;
						}
					}
				}]).then(function (answer) {
					if ((res[id].stock_quantity - answer.quantity) > 0) {

						var first = res[id].stock_quantity - answer.quantity;

						connection.query("UPDATE bamazon.products SET stock_quantity = ? WHERE product_name = ?",
						[first,product], function () {
							console.log("\nYou bought the product!");
							// console.log(product);
							// console.log(res[id]);
							// console.log(res[id].stock_quantity);
							// console.log(answer.quantity);
							// console.log(res[id].stock_quantity - answer.quantity);
							makeTable();
							console.log("\nYour total for this purchase was: $" + (res[id].price) * (answer.quantity)) + " \n";
							console.log("=======================================================================================");
						})
					} else {
						console.log("Not a valid selection! We don't have that many. Please choose something else.");
						promptCustomer();
					}
				})

				
			} 
		}
	})
}