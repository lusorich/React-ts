import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "1141da07-ebec-4731-a397-21d7e8f5304a"
    }
})

export const usersAPI = {
    unfollowApi: (id: any) => {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followApi: (id: any) => {
        return instance.post(`follow/${id}`, {}).then(response => response.data);
    },
    authApi: () => {
        return instance.get('auth/me').then(response => response.data)
    },
    getUsers: (currentPage: any = 1, pageSize: any = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfileAPI: (userId: string) => {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(newStatus: string) {
        return instance.put('profile/status', { status: newStatus })
    }
}

export const loginAPI = {
    login(email: string, password: string, remeberMe: boolean = false) {
        return instance.post('auth/login', {
            email,
            password,
            remeberMe
        });
    },
    logout() {
        return instance.delete('auth/login');
    }
}