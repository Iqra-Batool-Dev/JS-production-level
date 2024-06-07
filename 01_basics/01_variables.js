const accountId= 144533 // redeclaration or reinitialization is not allowed with const Keyword
let accountEmail = "iqra@gmail.com" // reinitialiazation is allowed with let keyword
var accountPasword = "12362" // Prefer not to use var keyword becuase of issue in block scope and functional scope
accontCity = "Faisalabad"
let accountState

console.log(accountPasword);

console.table([accountEmail, accountId, accountPasword, accontCity, accountState])
console.group([accountEmail, accountId, accountPasword])
console.log(accountEmail, accountId, accountPasword, accontCity)