import React, {useState} from 'react'

import '../../styles/ExpenseForm.css'

const ExpenseForm = () => {
    
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    
    // const[userInput, setUserInput] = useState({
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: ''
        // })
        
        const titleChangeHandler = (event) => {
            setEnteredTitle(event.target.value)
            // setUserInput({
                //     ...userInput,
                //     enteredTitle: event.target.value,
                // })
            }
            const amountChangeHandler = (event) => {
                setEnteredAmount(event.target.value)
                // setUserInput({
                    //     ...userInput,
                    //     enteredAmount: event.target.value
                    // })
                }
                const dayChangeHandler = (event) => {
                    setEnteredDate(event.target.value)
                
                    // setUserInput({
                        //     ...userInput,
                        //     enteredDate: event.target.value
                        // })
                        // Whenever you update State and depend on the previous state, you should not use it like this, call it as a function.
                        // React schedules state. Scheduling a lot at the same time is not ideal because you may depend on an outdated/incorrect state snapshot 
                        // With this new approach, react makes sure that your state will always be the latest. Keeping all scheduled state update in mind 
                        // setUserInput((prevState) => {
                            //     return { ...prevState, enteredTitle: event.target.value }
                            // })
                }
                // Saving the value stored in the data
            const submitHandler = (event) => {
                    event.preventDefault()

                    const expenseData = {
                        title: enteredTitle,
                        amount: enteredAmount,
                        date: new Date(enteredDate)
                    }
                    console.log(expenseData)
                }
  return (
    <form onSubmit={submitHandler} >
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31' onChange={dayChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm