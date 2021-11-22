import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [cocktail, setCocktail] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}${id}`);

      const { drinks } = await response.json();

      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];

        const igredient = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          glass,
          category,
          instructions,
          igredient,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <h2>{id}</h2>
        <Loading />
      </>
    );
  }
  if (!cocktail) {
    return <h2 className="section-title">No Cocktail to display</h2>;
  }
  const { name, image, info, glass, category, instructions, igredient } =
    cocktail;

  return (
    <section class="section cocktail-section">
      <Link className="btn btn-primary" to="/">
        back home
      </Link>

      <h2 class="section-title">{name}</h2>
      <div class="drink">
        <img src={image} alt="Egg Cream" />
        <div class="drink-info">
          <p>
            <span class="drink-data">name :</span> {name}
          </p>
          <p>
            <span class="drink-data">category :</span> {category}
          </p>
          <p>
            <span class="drink-data">info :</span> {info}
          </p>
          <p>
            <span class="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span class="drink-data">instructons :</span>
            {instructions}
          </p>
          <p>
            <span class="drink-data">ingredients :</span>
            {igredient.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
