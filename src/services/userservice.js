import axios from "axios";

const baseUrl = `http://fundoonotes.incubation.bridgelabz.com/api/user`;

export function login(data) {
    console.log("This is the Sign in part", data);
    let data2 = axios.post(`${baseUrl}/login`, data);
    return data2;
}

export default function registration(data) {
    console.log("This is the registration part", data);
    let data1 = axios.post(`${baseUrl}/userSignUp`, data);
    return data1;
};
