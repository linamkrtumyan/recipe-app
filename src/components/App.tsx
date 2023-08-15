import { useState } from "react";
import RecipeItem from "./recipe-item/RecipeItem";
import Header from "./header/Header";
import User from "./user/User";
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryTerm, setQueryTerm] = useState("");

  const { isLoading, data } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  // // conditional api call
  // const userID = 1

  // const { isLoading, data } =
  // useGetRecipesQuery(undefined, {
  //   skip: !userID
  // });

  return (
    <section>
      <Header />
      {/* <User /> */}
      <div style={{ display: "flex" }}>
        <CreateRecipe />
        <div>
          <div>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter search term"
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>

      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  );
}

export default App;
