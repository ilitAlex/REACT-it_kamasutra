import * as axios from "axios";

export  const API_KEY = '67a83f25-dada-4ce0-bc69-2a476914b60d';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    timeout: 2000,
    headers: {"API-KEY": API_KEY},
    withCredentials: true,
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize= 10) {
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
};

// https://social-network.samuraijs.com/api/1.0/users?page=1&count=10


