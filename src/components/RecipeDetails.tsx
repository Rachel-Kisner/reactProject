import { Typography, Box, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { recipeStore } from '../stores/stores';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RecipeDetails = observer(() => {

    const selectedRecipe = recipeStore.selectedRecipe;
    const location = useLocation();

    useEffect(() => {

        return () => {
            recipeStore.selectedRecipe = null;
        };
    }, [location.pathname]);

    if (!selectedRecipe) {
        return;
    }

    return (
        <div>
            <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Box
                sx={{
                    position: 'absolute',
                    left: '50px',
                    top: '100px',
                    width: '40%',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            >
                <Typography variant="h4" component="div" color='#8B4513' sx={{ marginBottom: '16px' }}>{selectedRecipe.title}</Typography>
                <Typography variant="h6" component="div" color='#C4A36D' sx={{ textDecoration: 'underline', marginBottom: '8px' }}>
                    <b>Ingredients:</b>
                    {Array.isArray(selectedRecipe.ingredients)
                        ? selectedRecipe.ingredients.map((ingredient, index) => (
                            <li key={index} style={{ textAlign: 'left', marginBottom: '8px' }}>
                                {ingredient}
                            </li>
                        ))
                        : selectedRecipe.ingredients}
                </Typography>
                <Typography variant="h6" component="div" color='#C4A36D' sx={{ textDecoration: 'underline', marginBottom: '8px' }}>instructions:</Typography>
                <Typography variant="body1" color='#333333'>{selectedRecipe.instructions}</Typography>
            </Box>
            </Container>
        </div>
    );
})
export default RecipeDetails;