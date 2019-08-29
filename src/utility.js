function checkAge(age) {
  if (!this.age)
    return true;

  if (this.age.min && this.age.min >= age)
    return false;
  if (this.age.max && this.age.max <= age)
    return false;

  return true;
}

function checkIncome(income) {

  if (!this.income)
    return true;

  if (this.income.min && this.income.min >= income)
    return false;

  return true;
}

module.exports = {
  checkAge,
  checkIncome
}