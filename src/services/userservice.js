import axios from "axios";

const baseUrl = `http://fundoonotes.incubation.bridgelabz.com/api/user`;
const Url=`http://fundoonotes.incubation.bridgelabz.com/api/`;
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

export function resetPass(data,id) {
    console.log("This is reset password part", data,id);
    let data3 = axios.post(`${baseUrl}/reset-password`,data,{headers:{'Authorization':id}});
    return data3;   
};
export function forgotPass(data) {
    console.log("This is forgot password part", data);
    let data3 = axios.post(`${baseUrl}/reset`, data);
    return data3;

};
// export function addNote(data){
//     console.log("this is take a note ")
//         return axios.post(`${Url}/notes/addNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})

// }
// export function getNotes(){
//     console.log("this is get all notes ")
//         return axios.post(`${Url}/notes/getNotesList`,{headers:{'Authorization':localStorage.getItem('token')}})

// }

// export function updateNotes(formData)  {
//         return axios.post(`${Url}/notes/updateNotes`,formData,{headers:{'Authorization':localStorage.getItem('token')}})
// }
export function addNote(data){
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})

}

export function getNotes(){
    return axios.get(`http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`,{headers:{'Authorization':localStorage.getItem('token')}})
  };

export function updateNotes(formData)  {
        return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes`,formData,{headers:{'Authorization':localStorage.getItem('token')}})
}