import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'


const Expenses = ({expenses}) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return(
    <div>
     <Card className="expenses">
     <ExpensesFilter
       defaultYear={filteredYear} 
       onChangeFilter= {filterChangeHandler} />
       <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    </div>
    )
};

export default Expenses;