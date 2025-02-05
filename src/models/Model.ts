//import User from "./User";

export default class Model{

    protected name:       string;
    protected email:      string;
    protected password:   number;
    protected about:      string;

    constructor(
        name:       string,
        email:      string,
        password:   number,
        about:      string
    ){
            
        this.name     = name;
        this.email    = email;
        this.password = password;
        this.about    = about;
    }

    /***
     * return string    to not-validated
     * return undefined to validated
    ****/

    public validateRequireds():Array<any>{
       
        //valores preestabelecidos
        let validated = true;
        let msg = 'Campo(s) requerido(s):';
        let pending = [];
        

        //análise das entradas
        let strpass = this.password;
        let l = strpass.toString().length;
        pending.push(l == 0 ? 'password' : null);
        pending.push(this.email.length == 0 ? 'email' : null); 
        pending.push(this.name.length == 0 ? 'name' : null);

        console.log('pending  l: '+pending.length)

        for(let i = 0; i<3 ;i++){
            
            //caso falte um dos requeridos
            if(pending[i] != null){
                msg = msg +' ['+ pending[i]+']';
                validated = false;
            }
            
            
        }
            
        msg = validated == false ? msg : 'Objeto validado.';
        //do contrário, seguem os valores preestabelecidos
        console.log(msg);
        return [validated, msg];
    }

    /***
     * true  = validated
     * false = not-validated
    ***/
    
    public validateEmail():Array<any>{
        const ifValid = this.email == this.name+'@'+this.name ? [true, 'Campo [email] válido'] : [false, 'ATENÇÃO Campo: [email] inválido!'];
        return ifValid;
    }
} 