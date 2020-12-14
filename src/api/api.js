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
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



