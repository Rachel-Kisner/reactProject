import LoginModal from './loginModal';
import { createContext, Dispatch, SetStateAction, useReducer, useState } from 'react';
import { User, Action } from '../user';
import { reducer } from '../user';
import ShowUser from './showUser';
import { Button } from '@mui/material';
import UpdateUser from './updateUser';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

// יצירת הקונטקסט
export const userContext = createContext<[User, Dispatch<Action>]>([
    {} as User,
    () => { },
]);

export const LoginContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
    false,
    () => { },
]);

export default function Home() {

    // הגדרת משתני State
    const [showModal, setShowModal] = useState(false);
    const [isregister, setIsRegister] = useState(false);
    

    // הגדרת מצב התחלתי למשתמש
    const initialState: User = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        id: ''
    } as User;

    // שימוש ב-reducer לניהול מצב המשתמש
    const [user, userDispatch] = useReducer<React.Reducer<User, Action>>(reducer, initialState);

    // הגדרת משתני State חדשים
    const [isLogin, setIsLogin] = useState(false);
    return (
        <userContext.Provider value={[user, userDispatch]}>
            <LoginContext.Provider value={[isLogin, setIsLogin]}>

                <div>
                    {isLogin ? (
                        <div style={{ position: "fixed", top: "15px", left: "30px" }}>
                            <ShowUser />
                            <AddRecipe/>
                        </div>
                    ) : (
                        <>
                            <Button onClick={() => setShowModal(true)}>
                                Login
                            </Button>
                            {showModal && (
                                isregister ?
                                    <UpdateUser onClose={() => setShowModal(false)} isRegister={true} /> :
                                    <LoginModal
                                        onClose={() => setShowModal(false)}
                                        onLoginSuccess={() => setIsLogin(true)} // הוספת prop חדש
                                    />
                            )}
                        </>
                    )}
                    <RecipeList />
                </div>
            </LoginContext.Provider>
        </userContext.Provider>
    );
}

 
