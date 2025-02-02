// // import Avatar from '@mui/material/Avatar';
// // import Stack from '@mui/material/Stack';
// // import { deepOrange } from '@mui/material/colors';
// // import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
// // import { userContext } from './Home';
// // import { Button } from '@mui/material';
// // import UpdateUser from './updateUser';

// // export const isOpenBtnContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>([
// //     {} as boolean,
// //     () => { },
// // ]);


// // export default function ShowUser() {
// //     const [user, dispatch] = useContext(userContext);
// //     const [IsOpenBtn, setIsOpenBtn] = useState(false);
// //     return (
// //         <>
// //         <isOpenBtnContext.Provider value={[IsOpenBtn, setIsOpenBtn]}>
// //             <div>
// //                 <Stack direction="row" spacing={2}>
// //                     {user.email ?
// //                         (<Avatar
// //                             sx={{ bgcolor: deepOrange[300] }}
// //                             alt="Remy Sharp"
// //                             src="/broken-image.jpg"
// //                         >
// //                             {user.email[0]}
// //                         </Avatar>)
// //                         :
// //                         (<Avatar src="/broken-image.jpg" />)}
// //                     <button onClick={() => { setIsOpenBtn(true) }} style={{
// //                         position: "absolute",
// //                         top: "10px",
// //                         left: "40px",
// //                     }}>update</button>
// //                 </Stack>
// //             </div>
// //             <h3 style={{ textAlign: 'center' }}>{user.firstName} {user.lastName}</h3>
// //             {IsOpenBtn && <UpdateUser onClose={() => setIsOpenBtn(false)} isRegister={false} />}
// //             </isOpenBtnContext.Provider>
// //         </>
// //     );
// // }
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';
// import { useContext, useState } from 'react';
// import { userContext } from './Home';
// import { Button } from '@mui/material';
// import UpdateUser from './updateUser';

// export default function ShowUser() {
//     const [user] = useContext(userContext);  // לא צריך Dispatch, רק את ה-user
//     const [isOpenBtn, setIsOpenBtn] = useState(false);

//     return (
//         <div style={{ position: 'relative' }}>
//             <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
//                 {user.email ? (
//                     <Avatar
//                         sx={{ bgcolor: deepOrange[300] }}
//                         alt="User Avatar"
//                     >
//                         {user.firstName[0]} {/* הצגת האות הראשונה של שם המשתמש */}
//                     </Avatar>
//                 ) : (
//                     <Avatar src="/broken-image.jpg" />
//                 )}

//                 <Button
//                     variant="outlined"
//                     onClick={() => setIsOpenBtn(true)}
//                     sx={{ position: 'absolute', top: '10px', left: '10px' }}
//                 >
//                     Update
//                 </Button>
//             </Stack>

//             <h3 style={{ textAlign: 'center' }}>
//                 {user.firstName} {user.lastName}
//             </h3>

//             {isOpenBtn && <UpdateUser onClose={() => setIsOpenBtn(false)} isRegister={false} />}
//         </div>
//     );
// }

import Avatar from '@mui/material/Avatar';  // מייבאים את רכיב ה-Avatar
import Stack from '@mui/material/Stack';  // מייבאים את רכיב ה-Stack
import { deepOrange } from '@mui/material/colors';  // מייבאים את הצבעים של Material-UI
import { useContext, useState } from 'react';  // מייבאים את פונקציות ה-React
import { userContext } from './Home';  // מייבאים את ה-context של המשתמש
import { Button } from '@mui/material';  // מייבאים את רכיב ה-Button
import UpdateUser from './updateUser';  // מייבאים את רכיב העדכון של המשתמש

export default function ShowUser() {
  const [user] = useContext(userContext);  // שואבים את המידע של המשתמש מתוך ה-context
  const [isOpenBtn, setIsOpenBtn] = useState(false);  // משתנה לניהול מצב פתיחת המודל

  return (
    <div style={{ position: 'relative' }}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
        {/* הצגת ה-Avatar עם שם המשתמש */}
        {user.email ? (
          <Avatar
            sx={{ bgcolor: deepOrange[300] }}  // צבע רקע עבור האוואטר
            alt="User Avatar"
          >
            {user.firstName[0]} {/* הצגת האות הראשונה משם המשתמש */}
          </Avatar>
        ) : (
          <Avatar src="/broken-image.jpg" />  // אם אין למשתמש תמונה, הצגת תמונה שבורה
        )}

        {/* כפתור פתיחת המודל לעדכון */}
        <Button
          variant="outlined"
          onClick={() => setIsOpenBtn(true)}  // ברגע שלחצו, המודל ייפתח
          sx={{ position: 'absolute', top: '10px', left: '10px' }}
        >
          Update
        </Button>
      </Stack>

      {/* הצגת שם המשתמש */}
      <h3 style={{ textAlign: 'center' }}>
        {user.firstName} {user.lastName}
      </h3>

      {/* הצגת המודל של עדכון המשתמש */}
      {isOpenBtn && <UpdateUser onClose={() => setIsOpenBtn(false)} isRegister={false} />}
    </div>
  );
}
