import { useState } from 'react'
import { Increment } from './Increment'
// JSX = JavaScript and XML
export default function Counter() {
    // Hook
    const [count, setCount] = useState(0)
    const [inc, setInc] = useState(1)

    return <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + inc)}>+</button>
        <button onClick={() => setCount(count - inc)}>-</button>
        <Increment increment={inc} setIncrement={setInc} />
    </div>
}