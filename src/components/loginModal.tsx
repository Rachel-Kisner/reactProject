// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import { TextField, Typography } from '@mui/material';
// import { createContext, createRef, Dispatch, useContext, useReducer, useRef, useState, Provider } from 'react';
// import { Action, reducer, User } from '../user';
// import ShowUser from './showUser';
// import UpdateUser from './updateUser';
// import { api } from '../services/api';
// import { LoginContext } from './Home';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
// };

// const initialState: User = { firstName: '', lastName: '', email: '', address: '', phone: '', id: '' } as User;

// interface LoginModalProps {
//     onClose: () => void;
//     onLoginSuccess: () => void;
// }

// export default function LoginModal({ onClose, onLoginSuccess }: LoginModalProps) {
//     const [isRegister, setIsRegister] = useState<boolean>(false);
//     const [user, userDispatch] = useReducer<React.Reducer<User, Action>>(reducer, initialState);
//     const [emailRef, passwordRef] = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
//     const [isOpen, setIsOpen] = useState(true);
//     const [isLoading, setIsLoading] = useState(false);

//     const [isLogin, setIsLogin] = useContext(LoginContext);

//     const handleSubmit = async () => {
//        console.log("submit");  
//         try {
//             setIsLoading(true)
//             const response = await api.login(emailRef.current!.value, passwordRef.current!.value)
//             if (response?.data) {
//                 console.log(response.data);
//                 setIsOpen(false);
//                 setIsLogin(true);
//                 onClose()
//                 onLoginSuccess();
//             }
//         }
//         catch (error: any) {
//             if (error.response) {
//                 console.log("Error status:", error.response.status);
//                 console.log("Error data:", error.response.data);

//                 switch (error.response.status) {
//                     case 400:
//                         console.log("Bad Request");
//                         break;
//                     case 401:
//                         console.log("Authentication Failed");
//                         break;
//                     case 404:
//                         console.log("User Not Found");
//                         break;
//                     default:
//                         console.log("Unexpected Error:", error.response.status);
//                 }
//             }
//         }
//         finally {
//             setIsLoading(false)
//         }
//     }
//     // const action: Action = {
//     //     type: 'ADD',
//     //     data: {
//     //         firstName: '',
//     //         lastName: '',
//     //         email: emailRef.current!.value,
//     //         address: '',
//     //         phone: '',
//     //         password: passwordRef.current!.value
//     //     }
//     // }
//     // userDispatch(action);

// const handleRegister = () => {
//     setIsRegister(true);
//     setIsOpen(false);
// }

// return (
//     <>
//         <Modal
//             open={!isLogin}
//             onClose={onClose}
//             aria-labelledby="parent-modal-title"
//             aria-describedby="parent-modal-description"
//         >
//             <Box sx={{ ...style, width: 400 }}>
//                 <Typography id="modal-modal-title" variant="h6" component="h2">
//                     Enter details:
//                 </Typography>
//                 <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                     <TextField label="email" inputRef={emailRef} required type='email' />
//                     <TextField label="password" inputRef={passwordRef} sx={{ mt: 2 }} required />
//                     <Button
//                         onClick={() => {
//                             handleSubmit();
//                             setIsLogin(true);
//                         }}
//                         sx={{ mt: 2 }}
//                     >
//                         Login
//                     </Button>
//                     <Button
//                         onClick={() => {
//                             handleRegister();
//                         }}
//                         sx={{ mt: 2 }}
//                     >
//                         Register
//                     </Button>
//                 </Typography>
//             </Box>
//         </Modal>

//         {isLoading && <div>Loading...</div>}

//         {/* {isLogin && <ShowUser />} */}

//         {isRegister && <UpdateUser onClose={() => setIsOpen(false)} isRegister={true} />}
//     </>)

// }
import * as React from 'react';  // מייבאים את React
import Box from '@mui/material/Box';  // מייבאים את Box מ-MUI
import Modal from '@mui/material/Modal';  // מייבאים את Modal מ-MUI
import Button from '@mui/material/Button';  // מייבאים את כפתור מ-MUI
import { TextField, Typography } from '@mui/material';  // מייבאים את שדות הטופס מ-MUI
import { createContext, createRef, Dispatch, useContext, useReducer, useRef, useState } from 'react';  // מייבאים כלים נוספים מ-React
import { Action, reducer, User } from '../user';  // מייבאים את ה-User וה-Action
import { api } from '../services/api';  // מייבאים את ה-API
import { LoginContext } from './Home';  // מייבאים את ה-LoginContext

const style = {  // הגדרת סגנונות המודל
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const initialState: User = { firstName: '', lastName: '', email: '', address: '', phone: '', id: '' } as User;

interface LoginModalProps {  // הגדרת פרופס הקומפוננטה
    onClose: () => void;
    onLoginSuccess: () => void;
}

export default function LoginModal({ onClose, onLoginSuccess }: LoginModalProps) {
    const [isRegister, setIsRegister] = useState<boolean>(false);  // משתנה לניהול מצב רישום
    const [user, userDispatch] = useReducer<React.Reducer<User, Action>>(reducer, initialState);  // reducer לניהול מצב המשתמש
    const [emailRef, passwordRef] = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];  // שימוש ב-refs לטופס
    const [isOpen, setIsOpen] = useState(true);  // משתנה למעקב אחרי מצב פתיחת המודל
    const [isLoading, setIsLoading] = useState(false);  // משתנה למעקב אחרי מצב טעינה

    const [isLogin, setIsLogin] = useContext(LoginContext);  // שימוש בקונטקסט כדי לעדכן את מצב הלוגין

    const handleSubmit = async () => {  // פונקציה לשליחה של פרטי הלוגין
        try {
            setIsLoading(true);
            const response = await api.login(emailRef.current!.value, passwordRef.current!.value);  // קריאה ל-API של לוגין
            if (response?.data) {  // אם התשובה של ה-API תקינה
                setIsOpen(false);  // סוגרים את המודל
                setIsLogin(true);  // מעדכנים את מצב הלוגין
                onClose();  // סוגרים את המודל
                onLoginSuccess();  // קוראים לפונקציה שהתקבלה כ-prop
            }
        }
        catch (error: any) {  // טיפול בשגיאות
            if (error.response) {
                console.log("Error status:", error.response.status);
                console.log("Error data:", error.response.data);

                switch (error.response.status) {
                    case 400:
                        console.log("Bad Request");
                        break;
                    case 401:
                        console.log("Authentication Failed");
                        break;
                    case 404:
                        console.log("User Not Found");
                        break;
                    default:
                        console.log("Unexpected Error:", error.response.status);
                }
            }
        }
        finally {
            setIsLoading(false);  // תמיד מאפסים את מצב טעינה
        }
    }

    const handleRegister = () => {  // פונקציה שמבצע רישום אם המשתמש לא קיים
        setIsRegister(true);
        setIsOpen(false);
    }

    return (
        <Modal
            open={!isLogin}  
            onClose={onClose}  
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Enter details:
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <TextField label="email" inputRef={emailRef} required type='email' />
                    <TextField label="password" inputRef={passwordRef} sx={{ mt: 2 }} required />
                    <Button
                        onClick={() => {
                            handleSubmit();
                            setIsLogin(true);
                        }}
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => {
                            handleRegister();
                        }}
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>
                </Typography>
            </Box>
        </Modal>

        //  { isLoading && <div>Loading...</div> }  // הצגת טקסט "טעינה"

    );
}
