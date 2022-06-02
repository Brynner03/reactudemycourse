import React, { useState } from 'react'
import '../../styles/ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('Updated!')
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
            {/* No Parentheses after clickHandler because then event will occur on load */}
        </Card>
    )
}

export default ExpenseItem