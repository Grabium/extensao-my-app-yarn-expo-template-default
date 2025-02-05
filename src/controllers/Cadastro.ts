
import User from "../models/User";
import api from "../provider/axios";

class Cadastro{
    
    private debgResp(response:any){
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        console.log(response.request);
    }
    
    public async list(){

        console.log('Iniciando   list()...');
        try{
            let response = await api.get('/users');
            let data     = response.data.data;
            let msg      = response.data.msg;
            
            let resp = {
                msg     : 'API respondeu: \''+msg+'\'',
                dataLen : data.length,
                data    : data
            };

            console.log('Finalizando list()...');
            return resp;
        
        }catch(error:any){
            const resp = {
                msg    : 'Não foi possível concluir: '+error.response.data
            };

            console.log(resp.msg);
            return resp;
        }    
    }

    public async register(user:User){

        console.log('User: ' + (user instanceof User).toString());
        console.log('Iniciando   register()...');
        try{
            let response = await api.post('/users', user.get());
            let data     = response.data.data;
            let msg      = response.data.msg;
            
            let resp = {
                msg     : 'API respondeu: \''+msg+'\'',
                dataLen : data.length,
                data    : data
            };

            console.log('Finalizando register()...');
            return resp;
        
        }catch(error:any){
            const resp = {
                msg    : 'Não foi possível concluir: '+error.response.data
            };

            console.log(resp.msg);
            return resp;
        }    
    }

    public async update(user:User, id:string){

        console.log('User: ' + (user instanceof User).toString());
        console.log('Iniciando   update()...');
        console.log(user.get().password);
        
        try{
            let response = await api.put('/users/'+id, user.get());
            let data     = response.data.data;
            let msg      = response.data.msg;
            
            let resp = {
                msg     : 'API respondeu: \''+msg+'\'',
                dataLen : data.length,
                data    : data
            };

            console.log('Finalizando udate()...');
            return resp;
        
        }catch(error:any){
            const resp = {
                msg    : 'Não foi possível concluir: '+error.response.data
            };

            console.log(resp.msg);
            return resp;
        }    
    }

    public async exclude(id:number){

        console.log('id a ser excluído: '+id);
        console.log('Iniciando   exclude()...');

        try{
            let response = await api.delete('/users/'+id);
            let data     = response.data.data;
            let msg      = response.data.msg;
            
            let resp = {
                msg     : 'API respondeu: \''+msg+'\'',
                dataLen : data.length,
                data    : data
            };

            console.log('Finalizando exclude()...');
            return resp;
        
        }catch(error:any){
            const resp = {
                msg    : 'Não foi possível excluir: '+error.response.data
            };

            console.log(resp.msg);
            return resp;
        }  
    }

}

const cadastro:Cadastro = new Cadastro();
console.log('Objeto [Cadastro] foi instanciado.')
export default cadastro;
