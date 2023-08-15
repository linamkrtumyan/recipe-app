import { IRecipe } from "../../types/recipe.types";
import { api } from "./api";

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        // getRecipes: builder.query({
        //     query: () => '/'
        // }),
        createRecipe: builder.mutation<null, IRecipe>({
            query: (recipe) => ({
                body: recipe,
                url: '/',
                method: 'POST'
            }),
            invalidatesTags: () => [{
                type: 'Recipe'
            }]
        })
    })
})

export const {useCreateRecipeMutation} = recipeApi