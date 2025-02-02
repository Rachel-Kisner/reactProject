import { Typography, Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { recipeStore } from '../stores/stores';

const RecipeDetails = observer(() => {

    const selectedRecipe = recipeStore.selectedRecipe;

    if (!selectedRecipe) {
        return (<div>no recipe selected</div>);
    }

    return (
        <div>
            <Box>
                <Typography variant="h4">Recipe Details</Typography>
                <Typography variant="body1">Recipe Name: {selectedRecipe.title}</Typography>
                <Typography variant="h6" component="div" color='#333333'>
                    <b>Ingredients:</b>
                    {Array.isArray(selectedRecipe.ingredients)
                        ? selectedRecipe.ingredients.map((ingredient, index) => (
                            <li key={index} style={{ textAlign: 'left', marginBottom: '8px' }}>
                                {ingredient}
                            </li>
                        ))
                        : selectedRecipe.ingredients}
                </Typography>
                <Typography variant="h6" component="div" color='#C4A36D' sx={{ textDecoration: 'underline', textAlign: 'left', marginBottom: '8px' }}>instructions:</Typography>
                <Typography variant="body1" color='#333333'>{selectedRecipe.instructions}</Typography>
            </Box>
        </div>
    );
})
export default RecipeDetails;