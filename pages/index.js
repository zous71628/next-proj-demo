import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import style from "./../styles/index.module.scss";

export default function index() {
  return (
    <div>
      <Header></Header>
      <main className={style.main}>
        <section className={style.left}>
          <h1>
            期末報告
          </h1>
          <p>
            再轉學考和期末報告的雙重壓力下，終於做完了。
            老實說，挺有成就感的，但還是希望老師上課能說慢一點，
            這樣也能節省課後複習的時間。
          </p>
          <p>
            原本白天讀轉學考的科目，晚上在學校上課，但是在五月中的時候，疫情爆發，每間學校因應疫情關西，全都改為書審，
            剩下一個月的時間，還好教授這兩學期教我們怎麼寫網頁，讓我的加分項目不用慌張，可以教上學期的自我簡介，再加上這學期的API跟NEXT.JS
            嚷我的資料更豐富了
          </p>

        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
