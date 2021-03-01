import axios from "axios";

const baseUrl = `http://fundoonotes.incubation.bridgelabz.com/api/user`;
const Url = `http://fundoonotes.incubation.bridgelabz.com/api/`;
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

export function resetPass(data, id) {
    console.log("This is reset password part", data, id);
    let data3 = axios.post(`${baseUrl}/reset-password`, data, { headers: { 'Authorization': id } });
    return data3;
};
export function forgotPass(data) {
    console.log("This is forgot password part", data);
    let data3 = axios.post(`${baseUrl}/reset`, data);
    return data3;

};
export function addNote(data) {
    console.log("this is take a note ")
    return axios.post(`${Url}/notes/addNotes`, data, { headers: { 'Authorization': localStorage.getItem('token') } })

}

export function updateNotes(formData) {
    return axios.post(`${Url}/notes/updateNotes`, formData, { headers: { 'Authorization': localStorage.getItem('token') } })
}

export function getNotes() {
    let data4= axios.get(`${Url}/notes/getNotesList`, { headers: { 'Authorization': localStorage.getItem('token') } })
    return data4;
};

export function  deleteNotes(formData){
        return axios.post(`${Url}/notes/trashNotes`,formData,{headers:{'Authorization':localStorage.getItem('token')}})
}

export function getTrashNotes(){
    let data5= axios.get(`${Url}/notes/getTrashNotesList`,{headers:{'Authorization':localStorage.getItem('token')}})
   return data5; 
};

export function ArchiveNotes(data){
    return axios.post(`${Url}/notes/archiveNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})
  };

  export function getArchiveNotes(){
   let data6 =axios.get(`${Url}/notes/getArchiveNotesList`,{headers:{'Authorization':localStorage.getItem('token')}})
 return data6;  
};

export function  changeColor(data){
    return axios.post(`${Url}/notes/changesColorNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})
  };
// export function  changeColor(data){
//     return axios.post(`http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes`,data,{headers:{'Authorization':localStorage.getItem('token')}})
//   };

export function deleteForever(data){
    console.log(data);
    return axios.post(`${Url}/notes/deleteForeverNotes`, data,{headers:{'Authorization':localStorage.getItem('token')}})
}