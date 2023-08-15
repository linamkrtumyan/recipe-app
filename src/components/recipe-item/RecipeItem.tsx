import React from 'react'
import styles from './RecipeItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../store/favorites/favorites.slice'
import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IRecipe } from '../../types/recipe.types'

interface IRecipeItem {
  recipe: IRecipe
}

function RecipeItem({recipe}: IRecipeItem) {

    const {favorites} = useFavorites()
    console.log(favorites,'favorites')

    const {toggleFavorites} = useActions()

    const isExists = favorites.some(r => r.id === recipe.id)

  return (
    <div className={styles.item} >
        <img src={recipe.image} alt={recipe.name} width={200} />
        <h3>{recipe.name}</h3>
        <button onClick={() => toggleFavorites(recipe) }> 
        {isExists ? 'Remove from': 'Add to'} favorites
       </button>
    </div>
  )
}

export default RecipeItem