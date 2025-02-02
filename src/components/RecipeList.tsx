import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { recipeStore } from "../stores/stores";
import { Alert, Box, CircularProgress, List, ListItemButton, ListItemText, Snackbar } from "@mui/material";
import RecipeDetails from "./RecipeDetails";

const RecipeList = observer(() => {

    const [errorMessage]=useState("")
    const [openSnackbar,setOpenSnackbar]=useState(false)
    
    
    useEffect(() => {
        recipeStore.getRecipe();
    }, []);

    return (
        <>
          <Box sx={{
            width: '100%',
            maxWidth: 300,
            bgcolor: 'background.paper',
            position: 'absolute',
            top: 100,
            right: 0,
          }}>
            <nav >
              <List>
                {Array.isArray(recipeStore.recipes) && recipeStore.recipes.length > 0 ? (
                  recipeStore.recipes.map((recipe) => (
                    <ListItemButton
                      key={recipe.id}
                      onClick={() => recipeStore.selectRecipe(recipe)}
                    >
                      <ListItemText primary={recipe.title} sx={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: '#333333' }} />
                    </ListItemButton>
                  ))
                ) : (
                  <CircularProgress />
                )}
              </List>
    
            </nav>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
              <Alert severity="error" variant="filled" sx={{ width: '100%' }} onClose={() => setOpenSnackbar(false)}>
                {errorMessage}
              </Alert>
            </Snackbar>
          </Box>
          <RecipeDetails />
        </>
      );
})
export default RecipeList