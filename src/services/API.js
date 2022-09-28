import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f'
});

export function fetchDragon () {
    return instance.get(`/`)
}