import axios from 'axios';
import { User } from '../user';
const BASE_URL = 'http://localhost:3000/api';

export const api = {

    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(BASE_URL + '/user/login/', {
                email,
                password
            });
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    },

    register: async (user: User) => {
        console.log("regester", user);
        try {
            const response = await axios.post(BASE_URL + '/user/register', user);
            return response.data;
        } catch (error) {
            console.error('register error: ', error);
            throw new Error('Regester failed');
        }
    },

    // updateUser: async (user: User) => {
    //     try {
    //         const response = await axios.put(BASE_URL + '/user', user);
    //         return response.data;
    //     } catch (error) {
    //         throw new Error('Update failed');
    //     }
    // },
    // updateUser: async (user: User) => {
    //     try {
    //         const response = await axios.put(
    //             BASE_URL + '/user',
    //             user,
    //             {
    //                 headers: {
    //                     'user-id': user.password 
    //                 }
    //             }
    //         );
    //         return response.data;
    //     } catch (error) {
    //         throw new Error('Update failed');
    //     }
    // }
    updateUser: async (user: User) => {
        try {
            const response = await axios.put(
                BASE_URL + '/user',
                {
                    ...user
                },
                {
                    headers: {
                        'user-id': user.id.toString(),
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error in updateUser:", error);
            throw new Error('Update failed');
        }
    },


}