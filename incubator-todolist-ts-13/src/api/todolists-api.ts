import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": '1141da07-ebec-4731-a397-21d7e8f5304a'
    }
}

export const todolistsAPI = {
    getTodolists() {
        return axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings);
    }
}