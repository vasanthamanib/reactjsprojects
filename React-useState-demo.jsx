//apply useContext to get state and action from Context




import React,{useState} from 'react';

function React_useState_demo() {
    const [count, setCount] = useState(0);
    
    const handleChangeIncrement = () =>{
        setCount(count => count + 1)
    };

    const handleChangeDecrement = () =>{
       setCount(count => count - 1)
    };

    const reset = () => {
        setCount(0);
    }
    return (
       
        <div>
             <span>{count}</span>
            <button onClick = {handleChangeIncrement}>+</button>
            <button onClick = {handleChangeDecrement}>-</button>
            <button onClick = {reset}>Reset</button>
        </div>
    )
}

export default React_useState_demo
