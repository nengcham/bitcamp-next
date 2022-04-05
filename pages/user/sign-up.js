import axios from "axios"
import { useState } from "react"

export default function SignUp(){
    const [inputs, setInputs] = useState({})

    const handleChange = e =>{
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name]: value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        alert(`넘어가는 JSON : ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/user/sign-up', inputs)
        .then(res =>{
            alert(`넘어온 JSON : ${JSON.stringify(res.data)}`)
            const signUp = res.data
            document.getElementById('result-span').innerHTML =`
            <h3>${signUp.name}님 회원가입을 축하합니다!</h3>
            `
        })
        .catch(err=>{alert.err})
    }

    return(<>
        <h1>회원가입 폼</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label><b>사용자 ID</b></label><br />
            <input type="text" name="id" onChange={handleChange}/><br />

            <label><b>비밀번호 </b></label><br />
            <input type="text" name="password" onChange={handleChange}/><br />

            <label><b>이름</b></label><br />
            <input type="text" name="name" onChange={handleChange}/><br />

            <label><b>전화번호</b></label><br />
            <input type="text" name="phone" onChange={handleChange}/><br />

            <button>전송</button><button>취소</button>
        </div>
        <div><span id="result-span"></span></div>
        </form>
    </>)
}