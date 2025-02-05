import axios from "axios";

const token = 'asdfad78941555fASDFTGHYjusdfgTY4156123';


const ngrokEnd = 'https://dfa6-45-224-205-144.ngrok-free.app';
const sufix    =  '/api';

const api = axios.create({
    baseURL: ngrokEnd+sufix,
    headers:{'Authorization': token}
});


export default api;


//set-location C:\xampp\htdocs\API-DA-EXTENSAO\Cadastro
//php artisan serve

//set-location C:\Users\Gabriel\AppData\Local\ngrok
//.\ngrok http 8000
