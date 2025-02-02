// // import { Modal, Box, Typography, TextField, Button } from "@mui/material";
// // import { useState, useContext, useRef } from "react";
// // import { userContext } from "./Home";
// // import { Action, User } from "../user";
// // import { isOpenBtnContext } from "./showUser";
// // import { api } from "../services/api";

// // const style = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '50%',
// //   transform: 'translate(-50%, -50%)',
// //   width: 400,
// //   bgcolor: 'background.paper',
// //   border: '2px solid #000',
// //   boxShadow: 24,
// //   p: 4,
// // };


// // interface UpdateUserProps {
// //   onClose: () => void;
// //   isRegister: boolean;
// // }

// // export default function UpdateUser({ onClose, isRegister }: UpdateUserProps) {

// //   const [open, setOpen] = useState(true);
// //   const handleClose = onClose;
// //   const [updateBtn, setUpdateBtn] = useContext(isOpenBtnContext)
// //   const [user, userDispatch] = useContext(userContext);
// //   const firstNameRef = useRef<HTMLInputElement>(null);
// //   const lastNameRef = useRef<HTMLInputElement>(null);
// //   const addressRef = useRef<HTMLInputElement>(null);
// //   const passwordRef = useRef<HTMLInputElement>(null);
// //   const emailRef = useRef<HTMLInputElement>(null);
// //   const phonRef = useRef<HTMLInputElement>(null);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const handleSubmit = async () => {
// //     const userSubmit: User = {
// //       firstName: firstNameRef.current!.value,
// //       lastName: lastNameRef.current!.value,
// //       email: emailRef.current!.value,
// //       address: addressRef.current!.value,
// //       phone: phonRef.current!.value,
// //       password: passwordRef.current!.value
// //     }
// //     if (isRegister) {
// //       try {
// //         setIsLoading(true)
// //         const response = await api.register(user);
// //         if (response?.data) {console.log(response.data);}
// //       }
// //       catch (e) {
// //         alert(e);
// //         return;
// //       }
// //       finally {
// //         setIsLoading(false)
// //       }
// //     }
// //     else {
// //       try {
// //         setIsLoading(true)
// //         const response = await api.updateUser(user);
// //         if (response?.data) {console.log(response.data);}
// //       }
// //       catch (e) {
// //         alert(e);
// //         return;
// //       }
// //       finally {
// //         setIsLoading(false)
// //       }
// //     }
// //     const action: Action = {
// //         type: 'UPDATE',
// //         data: userSubmit
// //     }
// //     userDispatch(action);
// //     setUpdateBtn(!updateBtn)
// //     handleClose();
// //   }
// //   return (
// //     <div>
// //       <Modal
// //         open={open}
// //         onClose={handleClose}
// //         aria-labelledby="modal-modal-title"
// //         aria-describedby="modal-modal-description"
// //       >
// //         <Box sx={style}>

// //           <Typography id="modal-modal-title" sx={{ mt: 2 }}>
// //             Please fill in the details below.
// //           </Typography>
// //           <form action="">
// //             <TextField label="first name" defaultValue={user.firstName} inputRef={firstNameRef} sx={{ mt: 2 }} />
// //             <TextField label="last name" defaultValue={user.lastName} inputRef={lastNameRef} sx={{ mt: 2 }} />
// //             <TextField label="password" defaultValue={user.password} inputRef={passwordRef} sx={{ mt: 2 }} />
// //             <TextField label="address" defaultValue={user.address} inputRef={addressRef} sx={{ mt: 2 }} />
// //             <TextField label="phone" defaultValue={user.phone} inputRef={phonRef} sx={{ mt: 2 }} />
// //             <TextField label="email" defaultValue={user.email} inputRef={emailRef} sx={{ mt: 2 }} />
// //             <Button onClick={handleSubmit} style={{ margin: '40px' }}> update </Button>
// //           </form>
// //         </Box>
// //       </Modal>
// //     </div>
// //   )
// // }
// import { Modal, Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
// import { useState, useContext, useRef } from "react";
// import { userContext } from "./Home";
// import { Action, User } from "../user";
// // import { isOpenBtnContext } from "./showUser";
// import { api } from "../services/api";
// import axios from "axios";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// interface UpdateUserProps {
//   onClose: () => void;
//   isRegister: boolean;
// }

