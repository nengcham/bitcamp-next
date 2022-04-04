import React, { useState } from "react"

export default function TodoList(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState("")
    const {todo0} = inputs

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value })
    }
    const handleClick = (e) => {
        e.preventDefault()
        setResult(`${todo0}`)
    }
    
    return(
        
    <div>
        <input type="text" placeholder="Add Todo here" name="todo0" onChange={handleChange}></input>
        <button onClick={handleClick}>todo list 생성</button><br/>
        <input type="checkbox"/>
        <label For="todo0">Todo 컴포넌트</label>
        <div>{result}</div>
    </div>
    )
}