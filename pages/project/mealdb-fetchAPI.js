import style from "./../../styles/mealdb.module.css";
import Head from "next/head";
import mealData from "../../meal-data";
import { useState } from "react";
import Header2 from "../../components/Header2";
import Footer2 from "../../components/Footer2";

export default function mealdb() {
  const [input, setInput] = useState("");
  const [mealData, setMealData] = useState([]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .catch((error) => console.error("Error", error))
      .then((res) => {
        console.log(res);
        setMealData(res.meals);
      });
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
        <title>MealDB</title>
      </Head>
      <Header2 />
      <div className={style.container}>
        <h1 className={style.title__main}>Meal Finder</h1>
        <div className={style["flex-box"]}>
          <form id="submit" className={style["flex-box"]}>
            <input
              type="text"
              value={input}
              placeholder="Search for meals or keywords"
              className={style.input}
              onChange={handleInput}
            />
            <button
              className={style.btn__search}
              type="submit"
              onClick={handleSubmit}
            >
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
          <Meal
            key={meal.idMeal}
            name={meal.strMeal}
            image={meal.strMealThumb}
          ></Meal>
        ))}
      </div>
      <Footer2></Footer2>
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
