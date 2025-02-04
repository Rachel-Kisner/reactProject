import axios from "axios";
import { makeAutoObservable } from "mobx";

export type Recipe = {
  id: number;
  title: string;
  description: string;
  authorId: number;
  ingredients: [];
  instructions: string;
};
class RecipeStore
{
  recipes: Recipe[] = [];
  selectedRecipe: Recipe | null = null;
  errorMessage: string = "";
  openSnackbar: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async addRecipe(recipe: Omit<Recipe, "id" | "authorId">, authorId: number) {
    try {
      
          const res = await axios.post(
            "http://localhost:3000/api/recipes/",
            { ...recipe },
            { headers: { "user-id": authorId } }
          );
           alert("successful")
    return res;
  }catch (error: any) {
    throw error;
    }
} 
  async getRecipe() {
    try {
      const res = await axios.get("http://localhost:3000/api/recipes");
      this.recipes = res.data;
    } catch (error: any) {
      this.handleError(error)
    }
  }
  
  handleError(error: any) {
    this.openSnackbar = true;
    switch (error.response?.status) {
      case 400:
        this.errorMessage = "Error: Invalid details, try again.";
        break;
      case 401:
        this.errorMessage = "Error: Unauthorized access.";
        break;
      case 500:
        this.errorMessage = "Server error, try again later.";
        break;
      default:
        this.errorMessage = "An unexpected error occurred.";
        break;
    }
  }
  selectRecipe(recipe: Recipe | null) {
    this.selectedRecipe = recipe;
  }
}

export const recipeStore = new RecipeStore();