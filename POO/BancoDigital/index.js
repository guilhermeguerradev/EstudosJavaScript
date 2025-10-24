const App = require("./App")

App.createUser("Guilherme Guerra", "guilhermeguerra@gmail.com")
App.createUser("Maria Eline Muniz", "mariaeline@gmail.com")
App.createUser("Patricia Guerra", "patriciaguerra@gmail.com")

App.makeDeposity("guilhermeguerra@gmail.com", 1000)

App.makeTransfer("guilhermeguerra@gmail.com", "mariaeline@gmail.com", 500)

App.takeLoan("patriciaguerra@gmail.com" , 250 , 12)


console.log(App.findUser("guilhermeguerra@gmail.com"))
console.log(App.findUser("guilhermeguerra@gmail.com").account)
console.log(App.findUser("mariaeline@gmail.com"))
console.log(App.findUser("mariaeline@gmail.com").account)
console.log(App.findUser("patriciaguerra@gmail.com"))
console.log(App.findUser("patriciaguerra@gmail.com").account)
console.log(App.findUser("patriciaguerra@gmail.com").account.getLoans()[0].getInstallments())