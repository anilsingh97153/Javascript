const accountId = 144553;
let accountEmail = "anil@google.com";
var accountPassword = 12345;
accountCity = "Jaipur";
let accountState;

//accountId = 2; // not allowed

// console.log(accountId, accountEmail, accountPassword, accountCity); 

accountEmail = "anil@coding.com";
accountPassword = 224647;
accountCity = "Dehradun"; // not a good and recommended way

/*
Prefer not to use var
because of the issue in block scope and functional scope.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

