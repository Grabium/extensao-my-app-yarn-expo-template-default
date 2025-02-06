import Model from "./Model";

class User extends Model{

    constructor(
        name:       string,
        about:      string,

    ){
        super(  name,
                about
        );
        
        this.name     = name;
        this.about    = about;
    }   
}

export default User;
