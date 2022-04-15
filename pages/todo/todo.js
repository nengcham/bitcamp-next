import React,{useState} from "react";
import { useDispatch } from 'react-redux'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
import style from '../common/style/table.module.css'

export default function AppTodo() {
  const [inputs, setInputs] = useState({})
  const dispatch = useDispatch()
  const handleChange = e =>{
    e.preventDefault()
    const{name, value} = e.target;
    setInputs({...inputs,[name]: value})
}
  const data = []

  return (
     <div>
      <h1>일정등록</h1>
      <form onSubmit={ e => {
        e.preventDefault()
        alert(' 진행1 버튼클릭 : '+JSON.stringify(inputs))  
        if(inputs) dispatch(todoActions.addRequest(inputs))
      }}>
        <label><b>사용자ID</b></label>
        <input
          type="text"
          id="userid"
          name="userid"
          autoComplete="off"
          onChange={handleChange}
        /><br/>
        <label><b>등록할 일정</b></label>
        <input
          type="text"
          id="task"
          name="task"
          autoComplete="off"
          onChange={handleChange}
        /><br/>
        <label><b>수행여부</b></label>
        <select
          type="text"
          id="completed"
          name="completed"
          autoComplete="off"
          onChange={handleChange}>
          <option value="T">완료함(T)</option>
          <option value="F">진행중(F)</option>
        </select><br/>
        <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <table className={style.table}>
      <thead>
          <tr>
              <th> ### Todo 리스트 ### </th>
          </tr>
      </thead>
      <tbody>
      { data.length == 0 
        ? <tr>
            <td>일정이 없습니다.</td>
          </tr>
        :data.map((todo) => (
            <tr key={todo}>
                <td>
                    <input type="checkbox"/>
                    <a>{todo}</a>
                </td>
            </tr>
          ))}
      </tbody>
  </table>          
    </div>
  );
}