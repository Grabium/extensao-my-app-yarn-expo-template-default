import axios from "axios";

const token = 'asdfad78941555fASDFTGHYjusdfgTY4156123';

//domínio fornecido pelo Ngrok.

const ngrokEnd = 'https://dfa6-45-224-205-144.ngrok-free.app';
const sufix    =  '/api';

const api = axios.create({
    baseURL: ngrokEnd+sufix,
    headers:{'Authorization': token}
});


export default api;