import Nav from "./Nav";
import styles from "common/style/Layout.module.css"
import Footer from "./Footer";
export default function Layout({ children }){
  return (
    <>
    <Nav/>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer/>
    </>
  );
};