export type User = {
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    id: number
}

export type Action = {
    type: 'ADD' | 'REMOVE' | 'UPDATE' | 'GET',
    data: User
}
export const reducer = (state: User | undefined, action: Action): User => {
    switch (action.type) {
        case 'ADD':
            return action.data;
        case 'REMOVE':
            return { firstName: '', lastName: '', email: '', address: '', phone: '', password: '', id: 0 };
        case 'UPDATE':
            return action.data; 
        case 'GET':
            return state || { firstName: '', lastName: '', email: '', address: '', phone: '', password: '', id: 0 };
        default:
            return state || { firstName: '', lastName: '', email: '', address: '', phone: '', password: '', id: 0 };
    }
}