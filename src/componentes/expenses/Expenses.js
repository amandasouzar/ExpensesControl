import React, {useState} from 'react';
import ExpensesFilter from "../filter/ExpenseFilter.js"
import ExpenseCard from "../UI/ExpenseCard.js"
import ExpenseItem from "./ExpenseItem.js"
import './Expenses.css'


function Expenses (props) {

  const [inputFilter, SetInputFilter] = useState('2020')

  const InputFilterHandle = enteredInputFilter => {
    SetInputFilter(enteredInputFilter)
    console.log(enteredInputFilter);
  }

  return (
  <ExpenseCard className="Expenses">

  <ExpensesFilter select={inputFilter} onInputFilter={InputFilterHandle}></ExpensesFilter>

  <ExpenseItem 
  title = {props.itens[0].title}
  amount = {props.itens[0].amount}
  date = {props.itens[0].date}
  ></ExpenseItem>

  <ExpenseItem 
  title = {props.itens[1].title}
  amount = {props.itens[1].amount}
  date = {props.itens[1].date}
  ></ExpenseItem>

  <ExpenseItem 
  title = {props.itens[2].title}
  amount = {props.itens[2].amount}
  date = {props.itens[2].date}
  ></ExpenseItem>

  <ExpenseItem 
  title = {props.itens[3].title}
  amount = {props.itens[3].amount}
  date = {props.itens[3].date}
  ></ExpenseItem> 
  </ExpenseCard>
  )
}

export default Expenses