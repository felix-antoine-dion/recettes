export interface Recipe {
    author: string
    cookTime: string
    prepTime: string
    datePublished: Date
    description: string
    image: string
    recipeIngredient: string[]
    interactionStatistic?: object
    name: string
    nutrition?:object
    recipeInstructions: string
    recipeYield?: string
    suitableForDiet?: string
}