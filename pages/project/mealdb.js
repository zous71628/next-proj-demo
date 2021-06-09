import style from "./../../styles/mealdb.module.css";
import Head from "next/head";
import mealData from "./meal-data";

export default function mealdb() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
        <title>MealDB</title>
      </Head>
      <div className={style.container}>
        <h1 className={style.title__main}>Meal Finder</h1>
        <div className={style["flex-box"]}>
          <form id="submit" className={style["flex-box"]}>
            <input
              type="text"
              id="search"
              placeholder="Search for meals or keywords"
              className={style.input}
            />
            <button className={style.btn__search} type="submit">
              <i className="fas fa-search" />
            </button>
          </form>
          <button className={style.btn__random} id="random">
            <i className="fas fa-random" />
          </button>
        </div>
        <div id="result-heading" className={style.title__search}>
          <h1>Search Results for ' beef ' :</h1>
        </div>
      </div>
      <div id="meals" className={style.gallery}>
        {mealData.map((meal) => (
          <Meal key={meal.id} name={meal.name} image={meal.image}></Meal>
        ))}
      </div>
    </div>
  );
}

function Meal({ id, image, name }) {
  return (
    <div className={style["gallery-card"]}>
      <img className={style["gallery-card__img"]} src={image} alt={name} />
      <div className={style["gallery-card__details"]} data-mealid={id}>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
