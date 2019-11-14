import { Ingredient } from './ingredient';

export class Recipe {
    title: string;
    dateCreated: string;
    dateUpdated: string;
    author: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    method: string;
    ingredients: Ingredient[];
}
