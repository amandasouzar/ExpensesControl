import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js'
import './ExpenseItem.css'

function ExpenseItem (props) {

    return (
        <div className="expense-item">
            <ExpenseDate
            date = {props.date}></ExpenseDate>
            <div>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
        </div>
    )
}

export default ExpenseItem