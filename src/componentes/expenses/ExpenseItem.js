import React, { useState } from 'react'
import ExpenseCard from '../UI/ExpenseCard.js'
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js'
import './ExpenseItem.css'

function ExpenseItem (props) {
     const [DefaultTitle, SetTitle] = useState(props.title)

    function ClickHandler () {
        SetTitle ('Updated')
    }

    return (
        <ExpenseCard className="expense-item">
            <ExpenseDate
            date = {props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>
                    {DefaultTitle}
                </h2>
            </div>
            <div className="expense-item__price">
                ${props.amount}
            </div>
            <button onClick={ClickHandler}>
                Change Title
            </button>
        </ExpenseCard>
    )
}

export default ExpenseItem