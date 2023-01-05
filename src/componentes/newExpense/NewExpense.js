import React, {useState} from 'react'
import './NewExpense.css'
import Form from './Form.js'

function NewExpense (props) {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        SetShowForm(false)
    }

    const [ShowForm, SetShowForm] = useState(false)

    const ShowFormHandler = () => {
        SetShowForm(true)
    }

    const OnClickHandler = () => {
        SetShowForm(false)
    }

    return (
        <div className='new-expense'>
            {!ShowForm && <button onClick={ShowFormHandler}>Add New Expense</button>}}

            {ShowForm &&<Form ClickHandler= {OnClickHandler} onSaveExpenseData={SaveExpenseDataHandler}></Form>}
        </div>
    )
}

export default NewExpense