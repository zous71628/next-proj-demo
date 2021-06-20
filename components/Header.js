import style from "./../styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div className={style.head}>
        <nav className={style.navbar}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/project">mealdb</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
