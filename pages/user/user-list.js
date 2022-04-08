import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../common/style/table.module.css'

const Table = ({columns, colspan, data}) => {
    return(
        <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                    {columns.map((column) => 
                        <th key={column} className={styles.td}>{column}</th>
                    )} 
                </tr>
            </thead>
            <tbody>
                { data.length == 0 ? <tr className={styles.tr}>
                                     <td colSpan={colspan} className={styles.td}>데이터가 없습니다.</td>
                                     </tr>
                :data.map((user) => (
                    <tr className={styles.tr} key={user.username}>
                        <td className={styles.td}>{user.username}</td>
                        <td className={styles.td}>{user.password}</td>
                        <td className={styles.td}>{user.name}</td>
                        <td className={styles.td}>{user.telephone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default function Userlist(){
    const columns = ["Username", "Password", "Name", "Telephone"]
    const [data, setData] = useState([])
    const count = data.length
    useEffect(()=>{
        axios.get('http://localhost:5000/api/user/list')
        .then(res=>{setData(res.data.users)})
        .catch(err=>{})
    },[])
    return(<>
        <h1>사용자 목록</h1>
        {count != 0 && <h3>회원수 : { count }명</h3>}
        <div className={styles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)
}