// export default function UpdateUser({ onClose, isRegister }: UpdateUserProps) {

//   const [open, setOpen] = useState(true);
//   const handleClose = onClose;
//   const [updateBtn, setUpdateBtn] = useState(false);
//   const [user, userDispatch] = useContext(userContext);
//   const firstNameRef = useRef<HTMLInputElement>(null);
//   const lastNameRef = useRef<HTMLInputElement>(null);
//   const addressRef = useRef<HTMLInputElement>(null);
//   const idRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const phonRef = useRef<HTMLInputElement>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const userSubmit: User = {
//       firstName: firstNameRef.current!.value,
//       lastName: lastNameRef.current!.value,
//       email: emailRef.current!.value,
//       address: addressRef.current!.value,
//       phone: phonRef.current!.value,
//       id: idRef.current!.value
//     };
//     console.log("firstNameRef.current!.value", firstNameRef.current!.value);
//     console.log("lastNameRef.current!.value", lastNameRef.current!.value);
//     console.log("emailRef.current!.value", emailRef.current!.value);
//     console.log("addressRef.current!.value", addressRef.current!.value);
//     console.log("phonRef.current!.value", phonRef.current!.value);
//     console.log("passwordRef.current!.value", idRef.current!.value);


//     try {
//       setIsLoading(true);
//       setError(null); // Resetting any previous errors

//       let response;

//       if (isRegister) {
//         response = await api.register(userSubmit);
//       } else {
//         response = await api.updateUser(userSubmit);
//       }

//       if (response?.data) {
//         console.log(response.data);
//       }

