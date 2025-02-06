//import User from "./User";

export default class Model{

    protected name:       string = '';
    protected email:      string = '';
    protected password:   number = 0;
    protected about:      string = 'Atualize mais tarde.';
    private   pending:    Array<string|null> = [];

    constructor(
        name:       string,
        about:      string
    ){
            
        this.name     = name;
        this.about    = about;
        
    }


    /*****
     * GETs e Sets
    ******/

    public setEmail(email:string):void{
        this.email = email;
    }

    public getEmail():string{
        return this.email;
    }

    public setPassword(password:number):void{
        this.password = password;
    }

    public getPassword():number{
        return this.password;
    }

    public get(method:string):any{

        if(method === 'put'){
            return {
                name:     this.name,
                about:    this.about 
            }

        }else if(method === 'post'){
            return {
                name:     this.name, 
                email:    this.email,
                password: this.password,
                about:    this.about 
            }
        }
    } 

    /****
     * Validações
    ****/

    private valiName(){
        this.pending.push(this.name.length == 0 ? 'name' : 'ok');
        console.log('nome require:')
        console.log(this.pending)
    }

    private valiEmail(){
        this.pending.push(this.email.length == 0 ? 'email' : 'ok');
        console.log('email require:')
        console.log(this.pending)
    }

    private valiPassword(){
        let strpass = this.password;
        let l = strpass.toString().length;
        this.pending.push(l == 0 ? 'password' : 'ok');
        console.log('password require:')
        console.log(this.pending)
    }

    private pendingIterator(qtd:number):Array<boolean|string>{
        //valores iniciais:
        let validated = true;
        let msg = 'Campo(s) requerido(s):';

        for(let i = 0; i<qtd ;i++){    
            //caso falte um dos requeridos
            if(this.pending[i] !== 'ok'){
                console.log(this.pending[i]);
                msg = msg +' ['+ this.pending[i]+']';
                validated = false;
            }
        }

        return [validated, msg];
    }

    public validateRequiredsCreate():Array<any>{

        //análise das entradas
        this.valiName();
        this.valiEmail();
        this.valiPassword();

        let [validated, msg] = this.pendingIterator(3);
        if (!validated){
            console.log(msg);
            return [validated, msg];
        }
        msg = 'Campos requeridos preenchidos. Ok!';
        console.log(msg);

        [validated, msg] = this.validateEmail();
        if (!validated){
            console.log(msg);
            return [validated, msg];
        }
        msg = 'Email está Ok!';
        console.log(msg);

        
        msg = 'Dados para criação APROVADOS!'
        console.log(msg);
        return [validated, msg];
    }

    public validateRequiredsUpdate():Array<boolean|string>{
        
        //análise do único campo obrigatório: nome.
        this.valiName();

        let [validated, msg] = this.pendingIterator(1);
        if (!validated){
            console.log(msg);
            return [validated, msg];
        }
        msg = 'Campos requeridos preenchidos. Ok!';
        console.log(msg);
        
        msg = 'Dados para atualização APROVADOS!'
        console.log(msg);
        return [validated, msg];
    }
    
    public validateEmail():Array<boolean|string>{
        const validated = this.email == this.name+'@foo.com' ? [true, 'Campo [email] válido'] : [false, 'ATENÇÃO Campo: [email] inválido! Use <nome>@foo.com'];
        return validated;
    }
} 