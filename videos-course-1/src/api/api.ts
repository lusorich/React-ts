import axios from 'axios';
import { resolveProjectReferencePath } from 'typescript';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "1141da07-ebec-4731-a397-21d7e8f5304a"
    }
})

export const getUsers = (currentPage: any = 1, pageSize: any = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const authApi = () => {
    return instance.get('auth/me').then(response => response.data)
}


export const followApi = (id: any) => {
    return instance.post(`follow/${id}`, {}).then(response => response.data);
}

export const unfollowApi = (id: any) => {
    return instance.delete(`follow/${id}`).then(response => response.data)
}