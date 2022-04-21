import axios from "axios";
import Image from "next/image";
import React, { useEffect  } from 'react';
import tableStyles from './common/style/table.module.css'

export default function Home() {
  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    if(loginUser===null){
      axios.get("http://localhost:5000/api/now").then((res) => {
        var data = res.data;
        document.getElementById("timeZone").innerHTML = '<h1>현재시간: '+data.now+'<h1>'
      });
    }else{
      const currentUser = JSON.parse(loginUser)
      document.getElementById("timeZone").innerHTML = '<h1>환영합니다: '+currentUser.user.name+'<h1>'
    }
  },[]);
  return (
    <table className={tableStyles.table}>
    <thead>
        <tr>
            <th><h2>HOME</h2></th>
        </tr>
    </thead>
    <tbody>
        <tr >
        <td>
        <div id="timeZone"></div></td>
        </tr>
        <td>
        <Image src="/user/main.gif" width="600" height="400"></Image>
        </td>
    </tbody>
  </table>
  )
}