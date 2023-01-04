import ExpenseItem from "./ExpenseItem.js"
import './Expenses.css'

function Expenses (props) {
    return (
    <div className="Expenses">
      <h2>Let's get started!</h2>
      <ExpenseItem 
      title = {props.title}
      amount = {props.amount}
      date = {props.date}
      ></ExpenseItem>

        <ExpenseItem 
      title = {props.title}
      amount = {props.amount}
      date = {props.date}
      ></ExpenseItem>

        <ExpenseItem 
      title = {props.title}
      amount = {props.amount}
      date = {props.date}
      ></ExpenseItem>

      <ExpenseItem 
      title = {props.title}
      amount = {props.amount}
      date = {props.date}
      ></ExpenseItem>
    </div>
    )
}

export default Expenses