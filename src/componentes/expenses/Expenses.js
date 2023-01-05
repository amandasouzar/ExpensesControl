import React, {useState} from 'react';
import ExpensesFilter from "../filter/ExpenseFilter.js"
import ExpenseCard from "../UI/ExpenseCard.js"
import ExpenseList from './ExpenseList.js';
import './Expenses.css'


function Expenses (props) {
  
const [inputFilter, SetInputFilter] = useState('2020')


const InputFilterHandle = (enteredInputFilter) => {
  SetInputFilter(enteredInputFilter)
}      

const FilteredExpenses = props.itens.filter(expense => {
  if (expense.date.getFullYear() == inputFilter) {
        return true
      }
    })

return (

  <ExpenseCard className="Expenses">

  <ExpensesFilter 
  select={inputFilter} 
  onInputFilter={InputFilterHandle}></ExpensesFilter>

 <ExpenseList items = {FilteredExpenses}></ExpenseList>

  </ExpenseCard>
  )
}

export default Expenses