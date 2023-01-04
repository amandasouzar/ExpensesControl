import ExpenseCard from "./ExpenseCard.js"
import ExpenseItem from "./ExpenseItem.js"
import './Expenses.css'


function Expenses (props) {
    return (
    <ExpenseCard className="Expenses">
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