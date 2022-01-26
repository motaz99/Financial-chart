import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = ({filteredExpenses}) => {   
  if (filteredExpenses.length === 0){
      return <h2 className='expenses-list__fallback'>No expense to show</h2>
  }
    return (
        <ul className='expenses-list'>
        {filteredExpenses.map(expense => {
      return(
        <ExpenseItem 
          title ={ expense.title }
          amount ={ expense.amount }
          date= { expense.date }
          key= {expense.id}
          />
       )
       })}
        </ul>
    )
}

export default ExpensesList
