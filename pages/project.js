import Header from "./../components/Header";
import Footer from "./../components/Footer";
import style from "./../styles/project.module.scss";
import Link from "next/link";

export default function resume() {
  return (
    <div>
      <Header></Header>
      <main className={style.project}>
        <div className={style.box}>
          <div>
            <a href="./project/mealdb">
              <img src="/img/mealdb.jpg" className={style.img} alt="..." />
            </a>
          </div>

        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
