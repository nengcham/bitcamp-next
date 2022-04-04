import React, { useState } from "react"

export default function SignIn(){
    const [inputs, setInputs] = useState({})
    const {id, password} = inputs
    const [result, setResult] = useState("")    

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value })
    }
    const handleClick = (e) => {
        e.preventDefault()
        setResult('로그인 되었습니다.')
    }  

    return<>
        <h1>SignIn Form</h1>
            <div>
                <label><b>Username </b></label><br />
                <input type="text" name="id" onChange={handleChange} /><br />
                <label><b>Password </b></label><br />
                <input type="text" name="password" onChange={handleChange} /><br />
                <button onClick={handleClick}>확인</button><br />
                <div>{result}</div>
                <label>
                    <input type="checkbox" /> Remember me
                </label>
            </div>
            <div>
                <button type="">Cancel</button><br />
                <span>Forgot <a href="#">password?</a></span>
            </div>
    </>
}