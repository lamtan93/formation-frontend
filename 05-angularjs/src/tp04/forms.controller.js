import "./forms.css"
export default class FormController {

    constructor() {
        this.currentUser = {
            /*name:'name init', 
            email: "eami@ddd.fr"*/
            name:'', 
            email: ''
        }
    }

    reset() {
        this.currentUser = {}
    }

    save(name, email) {
        this.name = name;
        this.email = email;
    }


}