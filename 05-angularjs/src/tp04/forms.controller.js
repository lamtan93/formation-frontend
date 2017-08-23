/*
class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }



    toString() {
        return 'Name' + this.name + ', email: ' + this.email;
    }
}
*/

export default class FormController {

    constructor() {
        this.currentUser = {
            name:'name init', 
            email: "eami@ddd.fr"
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