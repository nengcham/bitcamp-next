import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='../basic/counter'>카운터</Link> </li>
        <li className={styles.li}> <Link href='../basic/calc'>계산기</Link> </li>
        <li className={styles.li}> <Link href='../basic/bmi'>Bmi</Link> </li>
        <li className={styles.li}> <Link href='../todo/todo'>투두리스트</Link> </li>
        <li className={styles.li}> <Link href='../board/board'>게시글 등록</Link> </li>
        <li className={styles.li}> <Link href='../board/board-list'>게시글 목록</Link> </li>
        <li className={styles.li}> <Link href='../user/join'>회원가입</Link> </li>
        <li className={styles.li}> <Link href='../user/login'>로그인</Link> </li>
        <li className={styles.li}> <Link href='../user/user-list'>사용자 목록</Link> </li>
      </ul>
    </nav>
  );
};