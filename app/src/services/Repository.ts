import { Recipe } from "@/models/recipe";
import { IRepository } from "./IRepository";

export class TestRepository implements IRepository {
    getId(id: number): Recipe {
        return {
            author : "John Smith",
            cookTime : "PT1H",
            datePublished : new Date("2009-05-08"),
            description : "This classic banana bread recipe comes from my mom -- the walnuts add a nice texture and flavor to the banana bread.",
            image : "bananabread.jpg",
            recipeIngredient : [
                "3 or 4 ripe bananas, smashed",
                "1 egg",
                "3/4 cup of sugar"
            ],
            name : "Mom's World Famous Banana Bread",
            prepTime : "PT15M",
            recipeInstructions : "Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.",
            recipeYield : "1 loaf",
            suitableForDiet : "https://schema.org/LowFatDiet"
        } as Recipe
    } 
}