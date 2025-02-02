export type User = {
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    phone: string,
    id: string
}

export type Action = {
    type: 'ADD' | 'REMOVE' | 'UPDATE' | 'GET',
    data: User
}

export const reducer = (state: string | User | undefined, action: Action): User => {
    console.log('action', action);
    switch (action.type) {
        case 'ADD':
            {
                console.log(action.data);
                
                const tempUser: string | undefined | null = localStorage.getItem(action.data.id)
                if (tempUser) {
                    const tempUserObject = JSON.parse(tempUser)
                    // if (tempUserObject.firstName === action.data.firstName)
                        // alert('loged in')
                    // else
                        // alert('name and password are not same: ' + action.data.firstName + ' ' + action.data.password)
                }
                else {
                    localStorage.setItem(action.data.id, JSON.stringify(action.data))
                    // alert('added')
                }
                return action.data
            }
        case 'REMOVE': {
            console.log(action.data);
            // alert('Removed')
            localStorage.removeItem(action.data.id)
            return { firstName: '', lastName: '', email: '', address: '', phone: '', id: '' }
        }
        case 'UPDATE':
            {
                console.log(action.data);
                // alert('Updated')
                const tempUser: string | undefined | null = localStorage.getItem(action.data.id)
                if (tempUser) {
                    const tempUserObject = JSON.parse(tempUser)
                    if (!(tempUserObject.firstName === action.data.firstName &&
                        tempUserObject.lastName === action.data.lastName))
                        localStorage.removeItem(action.data.id)
                    else
                        localStorage.setItem(action.data.id, JSON.stringify(action.data))
                }
                return action.data
            }
        case 'GET': {
            // alert('Get')
            const getUser: string | undefined | null = localStorage.getItem(action.data.id)
            return getUser ? JSON.parse(getUser) : state as User
        }
        default:
            return state as User
    }
}