//       const action: Action = {
//         type: 'UPDATE',
//         data: userSubmit
//       };
//       userDispatch(action);
//       setUpdateBtn(!updateBtn);
//       handleClose(); // Close the modal after the operation
//     } catch (e) {
//       console.error("Error: ", e);
//       setError("An error occurred while processing your request.");
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   return (
//     <div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" sx={{ mt: 2 }}>
//             Please fill in the details below.
//           </Typography>

//           {/* Form to update user */}
//           <form >

//             <TextField
//               label="First Name"
//               defaultValue={user.firstName}
//               inputRef={firstNameRef}
//               sx={{ mt: 2 }}
//             />

//             <TextField
//               label="Last Name"
//               defaultValue={user.lastName}
//               inputRef={lastNameRef}
//               sx={{ mt: 2 }}
//             />

//             <TextField
//               label="Id"
//               defaultValue={user.id}
//               inputRef={idRef}
//               sx={{ mt: 2 }}
//               type="number"
//             />


//             <TextField
//               label="Address"
//               defaultValue={user.address}
//               inputRef={addressRef}
//               sx={{ mt: 2 }}
//             />


//             <TextField
//               label="Phone"
//               defaultValue={user.phone}
//               inputRef={phonRef}
//               sx={{ mt: 2 }}
//             />


//             <TextField
//               label="Email"
//               defaultValue={user.email}
//               inputRef={emailRef}
//               sx={{ mt: 2 }}
//             />


//             {/* <TextField
//               label="Email"
//               value={user.email} // משתמשים ב-value כדי לקשר את השדה למשתמש
//               inputRef={emailRef}
//               sx={{ mt: 2 }}
//             /> */}

//             {/* Show error if any */}
//             {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

//             {/* Submit button with loading indication */}
//             <Button
//               onClick={handleSubmit}
//               style={{ margin: '40px' }}
//               disabled={isLoading}
//             >
//               {isLoading ? <CircularProgress size={24} /> : 'Update'}
//             </Button>
//           </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
import { Modal, Box, Typography, TextField, Button, CircularProgress } from "@mui/material";  // מייבאים את הרכיבים הנדרשים מ-Material-UI
import { useState, useContext, useRef } from "react";  // מייבאים את הפונקציות הנדרשות מ-React
import { userContext } from "./Home";  // מייבאים את ה-context עבור המשתמש
import { Action, User } from "../user";  // מייבאים את ה-User ואת ה-Action
import { api } from "../services/api";  // מייבאים את ה-API
import axios from "axios";  // מייבאים את axios

const style = {  // הגדרת סגנונות למודל
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface UpdateUserProps {  // הגדרת פרופס עבור הקומפוננטה
  onClose: () => void;
  isRegister: boolean;
}

export default function UpdateUser({ onClose, isRegister }: UpdateUserProps) {
  const [open, setOpen] = useState(true);  // משתנה לניהול מצב פתיחת המודל
  const handleClose = onClose;  // פונקציה לסגירת המודל
  const [updateBtn, setUpdateBtn] = useState(false);  // משתנה לניהול מצב הכפתור של עדכון
  const [user, userDispatch] = useContext(userContext);  // שימוש ב-context על מנת לגשת למידע של המשתמש
  const firstNameRef = useRef<HTMLInputElement>(null);  // ref עבור השדה של שם פרטי
  const lastNameRef = useRef<HTMLInputElement>(null);  // ref עבור השדה של שם משפחה
  const addressRef = useRef<HTMLInputElement>(null);  // ref עבור השדה של כתובת
  const idRef = useRef<HTMLInputElement>(null);  // ref עבור השדה של ID
  const emailRef = useRef<HTMLInputElement>(null);  // ref עבור השדה של אימייל
  const phonRef = useRef<HTMLInputElement>(null);  // ref עבור השדה של טלפון
  const [isLoading, setIsLoading] = useState(false);  // משתנה לניהול מצב טעינה
  const [error, setError] = useState<string | null>(null);  // משתנה לניהול שגיאות

  const handleSubmit = async (e: React.FormEvent) => {  // פונקציה לשליחת הטופס
    e.preventDefault();  // מונע את התנהגות ברירת המחדל של הטופס
    const userSubmit: User = {  // יצירת אובייקט משתמש עם הערכים שהוזנו
      firstName: firstNameRef.current!.value,
      lastName: lastNameRef.current!.value,
      email: emailRef.current!.value,
      address: addressRef.current!.value,
      phone: phonRef.current!.value,
      id: idRef.current!.value
    };

    try {
      setIsLoading(true);  // מתחילים טעינה
      setError(null);  // מאפסים את השגיאות אם ישנן

      let response;  // משתנה לאחסון התגובה מה-API
      if (isRegister) {
        response = await api.register(userSubmit);  // אם אנחנו ברישום, נשלח את הנתונים ל-API של הרישום
      } else {
        response = await api.updateUser(userSubmit);  // אם לא, נשלח את הנתונים ל-API של עדכון
      }

      if (response?.data) {  // אם קיבלנו תשובה תקינה מה-API
        console.log(response.data);  // הדפסת התשובה לקונסול
      }

      // שליחת פעולה (action) לעדכון ה-context
      const action: Action = {
        type: 'UPDATE',
        data: userSubmit
      };
      userDispatch(action);  // עדכון ה-context
      setUpdateBtn(!updateBtn);  // החלפת מצב כפתור העדכון
      handleClose();  // סגירת המודל
    } catch (e) {
      console.error("Error: ", e);  // טיפול בשגיאות
      setError("An error occurred while processing your request.");  // הצגת שגיאה כללית
    } finally {
      setIsLoading(false);  // סיום טעינה
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{ mt: 2 }}>
            Please fill in the details below.
          </Typography>
          <form>
            {/* שדות הטופס של המשתמש */}
            <TextField label="First Name" defaultValue={user.firstName} inputRef={firstNameRef} sx={{ mt: 2 }} />
            <TextField label="Last Name" defaultValue={user.lastName} inputRef={lastNameRef} sx={{ mt: 2 }} />
            <TextField label="Id" defaultValue={user.id} inputRef={idRef} sx={{ mt: 2 }} type="number" />
            <TextField label="Address" defaultValue={user.address} inputRef={addressRef} sx={{ mt: 2 }} />
            <TextField label="Phone" defaultValue={user.phone} inputRef={phonRef} sx={{ mt: 2 }} />
            <TextField label="Email" defaultValue={user.email} inputRef={emailRef} sx={{ mt: 2 }} />
            
            {/* הצגת שגיאות אם יש */}
            {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}

            {/* כפתור עדכון עם הצגת אינדיקציה של טעינה */}
            <Button
              onClick={handleSubmit}
              style={{ margin: '40px' }}
              disabled={isLoading}  // הכפתור יהיה מנוטרל בזמן טעינה
            >
              {isLoading ? <CircularProgress size={24} /> : 'Update'}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
