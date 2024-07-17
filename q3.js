// Write a “person” class to hold all the details.
class Person {
    constructor(name,age,gender,address,email,phoneNumber){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    toString() {
        console.log(`Person[name=${this.name}, 
        age=${this.age}, 
        gender=${this.gender}, 
        address=${this.address}, 
        phoneNumber=${this.phoneNumber}, 
        email=${this.email}]`);
    }
}
let persons = [];
persons.push(new Person("Sowmiya", 25, "Female", "24-A, D.R.Nagar,Puducherry", "sowmimiya43@gmail.com", "123-456-7890"));
persons.push(new Person("Deepa", 26, "Female", "13, Lenin St, Puducherry", "Deeoasangavy97@gmail.com", "321-369-4260"));

//Print all the persons
for (const element of persons){
    element.toString();
}
