const accountId = 12341234;
let accountName = "House of Spirits";
var accountEmail = "spirits@gmail.com";
accountState = "Chhattisgarh";
let accountCity;

console.log(accountId);
console.table([accountId, accountName, accountEmail, accountState, accountCity]);
console.table({accountId, accountName, accountEmail, accountState, accountCity});

/*
1. The value we define in const keyword cannot be changed further.
2. The value we define in let keyword can be changed further.
3. The value we define in var keyword can be changed it is not recommended to use var keyword, as we have 
issue of block scope & functional scope means if we change it will change the value everywhere where we 
used the var variable with same name.
4. If we just declare let keyword with no value it will store undefined value.
5. if we will not use constant and variable to define any value it will take memory and get stored,
but it is also not recommended.
*/