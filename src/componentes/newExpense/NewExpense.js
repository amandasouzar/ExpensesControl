import './NewExpense.css'
import Form from './Form.js'

function NewExpense (props) {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <Form onSaveExpenseData={SaveExpenseDataHandler}
            ></Form>
        </div>
    )
}

export default NewExpense