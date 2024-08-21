import React, { useState } from 'react'
import './Count.css'

const Count = () => {

    const [count,setCount] = useState(0)

    const handleIncrement=()=>{
       setCount(count+1)
    }
    const handleReset = ()=> {
        setCount(0)
    }
    const handleDecrement=()=>{
        setCount(count-1)
    }

  return (
    <div>
        <p className='count'>{count}</p>
        <div>
 <button className="incre"onClick={handleIncrement}>Increment</button>
 <button className="reset"onClick={handleReset}>reset</button>
 <button className="decre"onClick={handleDecrement}>Decrement</button>
        </div>
    </div>

  )
}

export default Count