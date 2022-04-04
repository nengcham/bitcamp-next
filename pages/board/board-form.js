import axios from "axios"
import style from "board/style/board-form.module.css"
import { useState } from "react"

export default function BoardhtmlForm(){
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        alert(`데이터셋 출력 : ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/board/write', inputs)
        .then(res => {
            alert(JSON.stringify(res.data))
        })
        .catch(err => alert(err))
    }
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">게시글 작성자 ID</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="passengerId" name="passengerId" onChange={handleChange} placeholder="게시글 작성자 ID 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" className={style.inputText}
                id="name" name="name" onChange={handleChange} placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" name="teamId" onChange={handleChange}>
                    <option value="">응원팀 선택</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  id="subject" name="subject" style={{height:200 + "px"}} onChange={handleChange}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" className={style.inputSubmit}
                value="Submit" onClick={handleSubmit} />
            </div>
            </htmlForm>
            </div>
    </>)
}