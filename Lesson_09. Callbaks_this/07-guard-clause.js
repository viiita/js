// let withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log('Введите сумму больше нуля!')
//   } else if (amount > balance) {
//     console.log('Недостаточно средств на счету!')
//   } else {
//     console.log('Операция проведена успешно!')
//   }
// }

// Guard Clause
let withdraw = function (amount, balance) {
  if (amount === 0) {
    console.log('Введите сумму больше нуля!')
    return;
  }
  if (amount > balance) {
    console.log('Недостаточно средств на счету!')
    return
  }
  console.log('Операция проведена успешно!')
}



withdraw(1000, 400)