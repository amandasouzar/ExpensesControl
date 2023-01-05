import React from 'react'
import ExpenseCard from '../UI/ExpenseCard.js'
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js'
import './ExpenseItem.css'

function ExpenseItem (props) {

    return (
        <li>
        <ExpenseCard className="expense-item">
            <ExpenseDate
            date = {props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>
                    {props.title}
                </h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
        </ExpenseCard>
        </li>
    )
}

export default ExpenseItem