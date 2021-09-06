import { Recipe } from "@/models/recipe";

export interface IRepository {
    getId(id: number): Recipe
}