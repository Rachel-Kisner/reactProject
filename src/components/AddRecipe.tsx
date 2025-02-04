import { Modal, Box, TextField, Button, Snackbar, Alert } from '@mui/material';
import { useState, useContext } from 'react';
import { userContext } from './Home';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { recipeStore } from '../stores/stores';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
const recipeSchema = yup.object().shape({
    title: yup
        .string().required('Title is required').min(2, 'Title must be at least 2 characters'),
    description: yup
        .string().required('A description must be entered').min(10, 'The description must be at least 10 characters long'),
    ingredients: yup
        .string().required('Ingredients are required').min(1, 'At least one ingredient is required'),
    instructions: yup
        .string().required('Instructions are required').min(10, 'Instructions must be at least 10 characters'),
});
type RecipeFormInputs = {
    title: string;
    description: string;
    ingredients: string;
    instructions: string;
};
const AddRecipe = () => {
    const [errorMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();
    const [user] = useContext(userContext);
    if (!user) { throw new Error('Your Component must be used within a UserProvider'); }
    const [open, setOpen] = useState(true);
    const { register, formState: { errors }, handleSubmit } = useForm<RecipeFormInputs>({
        resolver: yupResolver(recipeSchema)
    });
    const onSubmit: SubmitHandler<RecipeFormInputs> = async (data: any) => {
        const formattedData = { ...data, ingredients: data.ingredients.split('\n').map((ingredient: any) => ingredient.trim()) };
        await recipeStore.addRecipe(formattedData, user.id);
        setOpen(false);
        navigate(-1);
    };
    return (
        <>
            <Modal open={open} onClose={() => { setOpen(false); navigate(-1) }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        padding: 2,
                        width: 300,
                        backgroundColor: 'white',
                        borderRadius: 1,
                        boxShadow: 24,
                        zIndex: 1300,
                    }}
                >
                    <TextField
                        label="Title" fullWidth
                        margin="normal"
                        {...register('title')}
                        error={!!errors.title}
                        helperText={errors.title?.message}
                    />
                    <TextField
                        label="Description" fullWidth
                        margin="normal"
                        {...register('description')}
                        error={!!errors.description}
                        helperText={errors.description?.message}
                        multiline rows={4}
                    />
                    <TextField
                        label="Ingredients (one per line)" fullWidth
                        margin="normal"
                        {...register('ingredients')}
                        error={!!errors.ingredients}
                        helperText={errors.ingredients?.message}
                        multiline rows={5}
                    />
                    <TextField
                        label="Instructions" fullWidth
                        margin="normal"
                        {...register('instructions')}
                        error={!!errors.instructions}
                        helperText={errors.instructions?.message}
                        multiline rows={4}
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#C4A36D', color: 'white' }} fullWidth>Add Recipe</Button>
                    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                        <Alert severity="error" variant="filled" sx={{ width: '100%' }} onClose={() => setOpenSnackbar(false)}> {errorMessage}</Alert>
                    </Snackbar>
                </Box>
            </Modal>
        </>
    );
};
export default AddRecipe;