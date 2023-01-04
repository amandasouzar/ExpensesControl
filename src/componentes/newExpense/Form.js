import React, {useState} from 'react';
import './Form.css'

function Form() {
    const [NoTitle, SetNoTitle] = useState('')
    const [NoAmount, SetNoAmount] = useState('')
    const [NoDate, SetNoDate] = useState('')

    const titleChangeHandler = (event) => {
        SetNoTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        SetNoAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        SetNoDate(event.target.value)
    }

    const SubmitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: NoTitle,
            amount: NoAmount,
            date: new Date(NoDate)
        }

        console.log(expenseData);

        SetNoTitle('')
        SetNoAmount('')
        SetNoDate('')
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={NoTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={NoAmount} onChange={amountChangeHandler} min="0.01" step="0.01"></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={NoDate} onChange={dateChangeHandler} min='2019-01-01' max="2023-12-31"></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default Form