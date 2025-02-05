import Model from "./Model";

class User extends Model{

    private requirements: Array<any>;
    private  statusEmail: Array<any>;

    constructor(
        name:       string,
        email:      string,
        password:   number,
        about:      string,

    ){
        super(  name,
                email,
                password,
                about
        );
        
        this.name     = name;
        this.email    = email;
        this.password = password;
        this.about    = about;
    
        this.requirements = this.validateRequireds();
        this.statusEmail  = this.validateEmail();
        console.log(this.requirements[1]);
        console.log(this.statusEmail[1]);
        
    }

    public get(){
        return {
            name:     this.name, 
            email:    this.email,
            password: this.password,
            about:    this.about 
        }
    }

    public validation(){
        if(this.requirements[0] == false){
            return this.requirements;
        }

        if(this.statusEmail[0] == false){
            return this.statusEmail;
        }

        return [true];
    }
    
}

export default User;
