import React from 'react'
import { decrement, incByAmount, increment, selectCount, incAsync } from './counterSlice'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'

const Counter = () => {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incAmount] = useState('2')


    return (
        <div className="counter">
            <h3>Counter: {count}</h3>
            <br />
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incByAmount(Number(incAmount) || 1))}>Increment by {incAmount}</button>
            <button onClick = {() => dispatch(incAsync(Number(incAmount) || 1))}>Async increment by {incAmount}</button>
        </div>
    )
}

export default Counter
