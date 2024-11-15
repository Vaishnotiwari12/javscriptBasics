class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}vaishno`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("v@vaishno.ai", "abc")
console.log(hitesh.email);

//getter value ko get karta hai 
//and setter set kr karta hai
