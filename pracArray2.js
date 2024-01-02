// Perform different array methods
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// remove the first company from the array
companies.shift();

// remove uber and add ola in its place
companies.splice(1, 1, "Ola");

// Add Amazon at the end
companies.push("Amazon");
console.log(companies);
