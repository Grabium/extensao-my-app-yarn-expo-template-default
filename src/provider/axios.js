import axios from "axios";

const token = 'asdfad78941555fASDFTGHYjusdfgTY4156123';


const ngrokEnd = 'https://ef05-45-224-205-192.ngrok-free.app';
const sufix    =  '/api';

const api = axios.create({
    baseURL: ngrokEnd+sufix,
    headers:{'Authorization': token}
});


export default api;