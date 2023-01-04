import './ExpenseCard.css'

function ExpenseCard (props) {
    const classes = 'Card ' + props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default ExpenseCard