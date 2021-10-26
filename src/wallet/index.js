export default function getTotalExpenses(expenses) {
  return expenses.reduce((total, expense) => total + expense, 0);
}
