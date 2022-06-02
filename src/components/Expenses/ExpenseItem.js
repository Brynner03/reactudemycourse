import '../../styles/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    const handleClick = () => {
        console.log('Cllicked!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={handleClick} >Change Title</button>
            {/* No Parentheses after handleClick because event will occur on load */}
        </Card>
    )
}

export default ExpenseItem