import axios from "axios";

const token = 'asdfad78941555fASDFTGHYjusdfgTY4156123';

//domínio fornecido pelo Ngrok. Veja ../Ops.txt

const ngrokEnd = 'https://aacc-45-224-204-70.ngrok-free.app';
const sufix    =  '/api';

const api = axios.create({
    baseURL: ngrokEnd+sufix,
    headers:{'Authorization': token}
});


export default api;