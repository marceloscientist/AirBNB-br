let person = {
  name: 'Marcelo',
  cc: 1234
}

let operations = {
  saque: (saldo, value) => saldo -= value,
  deposito: (saldo, value) => saldo += value 
}

let temp = 20

let bank = {
  person,
  operations, 
  saldo: 50
}

console.log(`
    ${bank.person.name} da conta ${bank.person.cc}: 
    Tinha um saldo de ${bank.saldo};
    Mas, acabou de efetuar um saque de ${temp}.
    Seu saldo atual é de ${bank.operations.saque(bank.saldo, temp)} 
`)